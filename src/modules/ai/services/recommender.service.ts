import * as tf from '@tensorflow/tfjs-node';

import { Injectable, NotFoundException } from '@nestjs/common';

import { ContextService } from './context.service';
import { FeatureEngineeringService } from './feature-engineering.service';
import { ModelService } from './model.service';
import { DatasetService } from './dataset.service';
import { UsersService } from 'src/modules/users/users.service';

import type { Context } from '../types/context/context.types';
import type { RecommendedReading } from '../types/recommended-reading.type';

@Injectable()
export class RecommenderService {
  private model: tf.LayersModel;
  private context: Context;

  constructor(
    private readonly contextService: ContextService,
    private readonly featureEngineeringService: FeatureEngineeringService,
    private readonly modelService: ModelService,
    private readonly datasetService: DatasetService,
    private readonly usersService: UsersService,
  ) {}

  async train(): Promise<void> {
    const context = await this.contextService.create();

    const trainData = this.datasetService.userBookTrainingData(context);

    this.model = await this.modelService.create(trainData);
    this.context = context;
  }

  async predict(userId: string): Promise<RecommendedReading[]> {
    if (!this.model) {
      throw new NotFoundException('Model not found.');
    }

    if (!this.context) {
      throw new NotFoundException('Context not found.');
    }

    const readerProfile = await this.usersService.findReaderProfile(userId);

    const userEmbedding = this.featureEngineeringService
      .embedUser({ user: readerProfile, context: this.context })
      .dataSync();

    const inputs = this.context.bookEmbeddings.map((bookEmbedding) => [
      ...userEmbedding,
      ...bookEmbedding.embed,
    ]);

    const predictions = this.model.predict(tf.tensor2d(inputs)) as tf.Tensor;

    const scores = predictions.dataSync();

    const readBooks = new Set(
      readerProfile.readings?.map((reading) => reading.book.id) ?? [],
    );

    const recommendations = this.context.bookEmbeddings
      .map((bookVector, index) => ({
        id: bookVector.id,
        title: bookVector.title,
        author: bookVector.author,
        literaryGenres: bookVector.literaryGenres,
        countActiveReadings: bookVector.countActiveReadings,
        score: Number(scores[index].toFixed(2)),
      }))
      .filter((book) => !readBooks.has(book.id));

    const sortedItems = recommendations
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);

    return sortedItems;
  }
}

import * as tf from '@tensorflow/tfjs-node';

import { Injectable } from '@nestjs/common';

import { FeatureEngineeringService } from './feature-engineering.service';

import type { UserBookTrainingData } from '../types/dataset/user-book-training-data.type';
import type { Context } from '../types/context/context.types';

@Injectable()
export class DatasetService {
  constructor(
    private readonly featureEngineeringService: FeatureEngineeringService,
  ) {}

  userBookTrainingData(context: Context): UserBookTrainingData {
    const inputs: number[][] = [];
    const labels: number[] = [];

    context.users.forEach((reader) => {
      const userEmbedding = this.featureEngineeringService
        .embedUser({
          user: reader,
          context,
        })
        .dataSync();

      const readBooks = new Set(
        reader.readings.map((reading) => reading.book.id),
      );

      const positiveBooks = context.bookEmbeddings.filter((book) =>
        readBooks.has(book.id),
      );

      const negativeBooks = context.bookEmbeddings
        .filter((book) => !readBooks.has(book.id))
        .slice(0, positiveBooks.length * 5);

      positiveBooks.forEach((bookEmbedding) => {
        inputs.push([...userEmbedding, ...bookEmbedding.embed]);
        labels.push(1);
      });

      negativeBooks.forEach((bookEmbedding) => {
        inputs.push([...userEmbedding, ...bookEmbedding.embed]);
        labels.push(0);
      });
    });

    return {
      xs: tf.tensor2d(inputs),
      ys: tf.tensor2d(labels, [labels.length, 1]),
      inputDimension: inputs[0].length,
    };
  }
}

import * as tf from '@tensorflow/tfjs-node';

import { Injectable } from '@nestjs/common';

import path from 'path';
import fs from 'fs';

import type { UserBookTrainingData } from '../types/dataset/user-book-training-data.type';

@Injectable()
export class ModelService {
  async create({
    xs,
    ys,
    inputDimension,
  }: UserBookTrainingData): Promise<tf.Sequential> {
    const model = tf.sequential({
      layers: [
        tf.layers.dense({
          inputShape: [inputDimension],
          units: 64,
          activation: 'relu',
        }),
        tf.layers.dense({
          units: 32,
          activation: 'relu',
        }),

        tf.layers.dense({ units: 1, activation: 'sigmoid' }),
      ],
    });

    model.compile({
      optimizer: tf.train.adam(0.001),
      loss: 'binaryCrossentropy',
      metrics: ['accuracy'],
    });

    await model.fit(xs, ys, {
      epochs: 40,
      batchSize: 32,
      shuffle: true,
    });

    const modelDir = path.resolve('./models/recommender-model');

    fs.mkdirSync(modelDir, { recursive: true });

    await model.save(`file://${modelDir}`);

    return model;
  }
}

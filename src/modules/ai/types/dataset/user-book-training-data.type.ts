import * as tf from '@tensorflow/tfjs-node';

export type UserBookTrainingData = {
  xs: tf.Tensor2D;
  ys: tf.Tensor2D;
  inputDimension: number;
};

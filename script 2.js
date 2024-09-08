// script.js

const tf = require('@tensorflow/tfjs');

// مدل را بارگیری کنید
const model = tf.sequential();
model.add(tf.layers.dense({ units: 128, activation: 'relu', inputShape: [10] }));
model.add(tf.layers.dense({ units: 10, activation: 'softmax' }));
model.compile({ optimizer: tf.optimizers.adam(), loss: 'categoricalCrossentropy', metrics: ['accuracy'] });

// داده‌های آموزشی را بارگیری کنید
const trainData = [
    { input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], output: [0, 0, 0, 0, 1, 0, 0, 0, 0, 0] },
    { input: [2, 3, 4, 5, 6, 7, 8, 9, 10, 1], output: [0, 0, 0, 1, 0, 0, 0, 0, 0, 0] },
    // ...
];

// مدل را آموزش دهید
model.fit
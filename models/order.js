const path = require('path');
const mongoose = require('mongoose');

const { Schema } = mongoose;

const generalSchema = new Schema({ // Схема
  data: [{
    product_id: {
      type: Schema.Types.ObjectId,
      ref: 'product',
    },
    amount: [{
      type:Schema.Types.Number,
    }]
  }],
  sum: {
    type: Schema.Types.Number,
  },
  sign: [{
    name: { type: Schema.Types.String },
    val: { type: Schema.Types.Mixed }
  }],
  delivery: {
    d_type: { type: Schema.Types.String },
    data: { type: Schema.Types.Mixed }
  },
  recipient: {
    name: { type: Schema.Types.String },
    phone: { type: Schema.Types.String }
  },
  status: {
    type: Schema.Types.String,
    enum: ['open', 'complete']
  }
}, { timestamps: true }); // Настройки схемы, в данном случае добавить поле createdAt, updatedAt (когда создали документ, когда обновили документ)


const modelname = path.basename(__filename, '.js'); // Название модели совпадает с названием файла модели. Тут мы получаем имя файла без расширения .js
const model = mongoose.model(modelname, generalSchema); // собственно создаем модель
module.exports = model;

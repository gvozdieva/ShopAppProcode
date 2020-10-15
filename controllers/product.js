const productModel = require('models/product');

const model = new productModel({ // Схема
  name: 'Наушники Promate Tempo-BT Red',
  props: [{
    name: 'Цвет',
    val: 'red',
  }, {
    name: 'Микрофон',
    val: 'true',
  }, {
    name: 'Тип наушников',
    val: ' 1',
  }],
  params: {
    name: 'Тип наушников',
    val: 'Накладные',
  },
  price: 10000,
});
model.save();

const getList = async (params) => {
  const docs = await productModel.find(params);
  const products = docs.map((doc) => {
    // console.log(doc);
    doc.toObject({ getters: true, virtuals: true });
  });

  return products;
};

const getById = () => {};

// module.exports.getById = getById
module.exports = {
  getList,
  getById,
};

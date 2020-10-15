// конфигурация базы данных
module.exports = {
  db: {
    // uri: 'mongodb://localhost:27017/ShopApp_test',
    uri: 'mongodb://localhost:27017/ShopApp_test',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
};

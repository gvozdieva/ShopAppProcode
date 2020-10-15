// модуль запускает WS сервер
const { init } = require('wsServ');

module.exports = async (server) => {
  await init(server);
  logger.info(' - - ws server listening');
};

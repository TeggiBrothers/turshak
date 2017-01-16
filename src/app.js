function App(config) {
  if (!config) {
    console.error("Could not read config");
    process.exit(1);
  }

  const express = require('express');
  const path = require('path');
  const bodyParser = require('body-parser');
  const cookieParser = require('cookie-parser');
  const services = require("./api/services");
  const app = express();

  app.use(bodyParser());
  app.use(cookieParser());
  app.use('/api', services(config));
  app.use('/video', express.static(path.join(__dirname, config.videosUri)));
  app.use('/', express.static(path.join(__dirname, config.clientUri)));

  app.listen(config.server.port, function () {
    console.log('App has started on port %s', config.server.port);
  });
}
module.exports = App;

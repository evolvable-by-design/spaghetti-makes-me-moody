'use strict';

const SwaggerExpress = require('swagger-express-mw');
const cors = require('cors');
const app = require('express')();
module.exports = app; // for testing

const config = {
  appRoot: __dirname // required config
};

app.use(cors());

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) {
    throw err;
  }

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  var server = app.listen(port);

  var host =
    server.address().address === '::' ? 'localhost' : server.address().address;
  console.log('Spaghetti back-end is running at http://' + host + ':' + port);
});

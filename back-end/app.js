'use strict';

const SwaggerExpress = require('swagger-express-mw');
const app = require('express')();
const cors = require('cors');
const path = require('path');
const YAML = require('yamljs');
const apiDocumentation = YAML.load(
  path.join(__dirname, '/api/swagger/open-api-v0.0.2.yaml')
);
module.exports = app; // for testing

const config = {
  appRoot: __dirname // required config
};

app.use(cors({ preflightContinue: true, methods: '*', allowedHeaders: '*' }));
app.options('/', (_, res) => res.status(200).json(apiDocumentation));
app.options('*', cors());

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

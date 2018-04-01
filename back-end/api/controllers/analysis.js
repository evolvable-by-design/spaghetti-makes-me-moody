'use strict';
/*
 'use strict' is not required but helpful for turning syntactical errors into true errors in the program flow
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
*/

/*
 Modules make it possible to import JavaScript files into your application.  Modules are imported
 using 'require' statements that give you a reference to the module.

  It is a good idea to list the modules that your application depends on in the package.json in the project root
 */
const textAnalyzer = require('../helpers/textAnalyzer');
const mongoIF = require('../helpers/mongoInterface');
const axios = require('axios');

/*
 Once you 'require' a module you can reference the things that it exports.  These are defined in module.exports.

 For a controller in a127 (which this is) you should export the functions referenced in your Swagger document by name.

 Either:
  - The HTTP Verb of the corresponding operation (get, put, post, delete, etc)
  - Or the operationId associated with the operation in your Swagger document

  In the starter/skeleton project the 'get' operation on the '/hello' path has an operationId named 'hello'.  Here,
  we specify that in the exports of this module that 'hello' maps to the function named 'hello'
 */
module.exports = {
  analyzeEntry: analyzeEntry
};

/*
  Functions in a127 controllers used for operations should take two parameters:

  Param 1: a handle to the request object
  Param 2: a handle to the response object
 */
function analyzeEntry(req, res) {
  var text = req.swagger.params.data.value.text;
  var username = req.swagger.params.data.value.username;
  var password = req.swagger.params.data.value.password;
  console.log(username);
  console.log(password);
  console.log(!!username || !!password);
  let postData = {
    document: {
      type: 'PLAIN_TEXT',
      content: text
    }
  };

  return axios
    .all([postAnalyzeSentiment(postData), postClassifyText(postData)])
    .then(
      axios.spread(function(sentiment, classification) {
        let classData = classification
          ? textAnalyzer.classificationFeedback(classification.data)
          : '';
        let sentData = sentiment
          ? textAnalyzer.sentimentFeedback(sentiment.data.documentSentiment)
          : null;
        let historyData = {
          date: new Date(),
          entry: text,
          sentimentData: sentData,
          classificationData: classData
        };

        if (!!username || !!password) {
          mongoIF
            .updateUser(username, password, historyData)
            .then(function(isUpdated) {
              if (isUpdated === 1) {
                res.status(404).json('User not found!');
              } else {
                res.status(201).json({
                  message: 'Entry successfully analyzed and saved!',
                  data: historyData
                });
              }
            })
            .catch(function(error) {
              res.status(400).json('Something went very wrong');
              console.log(error);
            });
        } else {
          res.status(200).json({
            message: 'Entry successfully analyzed!',
            data: historyData
          });
        }
      })
    )
    .catch(function(error) {
      res.status(400).json('Something went very wrong');
      console.log(error);
    });
}

function postAnalyzeSentiment(data) {
  return (
    axios
      .post(
        'https://language.googleapis.com/v1/documents:analyzeSentiment?key=AIzaSyBAGVnmL3X96nCv0GLAxuFw4-czBVTrfyo',
        data
      )
      /* This then + catch allows us to have errors even though using .all() later */
      .then(function(content) {
        return content;
      })
      .catch(function(error) {
        console.log(error);
      })
  );
}

function postClassifyText(data) {
  return axios
    .post(
      'https://language.googleapis.com/v1/documents:classifyText?key=AIzaSyBAGVnmL3X96nCv0GLAxuFw4-czBVTrfyo',
      data
    )
    .then(function(content) {
      return content;
    })
    .catch(function(error) {
      console.log(error);
    });
}

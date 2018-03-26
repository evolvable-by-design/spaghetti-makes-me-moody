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
const mongoIF = require('../helpers/mongoInterface');

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
  createUser: createNewUser,
  retrieveUser: retrieveUser
};

/*
  Functions in a127 controllers used for operations should take two parameters:

  Param 1: a handle to the request object
  Param 2: a handle to the response object
 */
function createNewUser(req, res) {
  var userName = req.swagger.params.userName.value;
  var password = req.swagger.params.password.value;

  (async function() {
    try {
      let isCreated = await mongoIF.createUser(userName, password);
      if (isCreated === 1) {
        res.status(400).json('User name already exists!');
      } else {
        res.status(201).json('User created successfully!');
      }
    } catch (err) {
      console.log(err.stack);
    }
  })();
}

function retrieveUser(req, res) {
  var userName = req.swagger.params.userName.value;
  var password = req.swagger.params.password.value;

  (async function() {
    try {
      let isFound = await mongoIF.retrieveUser(userName, password);
      if (isFound === 2) {
        res.status(401).json('Password is incorrect!');
      } else if (isFound === 1) {
        res.status(404).json('User not found!');
      } else {
        res.json({
          message: 'User retrieved successfully!',
          data: isFound
        });
      }
    } catch (err) {
      console.log(err.stack);
    }
  })();
}

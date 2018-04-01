var passwordValidator = require('password-validator');
var passSchema = new passwordValidator();
passSchema
  .is()
  .min(8) // Minimum length 8
  .is()
  .max(25) // Maximum length 25
  .has()
  .not()
  .spaces(); // Should not have spaces

var userSchema = new passwordValidator();
userSchema
  .is()
  .min(3) // Minimum length 3
  .is()
  .max(30) // Maximum length 30
  .has()
  .not()
  .spaces(); // Should not have spaces

var loginPassSchema = new passwordValidator();
loginPassSchema
  .is()
  .min(1) // Minimum length 1
  .has()
  .not()
  .spaces(); // Should not have spaces

exports.passSchema = passSchema;
exports.userSchema = userSchema;
exports.loginPassSchema = loginPassSchema;

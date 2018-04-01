import axios from 'axios';
var baseUrl = 'http://localhost:10010';

export function createUser(username, password, historyData, callback) {
  var url = baseUrl + '/createUser/' + username + '/password/' + password
  axios({
      method: 'post',
      url: url,
      data: { historyData },
      headers: {
          'Content-Type': 'application/json'
      }
    })
    .then(function(response) {
      callback(response.status);
    })
    .catch(function(error) {
      if (error.response) {
        callback(error.response.status);
      } else if (error.request) {
        callback(504);
      } else {
        callback(504);
      }
    })
}

export function retrieveUser(username, password, callback) {
  var url = baseUrl + '/retrieveUser/' + username + '/password/' + password
  axios({
      method: 'get',
      url: url,
      data: {},
      headers: {
          'Content-Type': 'application/json'
      }
    })
    .then(function(response) {
      callback(response.status);
    })
    .catch(function(error) {
      if (error.response) {
        callback(error.response.status);
      } else if (error.request) {
        callback(504);
      } else {
        callback(504);
      }
    })
}

export function analyzeText(text, callback) {
  console.log(typeof(text))
  var url = baseUrl + '/analyzeText/';
  var formData = 
    {
      text: text
    };

  axios({
      method: 'post',
      url: url,
      data: formData,
    })
    .then(function(response) {
      callback(response);
    })
    .catch(function(error) {
      if (error.response) {
        callback(error.response.status);
      } else if (error.request) {
        callback(504);
      } else {
        callback(504);
      }
    })
}

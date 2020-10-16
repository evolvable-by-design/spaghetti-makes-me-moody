import axios from 'axios';
import vocabulary from '../vocabulary'
export var baseUrl = 'http://localhost:10010';

export class SpaghettiService {

  constructor(pivo) {
    this.pivo = pivo;
  }

  createUser(context, semanticMapping, callback) {
    const parameters = this._getParameters(context, semanticMapping)

    this.pivo.does(vocabulary.actions.createUser).getOrUndefined()
      .invoke(parameters)
      .then(response => {
        callback(response.status)
      })
      .catch(() => {
        callback(504)
      })
  }

  _getParameters(context, semanticMapping) {
    return Object.entries(semanticMapping)
      .map(([semantics, key]) => ([ semantics, context[key] ]))
      .reduce((acc, val) => { acc[val[0]] = val[1]; return acc; }, {});
  }

}

export function createUser(username, password, callback) {
  var url = baseUrl + '/createUser/' + username + '/password/' + password
  axios({
      method: 'post',
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

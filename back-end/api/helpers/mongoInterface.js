'use strict';

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
// If we don't want to continue using mLabs, we can swap in another database
// location here
const url =
  'mongodb://pasta-fan:givemesauce@ds117749.mlab.com:17749/moody-spaghetti';

// Database Name
const dbName = 'moody-spaghetti';

// TODO: Setup some real collections to handle users

const USER_COLLECTION = 'users';

// Create a new user
const createNewUser = async function(username, password) {
  let foundUser = false;
  let client;
  // 1. Check if username exists in db
  try {
    client = await MongoClient.connect(url);
    console.log('Connected correctly to server');

    const db = client.db(dbName);

    // Get the collection
    const col = db.collection(USER_COLLECTION);

    // Get first two documents that match the query
    const docs = await col.find({ userName: username }).toArray();
    //assert.equal(2, docs.length);
    if (docs.length > 0) {
      return 1;
    }

    // Name doesn't exist so insert the user into the db
    let r = await col.insertOne({
      userName: username,
      password: password,
      entryList: []
    });
    assert.equal(1, r.insertedCount);
    return 0;
  } catch (err) {
    console.log(err.stack);
  }

  // Close connection
  client.close();
};

const retrieveUser = async function(username, password) {
  let foundUser = false;
  let client;
  // 1. Check if username exists in db
  try {
    client = await MongoClient.connect(url);
    console.log('Connected correctly to server');

    const db = client.db(dbName);

    // Get the collection
    const col = db.collection(USER_COLLECTION);

    // Get first two documents that match the query
    const docs = await col.find({ userName: username }).toArray();
    //assert.equal(2, docs.length);
    if (docs.length === 0) {
      return 1;
    }
    if (docs[0].password !== password) {
      return 2;
    }

    return docs[0];
  } catch (err) {
    console.log(err.stack);
  }

  // Close connection
  client.close();
};

const updateUser = async function(username, password, entry){
  let foundUser = false;
  let client;

  try {
    client = await MongoClient.connect(url);
    console.log('Connected correctly to server');

    const db = client.db(dbName);

    // Get the collection
    const col = db.collection(USER_COLLECTION);

    // Get first two documents that match the query
    const docs = await col.find({ userName: username }).toArray();
    //assert.equal(2, docs.length);
    if (docs.length < 1) {
      return 1;
    }

    // Name doesn't exist so insert the user into the db
    // let r = await col.insertOne({
    //   userName: username,
    //   password: password,
    //   entryList: []
    // });
    // assert.equal(1, r.insertedCount);
    // return 0;

    //Update the entrylist of the User
    // let r = await col.update({
    //   entrylist: docs[0].entryList.unshift(entry)
    // });
    
    // assert.equal(1, r.updateCount);
    // return 0;

    docs[0].entryList.unshift(entry)
    let r = await col.update({
      entrylist: docs.entryList
    });
  } catch (err) {
    console.log(err.stack);
  }

  // Close connection
  client.close();
};

module.exports = {
  createUser: createNewUser,
  retrieveUser: retrieveUser,
  updateUser: updateUser
};

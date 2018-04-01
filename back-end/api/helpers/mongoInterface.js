'use strict';

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
// If we don't want to continue using mLabs, we can swap in another database
// location here
const url =
  'mongodb://pasta-fan:givemesauce@ds117749.mlab.com:17749/moody-spaghetti';

const dbName = 'moody-spaghetti';

const USER_COLLECTION = 'users';

// Create a new user
const createNewUser = async function(username, password, historyData) {
  let client;

  try {
    client = await MongoClient.connect(url);
    console.log('Connected correctly to mongodb server');

    const db = client.db(dbName);

    // Get the collection
    const col = db.collection(USER_COLLECTION);

    // Check if user exists
    const docs = await col.find({ userName: username }).toArray();
    if (docs.length > 0) {
      return 1;
    }

    // Apparently this is the best way to check object emptiness in js ?
    let historyDataIsEmpty =
      Object.keys(historyData).length === 0 &&
      historyData.constructor === Object;
    let entryList = historyDataIsEmpty ? [] : historyData.historyData;

    // Name doesn't exist so insert the user into the db
    let r = await col.insertOne({
      userName: username,
      password: password,
      entryList: entryList
    });
    assert.equal(1, r.insertedCount);
    console.log('Successfully created user: ', username);
    return 0;
  } catch (err) {
    console.log(err.stack);
  } finally {
    // Close connection
    client.close();
    console.log('Mongo server connection closed.');
  }
};

const retrieveUser = async function(username, password) {
  let client;

  try {
    client = await MongoClient.connect(url);
    console.log('Connected correctly to mongodb server');

    const db = client.db(dbName);

    // Get the collection
    const col = db.collection(USER_COLLECTION);

    // Check if user exists
    const docs = await col.find({ userName: username }).toArray();
    if (docs.length === 0) {
      return 1;
    }
    if (docs[0].password !== password) {
      return 2;
    }

    console.log('Successfully retrieved user: ', username);
    return docs[0];
  } catch (err) {
    console.log(err.stack);
  } finally {
    // Close connection
    client.close();
    console.log('Mongo server connection closed.');
  }
};

const updateUser = async function(username, password, entry) {
  let client;

  try {
    client = await MongoClient.connect(url);
    console.log('Connected correctly to server');

    const db = client.db(dbName);

    // Get the collection
    const col = db.collection(USER_COLLECTION);

    // Check if user exists
    const docs = await col.find({ userName: username }).toArray();
    if (docs.length < 1) {
      return 1;
    }

    // Use mongo specific syntax to update
    let r = await col.updateOne(
      { userName: username },
      {
        $push: {
          entryList: {
            $each: [entry],
            $position: 0
          }
        }
      }
    );
    // Sanity check that we actually updated something
    assert.equal(1, r.modifiedCount);
    console.log('Successfully added entry to user: ', username);
    return 0;
  } catch (err) {
    console.log(err.stack);
  } finally {
    // Close connection
    client.close();
    console.log('Mongo server connection closed.');
  }
};

const deleteEntryAtIndex = async function(username, password, entryIndex) {
  let client;

  try {
    client = await MongoClient.connect(url);
    console.log('Connected correctly to mongodb server');

    const db = client.db(dbName);

    // Get the collection
    const col = db.collection(USER_COLLECTION);

    // Check if user exists
    const docs = await col.find({ userName: username }).toArray();
    if (docs.length < 1) {
      return 1;
    }

    if (docs[0].entryList[entryIndex] === undefined) {
      return 1;
    }

    // This is a hack, and it is NOT atomic, but apparently mongo doesn't have
    // a proper way of remove array items by index. Currently they only support
    // pop from the beginning or end of array
    docs[0].entryList.splice(entryIndex, 1);
    let r = await col.updateOne(
      { userName: username },
      {
        $set: { entryList: docs[0].entryList }
      }
    );

    // Sanity check that we actually updated something
    assert.equal(1, r.modifiedCount);
    console.log('Successfully delete user entry at index: ', entryIndex);
    return 0;
  } catch (err) {
    console.log(err.stack);
  } finally {
    // Close connection
    client.close();
    console.log('Mongo server connection closed.');
  }
};

module.exports = {
  createUser: createNewUser,
  retrieveUser: retrieveUser,
  updateUser: updateUser,
  deleteEntryAtIndex: deleteEntryAtIndex
};

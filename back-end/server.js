const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const app = express();

// TODO: Actually create some endpoints
app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));

// Connection URL
// If we don't want to continue using mLabs, we can swap in another database
// location here
const url =
  'mongodb://pasta-fan:givemesauce@ds117749.mlab.com:17749/moody-spaghetti';

// Database Name
const dbName = 'moody-spaghetti';

// TODO: Setup some real collections to handle users

// ***************************************************************************
// START - Example code for using mongo **************************************
// ***************************************************************************
const insertDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('documents');
  // Insert some documents
  collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log('Inserted 3 documents into the collection');
    callback(result);
  });
};

const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('documents');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log('Found the following records');
    console.log(docs);
    callback(docs);
  });
};

const updateDocument = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('documents');
  // Update document where a is 2, set b equal to 1
  collection.updateOne({ a: 2 }, { $set: { b: 1 } }, function(err, result) {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    console.log('Updated the document with the field a equal to 2');
    callback(result);
  });
};

const removeDocument = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('documents');
  // Delete document where a is 3
  collection.deleteOne({ a: 3 }, function(err, result) {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    console.log('Removed the document with the field a equal to 3');
    callback(result);
  });
};

const dropCollection = function(db, callback) {
  const collection = db.collection('documents');
  // Drop the entire collection (something we probably will rarely want to do,
  // but it's here for a example and so when we run this code as is, the
  // database stays clean
  collection.drop(function(err, result) {
    assert.equal(err, null);
    console.log('Successfully removed the dummy collection.');
    callback(result);
  });
};

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  // Currently nesting a bunch of functions just as an example
  insertDocuments(db, function() {
    findDocuments(db, function() {
      updateDocument(db, function() {
        removeDocument(db, function() {
          dropCollection(db, function() {
            client.close();
          });
        });
      });
    });
  });
});
// ***************************************************************************
// END - Example code for using mongo **************************************
// ***************************************************************************

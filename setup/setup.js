
var MongoClient = require('mongodb').MongoClient,
    assert = require("assert"),
    url = "mongodb://localhost:27017/swtest";

MongoClient.connect(url, function(err,db){
  assert.equal(null,err);
  console.log("Conectado Correctamente al Server");
  var sleepColl = db.collection("sleepDataSet");
  var sleepFileData = require("./sleepData.json");
  sleepColl.insert(sleepFileData,function(err, result){
    assert.equal(20, result.result.n);
    assert.equal(20, result.ops.length);
    console.log("Se insertaron 20 observaciones.");
    db.close();
  });
});

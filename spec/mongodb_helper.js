// Sets up connection to test database

var mongoose = require("mongoose");

// Connects to test database and creates a connection instance
beforeAll(function (done) {
  mongoose.connect("mongodb://0.0.0.0/throughYourEyes_test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  var db = mongoose.connection;
  db.on("error", console.error.bind(console, "MongoDB connection error:"));
  db.on("open", function () {
    done();
  });
});

// Closes connection to test database
afterAll(function (done) {
  mongoose.connection.close(true, function () {
    done();
  });
});

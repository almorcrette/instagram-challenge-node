const mongoose = require("mongoose");

// Connection to test database
require("../mongodb_helper");

// Imports the User model
const User = require("../../models/user");

describe("User model", () => {

  // Wipes the test database before each test
  beforeEach((done) => {
    mongoose.connection.collections.users.drop(() => {
      done();
    });
  });

  it("has a username", () => {
    const user = new User({
      username: "someone",
      email: "someone@example.com",
      password: "password",
    });
    expect(user.username).toEqual("someone");
  });

  it("has an email address", () => {
    const user = new User({
      username: "someone",
      email: "someone@example.com",
      password: "password",
    });
    expect(user.email).toEqual("someone@example.com");
  });

  it("has a password", () => {
    const user = new User({
      username: "someone",
      email: "someone@example.com",
      password: "password",
    });
    expect(user.password).toEqual("password");
  });

  it("can list all users", (done) => {
    User.find((err, users) => {
      expect(err).toBeNull();
      expect(users).toEqual([]);
      done();
    });
  });

  it("can save a user", (done) => {
    const user = new User({
      username: "someone",
      email: "someone@example.com",
      password: "password",
    });

    user.save((err) => {
      expect(err).toBeNull();

      User.find((err, users) => {
        expect(err).toBeNull();

        expect(users[0]).toMatchObject({
          username: "someone",
          email: "someone@example.com",
          password: "password",
        });
        done();
      });
    });
  });
});

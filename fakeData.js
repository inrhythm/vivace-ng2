var faker = require('faker');

module.exports = function() {
  var output = [];

  for (var i = 0; i < 80; i++) {
    output.push({
      id: i,
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      shortDescription: faker.lorem.sentence(),
      avatar: faker.internet.avatar(),
      comments: [],
      lastContact: faker.date.past()
    });
  }
  return {candidates: output};
};

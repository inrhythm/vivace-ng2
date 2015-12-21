var faker = require('faker');

module.exports = function(num) {
  var output = [];
  var x = num || 80;

  for (var i = 0; i < x; i++) {
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

const { faker } = require('@faker-js/faker');

// Generates random profiles
const getRandomProfiles = (req, res) => {
  const profiles = [];
  for (let i = 0; i < 10; i++) {
    const profile = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      address: faker.location.streetAddress(),
      city: faker.location.city(),
      country: faker.location.country(),
    };
    profiles.push(profile);
  }
  res.json(profiles);
};

module.exports = { getRandomProfiles };
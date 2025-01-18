const express = require('express');
const { faker } = require('@faker-js/faker');

const app = express();
const port = 3000;

app.get('/random-profiles', (req, res) => {
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
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

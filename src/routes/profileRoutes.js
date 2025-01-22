const express = require('express');
const { getRandomProfiles } = require('../controllers/profileController');

const router = express.Router();

// Define route for random profiles
router.get('/random-profiles', getRandomProfiles);

module.exports = router;
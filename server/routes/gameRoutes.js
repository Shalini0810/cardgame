const express = require('express');
const { startGame, submitCard, getScores } = require('../controllers/gameController');

const router = express.Router();

router.post('/start', startGame);
router.post('/submit', submitCard);
router.get('/scores', getScores);

module.exports = router;
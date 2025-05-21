const mongoose = require('mongoose');

const ScoreSchema = new mongoose.Schema({
    playerId: { type: String, required: true },
    wins: { type: Number, default: 0 },
    losses: { type: Number, default: 0 },
});

module.exports = mongoose.model('Score', ScoreSchema);
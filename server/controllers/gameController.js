const Score = require('../models/Score');

exports.startGame = (req, res) => {
    // Initialize game state and send response
    res.status(200).json({ message: 'Game started' });
};

exports.submitCard = async (req, res) => {
    const { playerCard, computerCard } = req.body;

    // Logic to determine if cards match
    let result;
    if (playerCard.value === computerCard.value || playerCard.suit === computerCard.suit) {
        result = 'win';
        // Logic to update scores
        await updateScores(req.userId, true);
    } else {
        result = 'loss';
        await updateScores(req.userId, false);
    }

    res.status(200).json({ result });
};

const updateScores = async (userId, isWin) => {
    const score = await Score.findOne({ playerId: userId });
    if (score) {
        score.wins += isWin ? 1 : 0;
        score.losses += isWin ? 0 : 1;
        await score.save();
    } else {
        const newScore = new Score({ playerId: userId, wins: isWin ? 1 : 0, losses: isWin ? 0 : 1 });
        await newScore.save();
    }
};

exports.getScores = async (req, res) => {
    const score = await Score.findOne({ playerId: req.userId });
    res.status(200).json(score || { wins: 0, losses: 0 });
};
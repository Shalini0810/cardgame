import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

const getRandomCard = () => {
  const suit = suits[Math.floor(Math.random() * suits.length)];
  const value = values[Math.floor(Math.random() * values.length)];
  return { suit, value };
};

const Game = () => {
  const [playerCard, setPlayerCard] = useState(getRandomCard());
  const [computerCard, setComputerCard] = useState(getRandomCard());
  const [result, setResult] = useState('');
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);

  const handlePlay = () => {
    const newPlayerCard = getRandomCard();
    const newComputerCard = getRandomCard();
    setPlayerCard(newPlayerCard);
    setComputerCard(newComputerCard);

    // Compare cards: Player wins if cards have the same value or suit
    if (
      newPlayerCard.value === newComputerCard.value ||
      newPlayerCard.suit === newComputerCard.suit
    ) {
      setResult('You Win!');
      setWins(wins + 1);
    } else {
      setResult('Computer Wins!');
      setLosses(losses + 1);
    }
  };

  const data = {
    labels: ['Wins', 'Losses'],
    datasets: [
      {
        label: 'Game Results',
        data: [wins, losses],
        backgroundColor: ['#36A2EB', '#FF6384'],
        hoverBackgroundColor: ['#36A2EB', '#FF6384'],
      },
    ],
  };

  return (
    <div>
      <h2>Play Your Card</h2>
      <div className="cards">
        <div className={`card ${playerCard.suit === 'hearts' || playerCard.suit === 'diamonds' ? 'red' : 'black'}`}>
          {playerCard.value} <br /> {playerCard.suit}
        </div>
        <div className={`card ${computerCard.suit === 'hearts' || computerCard.suit === 'diamonds' ? 'red' : 'black'}`}>
          {computerCard.value} <br /> {computerCard.suit}
        </div>
      </div>
      <button onClick={handlePlay}>Play</button>
      {result && <p className="result">{result}</p>}

      <h2>Win-Loss Ratio</h2>
      <div className="chart-container">
        <Pie data={data} />
      </div>
    </div>
  );
};

export default Game;
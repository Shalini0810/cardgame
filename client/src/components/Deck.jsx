import React, { useState, useEffect } from 'react';
import Card from './Card';

const Deck = () => {
    const [deck, setDeck] = useState([]);
    const [drawnCards, setDrawnCards] = useState([]);

    useEffect(() => {
        const createDeck = () => {
            const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
            const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
            const newDeck = [];

            suits.forEach(suit => {
                values.forEach(value => {
                    newDeck.push({ suit, value });
                });
            });

            setDeck(shuffleDeck(newDeck));
        };

        createDeck();
    }, []);

    const shuffleDeck = (deck) => {
        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
        return deck;
    };

    const drawCard = () => {
        if (deck.length > 0) {
            const card = deck.pop();
            setDrawnCards([...drawnCards, card]);
            setDeck(deck);
        }
    };

    return (
        <div>
            <h2>Deck of Cards</h2>
            <button onClick={drawCard}>Draw Card</button>
            <div className="card-container">
                {drawnCards.map((card, index) => (
                    <Card key={index} value={card.value} suit={card.suit} />
                ))}
            </div>
        </div>
    );
};

export default Deck;
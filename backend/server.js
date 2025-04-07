const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let bets = [
    { id: '1', userId: '100', eventName: 'Football Match', amount: 50, status: 'Pending' },
    { id: '2', userId: '101', eventName: 'Basketball Game', amount: 30, status: 'Won' },
    { id: '3', userId: '102', eventName: 'Tennis Match', amount: 45, status: 'Lost' },
    { id: '4', userId: '103', eventName: 'Rugby Game', amount: 25, status: 'Pending' },
    { id: '5', userId: '104', eventName: 'Cricket Game', amount: 20, status: 'Won' },
    { id: '6', userId: '105', eventName: 'Baseball Game', amount: 60, status: 'Lost' },
    { id: '7', userId: '106', eventName: 'Hockey Match', amount: 55, status: 'Pending' },
    { id: '8', userId: '107', eventName: 'Soccer Game', amount: 35, status: 'Won' },
    { id: '9', userId: '108', eventName: 'Boxing Match', amount: 40, status: 'Lost' },
    { id: '10', userId: '109', eventName: 'Golf Game', amount: 65, status: 'Pending' },
    { id: '11', userId: '110', eventName: 'Volleyball Match', amount: 70, status: 'Won' },
    { id: '12', userId: '111', eventName: 'Table Tennis Match', amount: 75, status: 'Lost' },
    { id: '13', userId: '112', eventName: 'Bowling Game', amount: 80, status: 'Pending' },
    { id: '14', userId: '113', eventName: 'Car Racing', amount: 85, status: 'Won' },
    { id: '15', userId: '114', eventName: 'Bicycle Racing', amount: 90, status: 'Lost' },
    { id: '16', userId: '115', eventName: 'Marathon', amount: 95, status: 'Pending' },
    { id: '17', userId: '116', eventName: 'Swimming Competition', amount: 100, status: 'Won' },
    { id: '18', userId: '117', eventName: 'Chess Tournament', amount: 105, status: 'Lost' },
    { id: '19', userId: '118', eventName: 'Poker Tournament', amount: 110, status: 'Pending' },
    { id: '20', userId: '119', eventName: 'Badminton Match', amount: 115, status: 'Won' }
  ];
  

app.get('/bets', (req, res) => {
  res.json(bets);
});

app.put('/bets/:id', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const index = bets.findIndex(bet => bet.id === id);
  if (index === -1) {
    return res.status(404).send('Bet not found');
  }
  bets[index].status = status;
  res.send('Bet updated successfully');
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

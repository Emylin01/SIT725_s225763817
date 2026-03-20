const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies (for POST requests)
app.use(express.json());

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// In-memory array to store quotes
let quotes = [
    "The best way to predict the future is to invent it.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Do not wait to strike till the iron is hot; but make it hot by striking."
];

// GET endpoint to retrieve a random quote
app.get('/api/quote', (req, res) => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    res.json({ quote: quotes[randomIndex] });
});

// POST endpoint to add a new quote
app.post('/api/quote', (req, res) => {
    const { quote } = req.body;
    if (!quote || typeof quote !== 'string') {
        return res.status(400).json({ error: 'Please provide a valid quote.' });
    }
    quotes.push(quote);
    res.json({ message: 'Quote added successfully.', quotes });
});

//----------------ADD ---------------- 
app.get('/add', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);

    if (isNaN(a) || isNaN(b)) {
        return res.send("Please provide numbers using ?a= and ?b=");
    }
    const sum=a+b;
    res.send(`The sum is: ${sum}`);
})

// ---------------- SQUARE ----------------
app.get('/square', (req, res) => {
  const num = parseFloat(req.query.num);

  if (isNaN(num)) {
    return res.send("Please provide a valid number using ?num=");
  }

  res.send(`Square is: ${num * num}`);
});

//----------------Start server----------------
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
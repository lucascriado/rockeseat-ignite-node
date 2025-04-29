const express = require('express');

const app = express();

// Methods
// GET: Retrieve data
// POST: Create data
// PUT: Update data
// PATCH: Update data
// DELETE: Delete data
// OPTIONS: Check what methods are allowed

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.get('/courses', (req, res) => {
    return res.json([
        'Node.js',
        'React.js',
        'React Native',
        'Angular'
    ]);
});

app.post('/courses', (req, res) => {
    return res.json([
        'Node.js',
        'React.js',
        'React Native',
    ]);
});

app.put('/courses/:id', (req, res) => {
    return res.json([
        'Node.js + Docker',
        'React.js',
        'React Native',
        'Angular'
    ]);
});

app.patch('/courses/:id', (req, res) => {
    return res.json([
        'Node.js + Docker',
        'HTML',
        'React Native',
        'Angular'
    ]);
});

app.delete('/courses/:id', (req, res) => {
    return res.json([
        'Node.js + Docker',
        'HTML'
    ]);
});

app.listen(3333, () => {
  console.log('Server is running on port 3333');
});


// Node.js (index.js)
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, open source contributor!!');
});

// New endpoint to fetch sample data
app.get('/data', (req, res) => {
  res.json({
    message: 'This is some sample data for beginners!',
    tip: 'Please read CONTRIBUTING.md for instructions on how to contribute.'
  });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Sample API listening at http://localhost:${port}`);
  });
}

module.exports = app;

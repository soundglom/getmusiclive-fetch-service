const express = require('express');
const app = express();
const PORT = process.env.NODE_ENV || 5003;
const EVENTBRITE_KEY = process.env.EVENTBRITE_KEY;



app.use('/', (req, res) => {
  res.send('working');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
  console.log(EVENTBRITE_KEY);
});
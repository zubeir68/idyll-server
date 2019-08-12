const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('http');


// Prevent Heroku from putting app to sleep
setInterval(() => {
    http.get('https://idyll.herokuapp.com');
}, 300000); // every 5 minutes (300000)

const app = express();

// Bodyparser
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// cors
app.use(cors());

// Routes
app.use('/', require('./routes/index'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));

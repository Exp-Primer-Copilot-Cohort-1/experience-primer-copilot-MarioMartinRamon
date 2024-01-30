// Create web server

// Import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

// Create express app
const app = express();

// Import routes
const comments = require('./routes/comments');

// Setup app
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

// Setup routes
app.use('/comments', comments);

// Start server
app.listen(process.env.PORT || 8081);
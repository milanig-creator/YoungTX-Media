require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
const routes = require('./routes/index');
app.use('/', routes);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 YTX Media is live at http://localhost:${PORT}`);
});

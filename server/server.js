const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');
var cors = require('cors');
const uri = process.env.MONGODB_URI;

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var corsOptions = {
  origin: '*',
  credentials: true,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}
app.use(cors(corsOptions));
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => console.log(`Now listening on localhost: ${PORT}`));
});
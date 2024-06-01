const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

mongoose.connect('mongodb://localhost/inventory', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(bodyParser.json());

const itemsRouter = require('./routes/items');
app.use('/items', itemsRouter);

app.listen(3000, () => console.log('Server started on port 3000'));

const express = require('express');
const cors = require('cors');

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

app.listen(5000, () => console.log('app is listening on port 5000'));

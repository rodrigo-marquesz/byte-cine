const express = require('express');
const connectDb = require('../infra/db');
const movieRoutes = require('./routes/movie.routes');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 3000;

connectDb();

app.use(express.json());

app.use('/api/movies', movieRoutes);
app.listen(port, () => console.log(`Server is running on port ${port}`));

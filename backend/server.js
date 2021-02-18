const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const usersRouter = require('./routes/users');
const exercisesRouter = require('./routes/exercises');

const app = express();

app.use(express.json())
app.use(cors());

app.use('/users', usersRouter);
app.use('/exercises', exercisesRouter);


const CONNECTION_URL = 'mongodb+srv://:@cluster0.4pf0f.mongodb.net/<dbname>?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT} \nConnected to database`)))
    .catch((error) => console.log(error.message))

mongoose.set('useFindAndModify', false);

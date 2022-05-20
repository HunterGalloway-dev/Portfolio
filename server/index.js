require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

// Express app components
const PORT = process.env.PORT || 5000;
const app = express();

// Set up mongoose and MongoDB connection
const mongoConString = process.env.DATABASE_URL
mongoose.connect(mongoConString)
const database = mongoose.connection

// Database testing connection
database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected')
})

// Express app setup
app.use(cors({
    origin: '*'
}))

app.use(express.json())

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`)
})

const routes = require('./routes/routes')

app.use('/api', routes)
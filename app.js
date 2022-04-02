const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config();

//Set up mongoose connection
const client = new MongoClient(process.env.DATABASE, 
    { useNewUrlParser: true, 
      useUnifiedTopology: true,
      serverApi: ServerApiVersion.v1});
      client.connect().then(() => {
          console.log('DB Connected')
      }).catch(() => {
          console.log('Unable to connect')
      });


// Use parsing middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors);

//Import Routes
const userRoutes = require('./routes/user');

//Using routes
app.use('/api', userRoutes)

const port = process.env.PORT || 8000

//starting server

app.listen(port, () => {
    console.log(`App is running at ${port}`)
})





//old connection
//var mongoDB = 'mongodb+srv://casey:1111@cluster0.s8ihz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
// mongoose.connect(process.env.DATABASE, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true
// }).then(() => {
//     console.log('DB Connected')
// }).catch(() => {
//     console.log('Unable to Connect')
// });
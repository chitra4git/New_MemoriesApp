import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';

const app = express ();
dotenv.config();
//this line setup the postpage in'http://localhost:5000/posts'

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

//setup application
app.use('/posts', postRoutes);


//connect the database

const PORT  = process.env.PORT || 5000;

//this setup helps to not get any warning in the console.

// mongoose.set('strictQuery', true);  

mongoose. connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set("strictQuery", true);

//mongoose.set('useFindAndModify', false);

// If you get to the 'useFindAndModify' error which I did, use this instead: mongoose.connect(CONNECTION_URL).then(()=>{console.log('...')})


// const CONNECTION_URL = process.env.CONNECTION_URL
// const PORT = process.env.PORT;
// mongoose.connect(CONNECTION_URL, {useNewUrlParser: true , useUnifiedTopology: true})
// .then(()=>{app.listen(PORT, ()=>{console.log(`server run on port: ${PORT} and connected to mongoose`)})})
// .catch((error)=>{ console.error(error)})

// mongoose.set('strictQuery', false);
// // mongoose.set('useFindAndModify', false);
// console.log(process.env.CONNECTION_URL)


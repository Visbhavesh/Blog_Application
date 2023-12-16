const express=require('express');
const connectDb = require('./db/connectDb');
const app =express();
const Router=require('./routes/route');

const cors = require('cors');
const bodyParser= require( 'body-parser');

require('dotenv').config();

const port=process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use('/',Router);




const start=async()=>{
    try {
        await connectDb(process.env.MONGO_URI);
        console.log('db connected');
        app.listen(port,()=>{
            console.log('Server is running');
        });
        
    } catch (error) {
        console.log(error);
    }
}
start();
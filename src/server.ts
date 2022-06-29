import express from 'express';
//import bodyParser from 'body-parser';

const app =express();
const address= 3000;

//app.use(bodyParser.json());
app.get('/', (req:express.Request, res:express.Response)=>{
    res.send("Hello from get!");
});

app.listen(address,()=>{
    console.log(`starting app from: ${address}`);
});
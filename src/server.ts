import express from 'express';
//import cors from 'cors';
import bodyParser from 'body-parser';

const app =express();
const address= 3000;
 //const HOST = 'localhost';
// const corsOptions = {
//     origin: 'http://example.com',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//   }

app.use(bodyParser.json());

app.get('/', (req:express.Request, res:express.Response)=>{
    res.send("Hello from get!");
});

// app.get('/articles', (_req:express.Request, res:express.Response) => {
//     try {
//         res.send('this is the INDEX route')
//     } catch (err) {
//         res.status(400)
//         res.json(err)
//     }
// })

// app.get('/articles/:id', (_req: express.Request, res: express.Response) => {
//     try {
//        res.send('this is the SHOW route')
//     } catch (err) {
//        res.status(400)
//        res.json(err)
//     }
// })

// app.post('/articles', (req:express.Request, res:express.Response) => {
//     const article: Article = {
//       title: req.body.title,
//       content: req.body.content
//     }
//     try {
//        res.send('this is the CREATE route')
//     } catch (err) {
//        res.status(400)
//        res.json(err)
//     }
// })

// app.put('/articles/:id', (req:express. Request, res:express.Response) => {
//     const article: Article = {
//       id: req.params.id, 
//       title: req.body.title,
//       content: req.body.content
//     }
//     try {
//        res.send('this is the EDIT route')
//     } catch (err) {
//        res.status(400)
//        res.json(err)
//     }
// })

// app.delete('/articles/:id', (_req:express.Request, res:express.Response) => {
//     try {
//        res.send('this is the DELETE route')
//     } catch (err) {
//        res.status(400)
//        res.json(err)
//     }
// })

app.listen(address,()=>{
    console.log(`starting app from: ${address}`);
});
import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import mongoose from 'mongoose'
import Messages from './dbMessages.js';
import Pusher from 'pusher';
import cors from 'cors'

const app = express()
const port = process.env.PORT || 9000

const pusher = new Pusher({
    appId: "1544515",
    key: "02bedc1bb439b4e54777",
    secret: "7c6e72da6401f3fbf97e",
    cluster: "ap2",
    useTLS: true
  });
app.use(express.json());
app.use(cors())
mongoose.set('strictQuery', true);
mongoose.connect(process.env.connection_url,{
   
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db= mongoose.connection

db.once('open',()=>{
    console.log("DB connected");

    const msgCollection = db.collection("messagecontents");
    const changeStream = msgCollection.watch();

    changeStream.on('change', (change) =>{
        console.log("A Change occured",change);

        if (change.operationType === 'insert'){
            const messageDetails = change.fullDocument;
            pusher.trigger('messages', 'inserted',{
                name: messageDetails.name,
                message: messageDetails.message,
                timestamp: messageDetails.timestamp,
                received: messageDetails.received,
            }
            );
        }else{
            console.log('Error triggering Pusher');
        }
    })
})

app.get('/',(req, res)=>res.status(200).send('hello world'));

app.get('/messages/sync', (req, res)=>{
    Messages.find((err, data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
})

app.post('/messages/new',(req, res)=>{
    const dbMessage = req.body

    Messages.create(dbMessage,(err,data)=>{
        if(err){
            res.status(500).send(err)
        } else{
            res.status(201).send(`new message created: \n ${data}`)
        }
    })

})

app.listen(port, ()=>console.log(`Listening on localhost: ${port}`))
import express from 'express'; 
import cors from 'cors';
import dotenv from 'dotenv'; 

dotenv.config();

const app = express();

const Port = process.env.PORT || 5000;

app.use(cors())

app.use(express.json());

app.get('/',(req,res) =>{
    res.send('API is running!')
})

app.listen(Port,()=>{
    console.log(`Server is running on port ${Port}`);
})
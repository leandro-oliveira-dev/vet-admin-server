import express from 'express'; 
import cors from 'cors';
import dotenv from 'dotenv'; 
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes';


const mongoURI ='mongodb+srv://lleandrosilva:<db_password>@cluster0.p9xaj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

mongoose
.connect(mongoURI)
.then(()=>{
    console.log('Connected to MongoDB')
})
.catch((error) => {
    console.error("Erro ao conectar ao MongoDB:", error);
  });

dotenv.config();

const app = express();

const Port = process.env.PORT || 5000;

app.use(cors())

app.use(express.json());
console.log('pronto')

app.get('/',(req,res) =>{
    res.send('API is running!')
})

app.use(userRoutes);

app.listen(Port,()=>{
    console.log(`Server is running on port ${Port}`);
})
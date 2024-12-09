import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';
import clientRoutes from './routes/clienteRoutes'
import petRoutes from './routes/petRoutes'

dotenv.config();

const app = express();

const Port = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());
app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.send('API is running!');
});

app.use(userRoutes);
app.use('/clients', clientRoutes); // Rota para os clientes
app.use('/pets', petRoutes); // Rota para os pets

app.listen(Port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${Port}`);
});

import express from 'express';
import dotnev from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import todosRoutes from './routes/todos.js';

const app = express();
dotnev.config();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/todos', todosRoutes);

app.get('/', (req, res) => {
  res.send('Welcome');
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.mongodb, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`port is listening on port ${PORT}`));
  })
  .catch((err) => console.log(err));

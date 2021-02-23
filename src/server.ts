import app from './app';
import dotenv from 'dotenv';
import './database';
import connection from './database';

dotenv.config();

connection.create();

const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

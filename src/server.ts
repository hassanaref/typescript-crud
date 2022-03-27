require("dotenv").config();
import express from 'express';
import mongoose from "mongoose";
import dates from './routes/date';

const app = express();

mongoose.connect(`${process.env.LOCAL_DB}`);
mongoose.connection
  .once('open', () => console.log('good to go!'))
  .on('error', error => {
    console.warn('warning', error);
  });

app.use(express.json());
app.use(dates);

app.listen(process.env.PORT || 3000, () => {
  console.log('typescript server started');
});

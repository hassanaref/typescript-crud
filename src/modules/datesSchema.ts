import {Schema, model} from 'mongoose';

//dates schema interface
interface dates {
  date: Date,
  data: Schema.Types.Mixed
};

//mongoDB storage
const dateSchema = new Schema<dates>({
  date: Date,
  data: Schema.Types.Mixed
});
const dateDB = model<dates>('date', dateSchema);
export default dateDB;
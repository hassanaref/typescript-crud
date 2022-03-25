import dateDB from '../modules/datesSchema';
import {Request,Response} from 'express';

const saveDate = async (req:Request, res:Response) => {
  res.send('Date Saved');
  const dates = new dateDB({ date: (new Date()), data: req.body });
  await dates.save();
}

const readDates = async (req:Request,res:Response) => {
  const dates = await dateDB.find();
  res.json(dates);
};

const readOneDate = async (req:Request,res:Response) => {
  const date = await dateDB.findOne({_id:req.params.id});
  res.json(date);
}

const updateDate = async (req:Request,res:Response) => {
  const updated = await dateDB.updateOne({_id:req.params.id}, {data:req.body})
  res.send(`${updated.modifiedCount}`)
}

const deleteDate = async (req:Request,res:Response) => {
  const deleted = await dateDB.deleteOne({_id:req.params.id})
  if (deleted.deletedCount==0){
    res.send('not found')
  } else {res.send('deleted')}
}
export {saveDate,readDates,readOneDate, updateDate,deleteDate};

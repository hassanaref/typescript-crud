import express from 'express';
import { saveDate,readDates, readOneDate,updateDate,deleteDate } from '../controllers/dateController';
const router = express.Router();

router.route("/")
    .get(readDates)
    .post(saveDate);

router.route('/:id')
    .get(readOneDate)
    .patch(updateDate)
    .delete(deleteDate)
export default router;
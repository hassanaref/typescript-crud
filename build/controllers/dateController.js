"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDate = exports.updateDate = exports.readOneDate = exports.readDates = exports.saveDate = void 0;
const datesSchema_1 = __importDefault(require("../modules/datesSchema"));
const saveDate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send('Date Saved');
    const dates = new datesSchema_1.default({ date: (new Date()), data: req.body });
    yield dates.save();
});
exports.saveDate = saveDate;
const readDates = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const dates = yield datesSchema_1.default.find();
    res.json(dates);
});
exports.readDates = readDates;
const readOneDate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const date = yield datesSchema_1.default.findOne({ _id: req.params.id });
    res.json(date);
});
exports.readOneDate = readOneDate;
const updateDate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updated = yield datesSchema_1.default.updateOne({ _id: req.params.id }, { data: req.body });
    res.send(`${updated.modifiedCount}`);
});
exports.updateDate = updateDate;
const deleteDate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deleted = yield datesSchema_1.default.deleteOne({ _id: req.params.id });
    if (deleted.deletedCount == 0) {
        res.send('not found');
    }
    else {
        res.send('deleted');
    }
});
exports.deleteDate = deleteDate;

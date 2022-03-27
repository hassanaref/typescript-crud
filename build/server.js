"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const date_1 = __importDefault(require("./routes/date"));
const app = (0, express_1.default)();
mongoose_1.default.connect(`${process.env.LOCAL_DB}`);
mongoose_1.default.connection
    .once('open', () => console.log('good to go!'))
    .on('error', error => {
    console.warn('warning', error);
});
app.use(express_1.default.json());
app.use(date_1.default);
app.listen(process.env.PORT || 3000, () => {
    console.log('typescript server started');
});

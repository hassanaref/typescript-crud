"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
;
//mongoDB storage
const dateSchema = new mongoose_1.Schema({
    date: Date,
    data: mongoose_1.Schema.Types.Mixed
});
const dateDB = (0, mongoose_1.model)('date', dateSchema);
exports.default = dateDB;

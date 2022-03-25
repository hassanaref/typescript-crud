"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dateController_1 = require("../controllers/dateController");
const router = express_1.default.Router();
router.route("/")
    .get(dateController_1.readDates)
    .post(dateController_1.saveDate);
router.route('/:id')
    .get(dateController_1.readOneDate)
    .patch(dateController_1.updateDate)
    .delete(dateController_1.deleteDate);
exports.default = router;

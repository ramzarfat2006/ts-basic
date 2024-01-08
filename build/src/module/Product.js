"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Lenovo_1 = __importDefault(require("./Lenovo"));
const Macbook_1 = __importDefault(require("./Macbook"));
let lenovo = new Lenovo_1.default("Thinkpad", true, true);
console.log(lenovo);
let macbook = new Macbook_1.default(2004, false, false);
console.log(macbook);
macbook.a();
macbook.b();

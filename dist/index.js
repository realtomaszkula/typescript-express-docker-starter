"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const express = require("express");
dotenv.config();
const PORT = 8080;
const HOST = '0.0.0.0';
const app = express();
app.get('/', (req, res) => res.send('hello world'));
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
//# sourceMappingURL=index.js.map
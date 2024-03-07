"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base = void 0;
const crypto_1 = require("crypto");
// CLASSE PAI - SUPER CLASS
class Base {
    constructor() {
        this.id = (0, crypto_1.randomUUID)();
    }
    mostrarDados() {
        console.log(`${this.id}`);
    }
}
exports.Base = Base;

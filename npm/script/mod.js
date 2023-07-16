"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
function add(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
exports.add = add;

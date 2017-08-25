"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const matchers_1 = require("./matchers");
beforeAll(() => __awaiter(this, void 0, void 0, function* () {
    try {
        /* Before all goes here */
    }
    catch (e) {
        console.log('error in beforeAll setupJest.ts');
        console.log(e);
        process.exit(1);
    }
}));
beforeEach(() => __awaiter(this, void 0, void 0, function* () {
    expect.extend(matchers_1.matchers);
    try {
        /* Before each goes here */
    }
    catch (e) {
        console.log('error in beforeEach setupJest.ts');
    }
}));
afterAll(() => __awaiter(this, void 0, void 0, function* () {
    /* Clean up */
}));
//# sourceMappingURL=setupJest.js.map
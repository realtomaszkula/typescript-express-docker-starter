"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toBeOrNotToBe = (received, expected) => {
    const pass = received === 'that is the question';
    if (pass) {
        return {
            message: () => (`expected ${received} not to equal ${expected}`),
            pass: true,
        };
    }
    else {
        return {
            message: () => (`expected ${received} to equal ${expected}`),
            pass: false,
        };
    }
};
//# sourceMappingURL=toBeOrNotToBe.js.map
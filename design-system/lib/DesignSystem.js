"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
class DesignSystem {
    constructor() {
        this.palette = constants_1.palette;
        this.spacing = constants_1.spacing;
        this.sizing = constants_1.sizing;
        this.borderRadius = constants_1.borderRadius;
        this.typography = constants_1.typography;
    }
}
exports.DesignSystem = DesignSystem;

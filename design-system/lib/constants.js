"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prefabs_1 = require("@diez/prefabs");
const baseColors = {
    purple: prefabs_1.Color.hex('#5623EE'),
    mauve: prefabs_1.Color.hex('#A494D3'),
    white: prefabs_1.Color.hex('#fff'),
    gray100: prefabs_1.Color.hex('#FBFAFD'),
    gray400: prefabs_1.Color.hex('#F6F5FB'),
    gray700: prefabs_1.Color.hex('#EAE6F6'),
    gray900: prefabs_1.Color.hex('#79738F'),
    black: prefabs_1.Color.hex('#000010'),
};
class Palette {
    constructor() {
        this.purple = baseColors.purple;
        this.mauve = baseColors.mauve;
        this.mauve700 = baseColors.mauve.darken(0.20);
        this.white = baseColors.white;
        this.gray100 = baseColors.gray100;
        this.gray400 = baseColors.gray400;
        this.gray700 = baseColors.gray700;
        this.gray900 = baseColors.gray900;
        this.black = baseColors.black;
        this.primary = baseColors.purple;
        this.secondary = baseColors.mauve;
        this.cardInsetShadow = baseColors.gray100;
        this.cardColor = baseColors.gray400;
        this.cardShadow = baseColors.gray700;
    }
}
class Spacing {
    constructor() {
        this.xxs = 2;
        this.xs = 4;
        this.sm = 8;
        this.md = 12;
        this.lg = 18;
        this.xl = 24;
        this.xxl = 32;
        this.xxxl = 44;
    }
}
class Sizing {
    constructor() {
        this.xxs = 60;
        this.xs = 100;
        this.sm = 200;
        this.md = 300;
        this.lg = 500;
        this.xl = 640;
        this.xxl = 860;
        this.xxxl = 1300;
    }
}
class BorderRadius {
    constructor() {
        this.card = 7;
        this.button = 4;
    }
}
/**
 * A registry of all of the design's fonts.
 */
const Fonts = {
    SourceCodePro: {
        Regular: new prefabs_1.Font({ name: 'Source Code Pro', style: prefabs_1.FontStyle.Normal, weight: 400, fallbacks: ['monospace'] }),
        Black: new prefabs_1.Font({ name: 'Source Code Pro', style: prefabs_1.FontStyle.Normal, weight: 700, fallbacks: ['monospace'] }),
    },
    SourceSansPro: {
        Regular: new prefabs_1.Font({ name: 'Source Sans Pro', style: prefabs_1.FontStyle.Normal, weight: 400 }),
        Italic: new prefabs_1.Font({ name: 'Source Sans Pro', style: prefabs_1.FontStyle.Italic, weight: 400 }),
        Black: new prefabs_1.Font({ name: 'Source Sans Pro', style: prefabs_1.FontStyle.Normal, weight: 700 }),
    }
};
class Typography {
    constructor() {
        this.headingOne = new prefabs_1.Typograph({
            font: Fonts.SourceSansPro.Black,
            fontSize: 64,
            color: exports.palette.black,
        });
        this.headingTwo = new prefabs_1.Typograph({
            font: Fonts.SourceSansPro.Black,
            fontSize: 48,
            color: exports.palette.black,
        });
        this.headingThree = new prefabs_1.Typograph({
            font: Fonts.SourceSansPro.Regular,
            fontSize: 32,
            color: exports.palette.black,
        });
        this.headingFour = new prefabs_1.Typograph({
            font: Fonts.SourceSansPro.Black,
            fontSize: 23,
            color: exports.palette.black,
        });
        this.copy = new prefabs_1.Typograph({
            font: Fonts.SourceSansPro.Regular,
            fontSize: 16,
            color: exports.palette.black,
        });
        this.nav = new prefabs_1.Typograph({
            font: Fonts.SourceSansPro.Regular,
            fontSize: 20,
            color: exports.palette.black,
        });
        this.link = new prefabs_1.Typograph({
            font: Fonts.SourceSansPro.Black,
            fontSize: 20,
            color: exports.palette.primary,
        });
        this.button = new prefabs_1.Typograph({
            font: Fonts.SourceCodePro.Black,
            fontSize: 20,
            color: exports.palette.primary,
        });
        this.logo = new prefabs_1.Typograph({
            font: Fonts.SourceCodePro.Black,
            fontSize: 30,
            color: exports.palette.black,
        });
        this.code = new prefabs_1.Typograph({
            font: Fonts.SourceCodePro.Regular,
            fontSize: 16,
        });
        this.codeLarge = new prefabs_1.Typograph({
            font: Fonts.SourceCodePro.Regular,
            fontSize: 18,
        });
        this.codeSmall = new prefabs_1.Typograph({
            font: Fonts.SourceCodePro.Regular,
            fontSize: 15,
        });
    }
}
exports.palette = new Palette();
exports.spacing = new Spacing();
exports.sizing = new Sizing();
exports.borderRadius = new BorderRadius();
exports.typography = new Typography();

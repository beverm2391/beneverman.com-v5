const { default: flattenColorPalette, } = require("tailwindcss/lib/util/flattenColorPalette") // esm import throws error so using this instead
import colors from "tailwindcss/colors"

export function addVariablesForColors({ addBase, theme }: any) {
    let allColors = flattenColorPalette(theme("colors"));
    let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );

    addBase({
        ":root": newVars,
    });
}
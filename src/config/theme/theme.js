import colors from "./colors";

const SPACING = 8;

export const spacing = (unit) => unit * SPACING;

const theme = {
  colors,
  utils: {
    spacing,
  },
};

export default theme;

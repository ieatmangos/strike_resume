
const gdsDesignSystem = require('./design/gdsDesignSystem')

module.exports = {
  purge: ["./src/**/*.js"],
  target: "relaxed",
  theme: {
    ...gdsDesignSystem,
    extend: {},
  },
  variants: {},
  plugins: [],
}

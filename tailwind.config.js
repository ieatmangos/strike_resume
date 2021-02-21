
const gdsDesignSystem = require('./design/gdsDesignSystem')

module.exports = {
  purge: ["./src/**/*.js"],
  target: "relaxed",
  theme: {
    ...gdsDesignSystem,
    extend: {},
  },
  variants: {
    extend: {
      textColor: ['group-hover']
    },
  },
  plugins: [],
}

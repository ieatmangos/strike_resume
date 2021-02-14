const spacing = require( "./spacing")
const colors = require( "./colors")
const fontSize = require( "./fontSize")
const boxShadow = require( "./boxShadow")
const fontFamily = require( "./fontFamilies")

const atoms = {
  maxWidth: (theme) => theme("spacing"),
  height: (theme) => theme("spacing"),
  minHeight: (theme) => theme("spacing"),
  maxHeight: (theme) => theme("spacing"),
};

const extend = {
  animation: {
    fadeIn: 'fadeIn .4s forwards',
   },
  keyframes:{
    fadeIn:{
      '0%': {
        opacity: '0',
        transform: 'translateY(20px)'
      },
      '100%': {
        opacity: '1',
        transform: 'translateY(0px)'

      }

    }}
}

const gdsDesignSystem = {
  spacing,
  colors,
  fontFamily,
  fontSize,
  boxShadow,
  ...atoms,
  extend,

};
module.exports = gdsDesignSystem;

import {DefaultTheme} from 'styled-components';

const light: DefaultTheme = {
  space: [0, 2, 4, 8, 16, 32, 64, 128],
  colors: {
    primary: '#ffa500',
    secondary: '#ff6500',
    grey: {
      100: '#F5F5F5',
      200: '#dcdcdc',
      300: '#c4c4c4',
      400: '#ababab',
      500: '#939393',
    },
    white: '#ffffff',
    black: '#222222',
  },
  fonts: {
    extrabold: 'Manrope-ExtraBold',
    bold: 'Manrope-Bold',
    medium: 'Manrope-Medium',
  },
  fontSizes: [9, 14, 16, 24, 32, 36, 42],
  lineHeights: ['15px', '23px', '26px', '39px', '52px', '58px', '68px'],
};

export {light};

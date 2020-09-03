import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    space: Array<number>;
    colors: {
      [key: string]: any;
    };
    fonts: {
      [key: string]: string;
    };
    fontSizes: Array<number | string>;
    lineHeights: Array<string>;
  }
}

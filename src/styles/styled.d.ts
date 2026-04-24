import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryLight: string;

      secondary: string;
      secondaryDark: string;

      background: string;
      backgroundPrimary: string;
      backgroundSecondary: string;
      backgroundGradient: string;

      white: string;

      text: string;
      textLight: string;
    };
  }
}
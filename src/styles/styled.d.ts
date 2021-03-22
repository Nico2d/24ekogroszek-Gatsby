import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      gradient: string;
      primary: string;
      secondary: string;
      cardColor: string;
      background: string;
      white: string;
      fontColor: string;
      lineColor: string;
    };
  }
}

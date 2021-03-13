import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
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

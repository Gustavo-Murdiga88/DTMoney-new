import "styled-components";
import { defaultTheme } from "../styles/defaultTheme";

type ThemeDefault = typeof defaultTheme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeDefault {}
}

import "styled-components";
import theme from "./theme";

declare module "styled-components" {
  type Themtype = typeof theme;
  export interface DefaultTheme extends Themtype {}
}

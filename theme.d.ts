import "styled-components/native";
import { IPalette } from "./core/themes/types";

declare module "styled-components" {
  export interface DefaultTheme extends IPalette {}
}

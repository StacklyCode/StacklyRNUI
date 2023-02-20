import { ImageResolvedAssetSource, ViewStyle } from "react-native";
import { XmlProps } from "react-native-svg";

type XmlPropsNew = Omit<XmlProps, "xml">;

export type iconType = {
  uri?: string;
  source?: ImageResolvedAssetSource;
  container?: ViewStyle;
  xml?: XmlPropsNew;
};

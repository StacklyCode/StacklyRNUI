import React, { FC, useState, useEffect, useMemo } from "react";
import { View, StyleSheet } from "react-native";
import resolveAssetSource from "react-native/Libraries/Image/resolveAssetSource";
import { SvgXml } from "react-native-svg";
import { iconType } from "./types";

const defaultIcon = `https://storage.googleapis.com/cdn-bucket-ixulabs-platform/STCO-0001/warning-svgrepo-com.svg`;

const fetchIcon = async (url: string, state: (e: string) => void) => {
  try {
    const response = await fetch(url ?? defaultIcon);
    const data = await response.text();
    return state(data);
  } catch (error) {
    return null;
  }
};

const AtomIcon: FC<iconType> = (props) => {
  const { uri, source, xml } = props;
  const [iconState, stateIcon] = useState(null);
  const styled = styles(props);
  useEffect(() => {
    const url = uri ? uri : resolveAssetSource(source)?.uri;
    fetchIcon(url, (data) => stateIcon(data.replace(/fill\s*=\s*".*?"/g, "")));
  }, [uri, source]);

  const colors = useMemo(() => {
    if (xml?.color === ("original" || undefined || null)) return {};
    return {
      // fill: theme.icon.color.accent,
      // stroke: theme.icon.color.accent,
      fill: xml?.color,
      stroke: xml?.color,
    };
  }, [xml?.color]);
  if (!iconState) return null;
  return (
    <View style={styled.container}>
      <SvgXml width={80} height={80} {...colors} {...xml} xml={iconState} />
    </View>
  );
};

const styles = (props: iconType) =>
  StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      ...(props?.container ?? {}),
    },
  });

export default AtomIcon;

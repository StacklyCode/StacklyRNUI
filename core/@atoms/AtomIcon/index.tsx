import React, { FC, useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import resolveAssetSource from "react-native/Libraries/Image/resolveAssetSource";
import { SvgXml, XmlProps } from "react-native-svg";
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

// & XmlProps

const AtomIcon: FC<iconType> = (props) => {
  const { icon, source } = props;
  const [iconState, stateIcon] = useState(null);

  useEffect(() => {
    const url = icon ? icon : resolveAssetSource(source)?.uri;
    fetchIcon(url, (data) => stateIcon(data.replace(/fill\s*=\s*".*?"/g, "")));
  }, [icon]);

  return (
    <View style={styles.container}>
      {iconState && (
        <SvgXml
          color="white"
          fill="white"
          stroke="white"
          width={80}
          height={80}
          xml={iconState}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
});

export default AtomIcon;

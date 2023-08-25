import { View, Text } from "react-native";
import { ButtonWithGradient } from "../button-with-gradient/button-with-gradient.components";
import { footerStyle } from "./footer.styles";
export const Footer = () => (
  <View style={footerStyle.footerContainer}>
    <ButtonWithGradient />
    <Text>read user license agreement</Text>
  </View>
);

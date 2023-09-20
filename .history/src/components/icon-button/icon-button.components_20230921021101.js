import { Pressable, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
export const IconButton = ({ name, color, size, ...props }) => {
  return (
    <Pressable {...props}>
      <FontAwesome name={name} size={size} color={color}></FontAwesome>
    </Pressable>
  );
};

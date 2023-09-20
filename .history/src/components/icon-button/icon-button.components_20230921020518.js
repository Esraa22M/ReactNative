import { Pressable, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
export const IconButton = ({ name, color, size, ...props }) => {
  return (
    <Pressable style={({ pressed }) => pressed && styles.pressed}>
      <FontAwesome name="angle-right" size={23} color="black"></FontAwesome>
    </Pressable>
  );
};
const styles = StyleSheet.create({ pressed: { opacity: 0.7, color: "blue" } });

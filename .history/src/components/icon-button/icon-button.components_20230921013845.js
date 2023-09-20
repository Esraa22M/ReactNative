import { Pressable, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
export const IconButton = ({ name, color, size, ...props }) => {
  return (
    <Pressable style={({ pressed }) => pressed && styles.pressed}>
      <Ionicons
        {...props}
        name={"caret-forward-circle-sharp"}
        color={color}
        size={size}
      />
    </Pressable>
  );
};
const styles = StyleSheet.create({ pressed: { opacity: 0.7, color: "blue" } });

import { View, Text, Image } from "react-native";
export const CategoryItem = ({ id, name, image }) => {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};

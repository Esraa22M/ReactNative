import { View, Text, Image } from "react-native";
export const CategoryItem = ({ item }) => {
  const { name, image } = item;
  console.log(item);
  return (
    <View>
      {" "}
      <Image />
      <Text>{name}</Text>
    </View>
  );
};

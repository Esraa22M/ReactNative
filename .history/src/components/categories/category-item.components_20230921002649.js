import { View, Text, Image, StyleSheet } from "react-native";
export const CategoryItem = ({ item }) => {
  const { name, image } = item;
  console.log(item);
  return (
    <View style={styles.container}>
      <Image />
      <Text>{name}</Text>
    </View>
  );
};
const styles = StyleSheet.create({ container: { backgroundColor: "#FFBF00" } });

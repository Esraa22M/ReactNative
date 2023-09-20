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
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFBF00",
    flex: 1,
    height: 150,
    justifyContent: "center",
  },
});

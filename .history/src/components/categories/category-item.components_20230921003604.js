import { View, Text, Image, StyleSheet } from "react-native";
import { HomeColors } from "../../colors/front-screen-colors/home-colors";
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
    flex: 1,
    height: 150,
    justifyContent: "center",
    backgroundColor: HomeColors.LIGHT_COLOR,
    alignItems: "center",
    shadowColor: "black",

    elevation: 4,
  },
});

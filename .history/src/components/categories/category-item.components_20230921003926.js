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
    height: 200,
    justifyContent: "center",
    backgroundColor: HomeColors.LIGHT_COLOR,
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    marginVertical: 16,
    marginLeft: 16,
    marginRight: 8,
    elevation: 4,
  },
});

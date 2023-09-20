import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { HomeColors } from "../../colors/front-screen-colors/home-colors";
import { IconButton } from "../icon-button/icon-button.components";
export const CategoryItem = ({ item }) => {
  const { name, image } = item;
  console.log(item);
  return (
    <View style={styles.container}>
      <Pressable>
        <Image source={{ uri: image }} style={styles.image} />
        <Text style={styles.categoryName}>{name}</Text>
        <View style={styles.iconContainer}>
          <IconButton name="angle-right" size={23} style={styles.angleRight} />
        </View>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
    justifyContent: "space-around",
    flexDirection: "column",
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
    alignItems: "center",
    borderRadius: 8,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    margin: 8,
  },
  categoryName: {
    textAlign: "center",
    textTransform: "uppercase",
    margin: 8,
  },
  angleRight: {
    backgroundColor: HomeColors.ACTIVE_COLOR,
    alignItems: "center",
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    margin: 8,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

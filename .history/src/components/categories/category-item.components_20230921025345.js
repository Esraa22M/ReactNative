import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { HomeColors } from "../../colors/front-screen-colors/home-colors";
import { IconButton } from "../icon-button/icon-button.components";
export const CategoryItem = ({ item }) => {
  const { name, image } = item;
  console.log(item);
  return (
    <View style={styles.container}>
      <Pressable>
        <View style={styles.imageContainer}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
        <Text style={styles.categoryName}>{name}</Text>
        <View style={styles.iconContainer}>
          <IconButton
            name="angle-right"
            size={16}
            style={styles.angleRight}
            color={"white"}
          />
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
    borderRadius: 8,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: { width: 80, height: 80, borderRadius: 80 / 2, margin: 8 },
  categoryName: {
    textTransform: "uppercase",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    flexDirection: "column",
    fontWeight: "bold",
    fontSize: 12,
    margin: 8,
  },
  angleRight: {
    backgroundColor: HomeColors.DARK_COLOR,
    alignItems: "center",
    justifyContent: "center",
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    margin: 8,
  },
});

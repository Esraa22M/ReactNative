import { StyleSheet } from "react-native";
import { UserAuthColors } from "../../../colors/front-screen-colors/user-auth-colors";
export const userCardStyle = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 35,
    alignItems: "center",
    borderWidth: 3,
    backgroundColor: UserAuthColors.CARD_COLOR,
    flex: 1,
    marginTop: 20,
  },
  imageStyle: {
    width: "100%",
    backgroundColor: "grey",
    justifyContent: "flex-end",
    height: "80%",
  },
  cardBody: { marginBottom: 50 },
  cardHeader: {
    fontSize: 35,
    textTransform: "uppercase",
    color: UserAuthColors.GOLDEN_COLOR,
    textAlign: "center",
    fontStyle: "italic",
    fontWeight: "bold",
    letterSpacing: 2,
  },
  cardInfo: { fontSize: 18, color: "white", textAlign: "center" },
});

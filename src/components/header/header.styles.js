import { StyleSheet } from "react-native";
import { UserAuthColors } from "../../colors/front-screen-colors/user-auth-colors";
export const headerStyle = StyleSheet.create({
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    flex: 1,
    padding: 20,
    marginBottom: 20,
  },
  headerContent: {
    textTransform: "capitalize",
    fontWeight: "bold",
    fontSize: 45,
    letterSpacing: 2,
    color: UserAuthColors.HEADER_COLOR,
  },
});

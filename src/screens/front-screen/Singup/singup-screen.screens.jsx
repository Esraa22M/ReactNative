import { View } from "react-native";
import { Header } from "../../../components/header/header.component";
import { headerStyle } from "../../../components/header/header.styles";
import { singupStyles } from "./singup-screen.styles";
import { SingupFormBody } from "../../../components/singup-form-body/singup-form-body.components";
export const Singup = () => {
  return (
    <View style={singupStyles.container}>
      <Header textValue={"sing up"} headerStyle={headerStyle} />
      <SingupFormBody />
    </View>
  );
};

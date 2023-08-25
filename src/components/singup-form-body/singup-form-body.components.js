import { View, TextInput, Text } from "react-native";
import { textInputStyle } from "../textInput/textInput.styles";
import { TextInputWithShadow } from "../textInput/textInput.components";
import { singupFormBodyStyle } from "./singup-form-body.styles";
import { SingupFormColors } from "../../colors/front-screen-colors/singup-screen.colors";
export const SingupFormBody = () => {
  return (
    <View style={singupFormBodyStyle.formBody}>
      <TextInputWithShadow
        style={textInputStyle.textInputContainer}
        textStyle={textInputStyle.textInput}
        startColor={SingupFormColors.SHADOW_COLOR}
        placeholder="e-mail"
        keyboardType="email-address"
      />
      <TextInputWithShadow
        style={textInputStyle.textInputContainer}
        textStyle={textInputStyle.textInput}
        startColor={SingupFormColors.SHADOW_COLOR}
        placeholder="password"
        secureTextEntry
      />
      <TextInputWithShadow
        style={textInputStyle.textInputContainer}
        textStyle={textInputStyle.textInput}
        startColor={SingupFormColors.SHADOW_COLOR}
        placeholder="repeat password"
        secureTextEntry
      />
    </View>
  );
};

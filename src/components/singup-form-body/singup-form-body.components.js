import { View, TextInput, Text } from "react-native";
import { textInputStyle } from "../textInput/textInput.styles";
import { TextInputWithShadow } from "../textInput/textInput.components";
import { UserAuthColors } from "../../colors/front-screen-colors/user-auth-colors";
export const SingupFormBody = () => {
  return (
    <View style={singupFormBodyStyle.formBody}>
      <TextInputWithShadow
        style={textInputStyle.textInputContainer}
        textStyle={textInputStyle.textInput}
        startColor={UserAuthColors.SHADOW_COLOR}
        placeholder="e-mail"
        keyboardType="email-address"
      />
      <TextInputWithShadow
        style={textInputStyle.textInputContainer}
        textStyle={textInputStyle.textInput}
        startColor={UserAuthColors.SHADOW_COLOR}
        placeholder="password"
        secureTextEntry
      />
      <TextInputWithShadow
        style={textInputStyle.textInputContainer}
        textStyle={textInputStyle.textInput}
        startColor={UserAuthColors.SHADOW_COLOR}
        placeholder="repeat password"
        secureTextEntry
      />
    </View>
  );
};

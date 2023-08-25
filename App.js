import { SafeAreaView } from "react-native";
import { singupStyles } from "./src/screens/front-screen/Singup/singup-screen.styles";
import { Singup } from "./src/screens/front-screen/Singup/singup-screen.screens";
import LoginScreen from "./src/screens/front-screen/login/login-screen.screens";
export default function App() {
  return (
    <SafeAreaView style={singupStyles.container}>
      <LoginScreen />
    </SafeAreaView>
  );
}

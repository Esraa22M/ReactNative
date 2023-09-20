import { SafeAreaView } from "react-native";
import { singupStyles } from "./src/screens/front-screen/Singup/singup-screen.styles";
import { Singup } from "./src/screens/front-screen/Singup/singup-screen.screens";
import UserCard from "./src/screens/front-screen/user-card/user-card.screens";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <SafeAreaView style={singupStyles.container}>
      {/* <UserCard /> */}
      <NavigationContainer>
        <Stack.Screen name="Home" component={Home} />
      </NavigationContainer>
    </SafeAreaView>
  );
}

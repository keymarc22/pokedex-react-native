import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../screens/Account";

const Stack = createStackNavigator();

const AccountNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Account"
        component={AccountScreen}
        options={{ title: "Mi cuenta" }}
      />
    </Stack.Navigator>
  );
}

export { AccountNavigation };
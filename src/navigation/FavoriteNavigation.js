import { createStackNavigator } from "@react-navigation/stack";
import FavoriteScreen from "../screens/Favorite";

const Stack = createStackNavigator();

const FavoriteNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{ title: "Favorites"}}
      />
    </Stack.Navigator>
  )
}

export { FavoriteNavigation };
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "./screens/FavoritesScreen";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerStyle: { backgroundColor: "#351401" },
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
      }}
    >
      <Drawer.Screen name="Categories" component={CategoriesScreen} options={{
        title: 'All Categories'
      }}/>
      <Drawer.Screen name="Favorites" component={FavoritesScreen} />
    </Drawer.Navigator>
  );
}
export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTintColor: "white",
            headerStyle: { backgroundColor: "#351401" },
            cardStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              title: "All Categories",
              headerShown: false,
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen name="MealDetail" component={MealDetailScreen}  options={{
        title: 'About The Meal'
      }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

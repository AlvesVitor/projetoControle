import React from "react";

import Joystick from "../Page/Joystick";
import Settings from "../Page/Settings";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Joistick"
          component={Joystick}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{
            headerShown: true,
            title: "Configurações",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

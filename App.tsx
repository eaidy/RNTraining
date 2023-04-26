import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainNavigation from './src/navigations/Main';
import AuthNavigation from './src/navigations/Auth';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {


  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Auth"
        screenOptions={{
          headerShown: false,
      }}
      >
        <Stack.Screen
          name="Main"
          component={MainNavigation} 
        />
        <Stack.Screen
          name="Auth"
          component={AuthNavigation} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

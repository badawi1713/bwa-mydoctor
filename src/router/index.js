import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {GetStarted, Login, Register, Splash} from '../views/screens';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        options={{headerShown: false}}
        name="Splash"
        component={Splash}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="GetStarted"
        component={GetStarted}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Register"
        component={Register}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Login"
        component={Login}
      />
    </Stack.Navigator>
  );
};

export default Router;

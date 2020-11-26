import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  GetStarted,
  Login,
  Register,
  Splash,
  UploadPhoto,
  Hospital,
  Message,
  Doctor,
  ChooseDoctor,
  Chat,
} from '../views/screens';
import {BottomNavigator} from '../views/components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const MainApp = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNavigator {...props} />}>
      <Tab.Screen name="Doctor" component={Doctor} />
      <Tab.Screen name="Messages" component={Message} />
      <Tab.Screen name="Hospitals" component={Hospital} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="MainApp">
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
      <Stack.Screen
        options={{headerShown: false}}
        name="UploadPhoto"
        component={UploadPhoto}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="MainApp"
        component={MainApp}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="ChooseDoctor"
        component={ChooseDoctor}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Chat"
        component={Chat}
      />
    </Stack.Navigator>
  );
};

export default Router;

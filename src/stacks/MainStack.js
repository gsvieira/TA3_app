import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Preload from '~/pages/Preload';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import MainTab from '~/pages/MainTab';

export default () => (
    <Stack.Navigator
    initialRouteName="Preload"
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="MainTab" component={SignUp} />
    </Stack.Navigator>
)


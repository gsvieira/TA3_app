import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CustomTabBar from '~/components/CustomTabBar';

import Home from '~/pages/Home';
import Alarm from '~/pages/Alarm';
import Appointments from '~/pages/Appointments';
import Emergency from '~/pages/Emergency';
import Profile from '~/pages/Profile';

const Tab = createBottomTabNavigator();


export default () => (
    <Tab.Navigator tabBar={props=><CustomTabBar {...props} />}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Alarm" component={Alarm} />
        <Tab.Screen name="Emergency" component={Emergency} />
        <Tab.Screen name="Appointments" component={Appointments} />
        <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
)
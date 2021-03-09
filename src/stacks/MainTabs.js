import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import Home from '../screens/Home';
import Codigos from '../screens/Codigos';
import Usados from '../screens/Usados';
import Perfil from '../screens/Perfil';

import CustomTabs from '../components/CustomTabs';

export default () => {
    return (
        <Tab.Navigator tabBar={props=><CustomTabs {...props} />}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Codigos" component={Codigos} />
            <Tab.Screen name="Usados" component={Usados} />
            <Tab.Screen name="Perfil" component={Perfil} />
        </Tab.Navigator>
    );
}
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Preload from '../screens/Preload';
import Login from '../screens/Login';
import Cadastro from '../screens/Cadastro';
import Codigo from '../screens/Codigo';
import MainTabs from '../stacks/MainTabs';

export default () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }} initialRouteName="Preload">
            <Stack.Screen name="Preload" component={Preload} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
            <Stack.Screen name="Codigo" component={Codigo} />
            <Stack.Screen name="MainTabs" component={MainTabs} />
        </Stack.Navigator>
    );
}
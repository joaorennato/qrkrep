import React, { useEffect, useContext } from 'react';
import { UserContext } from '../../Context/UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import Api from '../../Api/Api';

import { Container, Carregando } from './style';

import Logo from '../../assets/logo-krepischi.svg';

export default () => {

    const navigation = useNavigation();
    const { state, dispatch } = useContext(UserContext);

    useEffect(()=>{
        const checkToken = async () => {
            let token = await AsyncStorage.getItem('token');
    
            if(token !== null){
                let req = await Api.checkToken(token);
                if(req.token){
                    await AsyncStorage.setItem('token', req.token);
                    
                    dispatch({ type: 'setName', payload: { name: req.data.name } });
                    dispatch({ type: 'setCpf', payload: { cpf: req.data.cpf } });
                    
                    navigation.reset({
                        routes: [{
                            name: 'MainTabs'
                        }]
                    });
                } else {
                    navigation.reset({
                        routes: [{
                            name: 'Login'
                        }]
                    });
                }
            } else {
                navigation.reset({
                    routes: [{
                        name: 'Login'
                    }]
                });
            }
        }
        
        checkToken();
    }, []);

    return (
        <Container>
            <Logo width="100%" height="150" />
            <Carregando size={30} color="#FF0000" />
        </Container>
    );
}
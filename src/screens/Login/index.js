import React, { useState, useContext } from 'react';
import { Alert, Platform, Keyboard } from 'react-native';
import { UserContext } from '../../Context/UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Container, Scroller, Campos, Campo, CampoInput, CampoInputMasked, Botao, BotaoTexto, BotaoInfo, BotaoInfoTexto, BotaoInfoTextoBold, InnerView } from './style';

import Icon from 'react-native-vector-icons/FontAwesome';
import Logo from '../../assets/logo-krepischi.svg';

import Api from '../../Api/Api';

export default () => {

    const navigation = useNavigation();
    const { state, dispatch } = useContext(UserContext);

    const [cpf, setCpf] = useState('');
    const [password, setPassword] = useState('');

    let cpfInput = null;
    let passwordInput = null;

    const fazLogin = async () => {
        if(cpf !== '' && password !== ''){
            if(cpfInput.isValid()){
                let req = await Api.login(cpf, password);
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
                    Alert.alert(
                        'Atenção',
                        'Dados incorretos!',
                        [
                            { text: 'OK', onPress: () => {} }
                        ],
                        { cancelable: false }
                    );
                }
            } else {
                Alert.alert(
                    'Atenção',
                    'CPF inválido.',
                    [
                        { text: 'OK', onPress: () => {} }
                    ],
                    { cancelable: false }
                );
            }
        } else {
            Alert.alert(
                'Atenção',
                'Preencha os campos!',
                [
                    { text: 'OK', onPress: () => {} }
                ],
                { cancelable: false }
            );
        }
    }

    const vaiPara = () => {
        navigation.reset({
            routes: [{
                name: 'Cadastro'
            }]
        })
    }

    return (
        <Container behavior={ Platform.OS === 'ios' ? 'padding' : 'margin' }>
            <Scroller onPress={Keyboard.dismiss}>
                <InnerView>
                    <Logo width="100%" height="150" style={{marginTop:30}} />
                    <Campos>
                        <Campo>
                            <Icon 
                                style={{paddingLeft:20}} 
                                name="id-card-o" size={24} 
                                color="#444" 
                            />
                            <CampoInputMasked 
                                placeholder="Informe seu CPF" 
                                placeholderTextColor="#444" 
                                returnKeyType="next" 
                                type={'cpf'}
                                value={cpf}
                                onChangeText={t=>setCpf(t)} 
                                ref={(input) => { cpfInput = input; }} 
                                onSubmitEditing={() => { passwordInput.focus(); }} 
                                blurOnSubmit={false}
                            />
                        </Campo>
                        <Campo>
                            <Icon 
                                style={{paddingLeft:20}} 
                                name="key" 
                                size={24} 
                                color="#444" 
                            />
                            <CampoInput 
                                placeholder="Informe sua senha" 
                                placeholderTextColor="#444" 
                                returnKeyType="done" 
                                value={password} 
                                onChangeText={t=>setPassword(t)} 
                                secureTextEntry={true} 
                                ref={(input) => { passwordInput = input; }} 
                            />
                        </Campo>
                        
                        <Botao onPress={fazLogin}>
                            <BotaoTexto>Entrar</BotaoTexto>
                        </Botao>

                        <BotaoInfo onPress={vaiPara}>
                            <BotaoInfoTexto>Ainda não tem uma conta? <BotaoInfoTextoBold>Cadastre-se!</BotaoInfoTextoBold></BotaoInfoTexto>
                        </BotaoInfo>
                    </Campos>
                </InnerView>
            </Scroller>
        </Container>
    );
}
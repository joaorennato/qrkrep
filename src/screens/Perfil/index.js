import React, { useContext, useState } from 'react';
import { Alert, Keyboard, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../../Context/UserContext';
import Icon from 'react-native-vector-icons/FontAwesome';
import { 
    Carregando, 
    Container, 
    Scroller, 
    InnerView, 
    TituloArea, 
    Titulo, 
    AreaTexto, 
    ItemTexto, 
    ItemTextoNormal, 
    ItemTextoBold, 
    Campos, 
    Campo, 
    CampoInput, 
    Botao, 
    BotaoTexto, 
    CpfText, 
    TituloButton 
} from './style';

import Api from '../../Api/Api';

export default () => {

    const navigation = useNavigation();

    const { state, dispatch } = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    let inputName = null;
    let inputPassword = null;
    let inputPasswordConfirm = null;

    const alteraPerfil = async () => {
        setLoading(true);
        let body = {};

        if(name == '' && password == '' && passwordConfirm == ''){
            Alert.alert(
                'Atenção',
                'Preencha pelo menos um dos campos!',
                [
                    { text: 'OK', onPress: () => {} }
                ],
                { cancelable: false }
            );
        } else {
            if(name !== ''){
                body.name = name;
            }
    
            if(password !== ''){
                body.password = password;
            }
    
            if(passwordConfirm !== ''){
                body.passwordConfirm = passwordConfirm;
            }
    
            let req = await Api.editarPerfil(body);

            if(req.error == ''){
                dispatch({type: 'setName', payload: { name: name } });
                
                setName('');
                setPassword('');
                setPasswordConfirm('');
                
                Alert.alert(
                    'Dados atualizados',
                    'As informações do perfil foram atualizadas.',
                    [
                      { text: 'OK', onPress: () => {} }
                    ],
                    { cancelable: false }
                );
            } else {
                let errormsg = '';

                Object.keys(req.error).map((key, item) => {
                    errormsg += req.error[key].join('. \n');
                });

                Alert.alert(
                    'Atenção',
                    errormsg,
                    [
                      { text: 'OK', onPress: () => {} }
                    ],
                    { cancelable: false }
                );

                setName('');
                setPassword('');
                setPasswordConfirm('');
            }
        }

        setLoading(false);
    }

    const fazerLogout = async () => {
        let req = await Api.logout();
        if(req.error == ''){
            navigation.reset({
                routes: [{
                    name: 'Login'
                }]
            });
        } else {
            Alert.alert(
                'Atenção',
                req.error,
                [
                  { text: 'OK', onPress: () => {} }
                ],
                { cancelable: false }
            );
        }
    }

    return (
        <Container behavior={ Platform.OS === 'ios' ? 'padding' : 'margin' }>
            <Scroller onPress={Keyboard.dismiss}>
                <InnerView style={{ paddingTop: Platform.OS === 'ios' ? 20 : 0 }}>
                    <TituloArea style={{ marginTop: Platform.OS === 'ios' ? 20 : 0 }}>
                        <Titulo>Editar Perfil</Titulo>
                        <TituloButton onPress={fazerLogout}>
                            <Icon name="sign-out" size={32} color="#444" />
                        </TituloButton>
                    </TituloArea>
                    { loading && <Carregando size={30} color="#FF0000" /> }
                    { !loading && <><AreaTexto>
                        <ItemTexto>
                            <ItemTextoBold>Nome:</ItemTextoBold>
                            <ItemTextoNormal>{ state.name }</ItemTextoNormal>
                        </ItemTexto>
                        <ItemTexto>
                            <ItemTextoBold>CPF:</ItemTextoBold>
                            <CpfText type={'cpf'} value={ state.cpf } editable={false} />
                        </ItemTexto>
                    </AreaTexto>
                    <Campos>
                        <Campo>
                            <Icon 
                                style={{paddingLeft:20}} 
                                name="user" 
                                size={24} 
                                color="#444" 
                            />
                            <CampoInput 
                                placeholder="Informe o novo nome" 
                                placeholderTextColor="#444" 
                                returnKeyType="next" 
                                value={name} 
                                onChangeText={t=>setName(t)} 
                                ref={(input) => { inputName = input }} 
                                onSubmitEditing={()=>{inputPassword.focus()}}
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
                                placeholder="Informe a nova senha" 
                                placeholderTextColor="#444" 
                                returnKeyType="next" 
                                value={password} 
                                onChangeText={t=>setPassword(t)} 
                                secureTextEntry={true} 
                                ref={(input) => { inputPassword = input }}
                                onSubmitEditing={()=>{inputPasswordConfirm.focus()}}
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
                                placeholder="Confirme a nova senha" 
                                placeholderTextColor="#444" 
                                returnKeyType="done"
                                value={passwordConfirm} 
                                onChangeText={t=>setPasswordConfirm(t)} 
                                secureTextEntry={true} 
                                ref={(input) => { inputPasswordConfirm = input }}
                            />
                        </Campo>
                        <Botao onPress={alteraPerfil}>
                            <BotaoTexto>Alterar Informações</BotaoTexto>
                        </Botao>
                    </Campos></> }
                </InnerView>
            </Scroller>
        </Container>
    );
}
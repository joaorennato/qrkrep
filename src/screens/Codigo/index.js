import React from 'react';
import { Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Scroller, TituloArea, Titulo, TituloButton, QRArea, QRTitulo, QRTexto, QRBotao, QRBotaoTexto  } from './style';

import QRCode from 'react-native-qrcode-svg';
import Api from '../../Api/Api';

export default () => {

    const route = useRoute();
    const navigation = useNavigation();

    const id = route.params.id;
    const codigo = route.params.codigo;
    const desconto = route.params.desconto;

    const utilizarCodigo = async () => {
        if(codigo !== ''){
            let req = await Api.makeUsed(codigo);
            if(req.error == ''){
                Alert.alert(
                    'Atenção',
                    'Codigo ' + codigo + ' foi utilizado!',
                    [
                    { text: 'OK', onPress: () => {} }
                    ],
                    { cancelable: false }
                );
                navigation.navigate('Codigos');
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
    }

    const volta = () => {
        navigation.navigate('Codigos');
    }

    return (
        <Container>
            <Scroller>
                <TituloArea>
                    <TituloButton onPress={volta}>
                        <Icon name="chevron-left" size={24} color="#FF0000" />
                    </TituloButton>
                    <Titulo>Usar Código</Titulo>
                </TituloArea>
                { codigo !== '' && 
                    <QRArea>
                        <QRCode value={codigo} size={280} />
                        <QRTitulo>{ codigo }</QRTitulo>
                        <QRTexto>Ganhe { desconto }% de desconto em qualquer setor!</QRTexto>
                        <QRBotao onPress={utilizarCodigo}>
                            <QRBotaoTexto>Utilizar este código</QRBotaoTexto>
                        </QRBotao>
                    </QRArea>
                }
            </Scroller>
        </Container>
    );
}
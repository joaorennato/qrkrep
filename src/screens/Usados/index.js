import React, { useEffect, useState } from 'react';
import { RefreshControl, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Scroller, Carregando, TituloArea, Titulo, TituloButton, Codigos, Codigo, QRInfo, QRTitulo, QRTexto } from './style';

import Api from '../../Api/Api';

export default () => {

    const navigation = useNavigation();

    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    const getUsados = async () => {
        setList([]);
        setLoading(true);

        let req = await Api.getUsados();
        if(req.error == ''){
            setList(req.data);
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
        
        setLoading(false);
    }

    const atualizaCodigos = () => {
        getUsados();
        setRefreshing(false);
    }

    useEffect(()=>{
        getUsados();
    }, []);

    return (
        <Container>
            <Scroller refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={atualizaCodigos} />
            }>
                <TituloArea>
                    <Titulo>Códigos utilizados</Titulo>
                </TituloArea>
                { loading && <Carregando size={50} color="#FF0000" /> }
                { !loading && <Codigos>
                    { list.length > 0 && list.map((item, key) => (
                        <Codigo key={key}>
                            <QRCode value={item.codigo} size={80} />
                            <QRInfo>
                                <QRTitulo>{ item.codigo }</QRTitulo>
                                <QRTexto numberOfLines={2}>Você obteve { item.desconto }% de desconto{'\n'}com este código.</QRTexto>
                            </QRInfo>
                        </Codigo>
                    )) }
                </Codigos> }
            </Scroller>
        </Container>
    );
}
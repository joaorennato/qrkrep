import React, { useEffect, useState } from 'react';
import { RefreshControl, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import QRCode from 'react-native-qrcode-svg';
import { Container, Scroller, Carregando, TituloArea, Titulo, TituloButton, Codigos, Codigo, CodigoTexto } from './style';

import Api from '../../Api/Api';

export default () => {

    const navigation = useNavigation();

    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    const getCodigos = async () => {
        setList([]);
        setLoading(true);

        let req = await Api.getCodes();
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

    const vaiProCodigo = (item) => {
        navigation.navigate('Codigo', {
            id: item.id,
            codigo: item.codigo,
            desconto: item.desconto
        });
    }

    const atualizaCodigos = () => {
        getCodigos();
        setRefreshing(false);
    }

    useEffect(()=>{
        getCodigos();
    }, []);

    return (
        <Container>
            <Scroller refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={atualizaCodigos} />
            }>
                <TituloArea>
                    <Titulo>Códigos</Titulo>
                </TituloArea>
                { loading && <Carregando size={50} color="#FF0000" /> }
                { !loading && <Codigos>
                    { list.length > 0 && list.map((item, key) => (
                        <Codigo key={key} onPress={()=>vaiProCodigo(item)}>
                            <QRCode value={item.codigo} size={130} />
                            <CodigoTexto>Garanta {item.desconto }% de desconto!</CodigoTexto>
                        </Codigo>
                    )) }
                </Codigos> }
            </Scroller>
        </Container>
    );
}
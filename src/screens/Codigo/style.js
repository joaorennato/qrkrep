import styled from 'styled-components/native';

export const Carregando = styled.ActivityIndicator`
    margin-top: 50px;
`;

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #FFFFFF;
`;

export const Scroller = styled.ScrollView`
    width: 100%;
    padding: 20px;
`;

export const TituloArea = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 30px;
`;

export const Titulo = styled.Text`
    font-size: 32px;
    font-weight: bold;
    text-align: left;
    color: #FF0000;
    margin-left: 10px;
`;

export const TituloButton = styled.TouchableOpacity`
    width: 30px; height: 30px;
    align-items: center;
    justify-content: center;
`;

export const QRArea = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const QRTitulo = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: #FF0000;
    margin: 15px;
`;

export const QRTexto = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #444444;
    padding: 0 50px;
    text-align: center;
`;

export const QRBotao = styled.TouchableOpacity`
    width: 100%;
    height: 60px;
    border-radius: 30px;
    background-color: #FF0000;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
`;
export const QRBotaoTexto = styled.Text`
    text-transform: uppercase;
    color: #FFFFFF;
    font-weight: bold;
    font-size: 16px;
`;
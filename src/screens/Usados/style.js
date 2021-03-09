import styled from 'styled-components/native';

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

export const Carregando = styled.ActivityIndicator`
    margin-top: 50px;
`;

export const TituloArea = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
`;

export const Titulo = styled.Text`
    font-size: 32px;
    font-weight: bold;
    text-align: left;
    color: #FF0000;
`;

export const TituloButton = styled.TouchableOpacity`
    width: 30px; height: 30px;
    align-items: center;
    justify-content: center;
`;

export const Codigos = styled.View`
    position: relative;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    padding: 0 -20px;
`;

export const Codigo = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 20px;
`;

export const QRInfo = styled.View`
    margin-left: 15px;
`;

export const QRTitulo = styled.Text`
    font-size: 24px;
    color: #FF0000;
    font-weight: bold;
    text-transform: uppercase;
`;

export const QRTexto = styled.Text`
    width: 100%;
    font-size: 14px;
    color: #444444;
`;
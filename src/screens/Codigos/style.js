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
`;

export const Codigo = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%; padding: 10px;
    margin-bottom: 20px;
`;

export const CodigoTexto = styled.Text`
    padding: 5px 10px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    color: #000000;
`;
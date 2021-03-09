import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
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
`;

export const TituloButton = styled.TouchableOpacity`
    width: 30px; height: 30px;
    align-items: center;
    justify-content: center;
`;

export const Area = styled.View`
    width: 100%;
`;

export const WelcomeText = styled.Text`
    flex-direction: row;
    flex-wrap: wrap;
    font-size: 18px;
`;

export const WelcomeTextBold = styled.Text`
    font-weight: bold;
`;

export const OfertasArea = styled.View`
    width: 100%;
    margin-top: 50px;
    margin-bottom: 30px;
    align-items: center;
    justify-content: center;
`;

export const Oferta = styled.Image`
    margin-bottom: 20px;
    width: 300px;
    height: 300px;
    resize-mode: stretch;
`;
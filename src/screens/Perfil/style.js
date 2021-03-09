import styled from 'styled-components/native';
import { TextInputMask } from 'react-native-masked-text';

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    background-color: #FFFFFF;
`;

export const Scroller = styled.TouchableWithoutFeedback``;

export const InnerView = styled.SafeAreaView`
    flex: 1;
    margin: 20px;
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

export const AreaTexto = styled.View`
    width: 100%;
    margin-bottom: 15px;
`;

export const ItemTexto = styled.View`
    flex-direction: row;
    width: 100%;
    height: 20px;
    align-items: center;
    justify-content: space-between;
`;

export const ItemTextoNormal = styled.Text`
    flex: 1;
    font-size: 16px;
    color: #444444;
`;

export const ItemTextoBold = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #444444;
    margin-right: 10px;
`;

export const CpfText = styled(TextInputMask)`
    padding: 0;
    margin: 0;
    font-size: 16px;
    color: #444444; 
    flex: 1;
    height: 20px;
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

export const Campos = styled.View`
    width: 100%;
    margin-top: 30px;
`;

export const Campo = styled.View`
    flex-direction: row;
    width: 100%;
    height: 60px;
    border-radius: 30px;
    background-color: #EAEAEA;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
`;

export const CampoInput = styled.TextInput`
    flex: 1;
    height: 60px;
    font-size: 16px;
    color: #444;
    padding-left: 10px;
    padding-right: 20px;
`;

export const Botao = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60px;
    border-radius: 30px;
    background-color: #FF0000;
    margin-top: 15px;
`;

export const BotaoTexto = styled.Text`
    font-size: 16px;
    color: #FFFFFF;
    font-weight: bold;
    text-transform: uppercase;
`;

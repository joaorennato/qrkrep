import styled from 'styled-components/native';
import { TextInputMask } from 'react-native-masked-text';

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    background-color: #FFFFFF;
`;

export const Scroller = styled.TouchableWithoutFeedback``;

export const InnerView = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Campos = styled.View`
    width: 100%;
    padding: 20px;
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

export const CampoInputMasked = styled(TextInputMask)`
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
`;

export const BotaoTexto = styled.Text`
    font-size: 16px;
    color: #FFFFFF;
    font-weight: bold;
    text-transform: uppercase;
`;

export const BotaoInfo = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
`;

export const BotaoInfoTexto = styled.Text`
    font-size: 16px;
    color: #444444;
`;

export const BotaoInfoTextoBold = styled.Text`
    font-weight: bold;
    color: #FF0000;
`;
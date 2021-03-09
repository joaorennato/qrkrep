import styled from 'styled-components/native';
import { TextInputMask } from 'react-native-masked-text';

export const Campo = styled.View`
    flex-direction: row;
    width: 100%;
    height: 60px;
    border-radius: 30px;
    background-color: #ffcccc;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
`;

export const CampoInput = styled.TextInput`
    flex: 1;
    height: 60px;
    font-size: 16px;
    color: #FF0000;
    padding-left: 10px;
    padding-right: 20px;
`;

export const CampoInputMasked = styled(TextInputMask)`
    flex: 1;
    height: 60px;
    font-size: 16px;
    color: #FF0000;
    padding-left: 10px;
    padding-right: 20px;
`;
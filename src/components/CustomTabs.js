import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Container, Botao } from './styles/CustomTabs';

export default ({state, navigation}) =>{

    const goTo = (screen) => {
        navigation.navigate(screen);
    }

    return (
        <Container>
            <Botao onPress={()=>goTo('Home')}>
                <Icon 
                    name="home" 
                    size={state.index === 0 ? 32 : 24} 
                    color="#FFFFFF" 
                    style={{ opacity: state.index === 0 ? 1 : 0.7 }} 
                />
            </Botao>
            <Botao onPress={()=>goTo('Codigos')}>
                <Icon 
                    name="ticket" 
                    size={state.index === 1 ? 32 : 24} 
                    color="#FFFFFF" 
                    style={{ opacity: state.index === 1 ? 1 : 0.7 }} 
                />
            </Botao>
            <Botao onPress={()=>goTo('Usados')}>
                <Icon 
                    name="sticky-note" 
                    size={state.index === 2 ? 32 : 24} 
                    color="#FFFFFF" 
                    style={{ opacity: state.index === 2 ? 1 : 0.7 }} 
                />
            </Botao>
            <Botao onPress={()=>goTo('Perfil')}>
                <Icon 
                    name="user" 
                    size={state.index === 3 ? 32 : 24} 
                    color="#FFFFFF" 
                    style={{ opacity: state.index === 3 ? 1 : 0.7 }} 
                />
            </Botao>
        </Container>
    );
}
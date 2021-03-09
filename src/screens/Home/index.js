import React, { useContext } from 'react';
import { UserContext } from '../../Context/UserContext';
import { Container, Scroller, TituloArea, Titulo, Area, WelcomeText, WelcomeTextBold, OfertasArea, Oferta } from './style';

export default () => {
    
    const { state, dispatch } = useContext(UserContext);
    
    return (
        <Container>
            <Scroller>
                <TituloArea>
                    <Titulo>Olá { state.name }</Titulo>
                </TituloArea>
                <Area>
                    <WelcomeText numberOfLines={4}><WelcomeTextBold>Seja bem vindo!</WelcomeTextBold>{'\n'}Confira algumas ofertas abaixo e aproveite incríveis descontos na aba "Códigos".</WelcomeText>

                    <OfertasArea>
                        <Oferta source={require('../../assets/card-03.jpg')} />
                        <Oferta source={require('../../assets/card-01.jpg')} />
                        <Oferta source={require('../../assets/card-02.jpg')} />
                    </OfertasArea>
                </Area>
            </Scroller>
        </Container>
    );
}
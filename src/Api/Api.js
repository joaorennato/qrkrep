import AsyncStorage from '@react-native-async-storage/async-storage';
const BASE_API = 'https://api.xso.com.br/qrkrep/public/api';

export default {
    checkToken: async (token) => {
        const req = await fetch(BASE_API + '/auth/refresh', {
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({token})
        });

        const json = await req.json();
        return json;
    },
    login: async (cpf, password) => {
        const req = await fetch(BASE_API + '/auth/login', {
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({cpf, password})
        });

        const json = await req.json();
        return json;
    },
    cadastro: async (name, cpf, password) => {
        const req = await fetch(BASE_API + '/user', {
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({name, cpf, password})
        });

        const json = await req.json();
        return json;
    },
    logout: async () => {
        const token = await AsyncStorage.getItem('token');
        const req = await fetch(BASE_API + '/auth/logout', {
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({token})
        });

        const json = await req.json();
        return json;
    },
    getCodes: async () => {
        const token = await AsyncStorage.getItem('token');
        const req = await fetch(BASE_API + '/codigos?token=' + token);
        const json = await req.json();
        return json;
    },
    getOneCode: async (id) => {
        const token = await AsyncStorage.getItem('token');
        const req = await fetch(BASE_API + '/codigo/' + id + '/?token=' + token);
        const json = await req.json();
        return json;
    },
    getUsados: async () => {
        const token = await AsyncStorage.getItem('token');
        const req = await fetch(BASE_API + '/usados?token=' + token);
        const json = await req.json();
        return json;
    },
    makeUsed: async (codigo) => {
        const token = await AsyncStorage.getItem('token');
        const req = await fetch(BASE_API + '/used/' + codigo + '/?token=' + token);
        const json = await req.json();
        return json;
    },
    editarPerfil: async (body) => {
        const token = await AsyncStorage.getItem('token');
        body.token = token;
        
        const req = await fetch(BASE_API + '/user', {
            method: 'PUT',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(body)
        });

        const json = await req.json();
        return json;
    }
}
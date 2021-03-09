export const initialState = {
    name: '',
    cpf: '',
};

export const UserReducer = (state, action) => {
    switch(action.type){
        case 'setName':
            return { ...state, name: action.payload.name };
        break;
        case 'setCpf':
            return { ...state, cpf: action.payload.cpf };
        break;
        default:
            return state;
    }
}
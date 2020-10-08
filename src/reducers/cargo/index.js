//reducer chamda toda vez que a acao for chamada, 
//primeiro parametro - o state é como tava antes nossos objetos antes da funcao acontecer
//segundo paramento - a action, é a propria acao, a acao que acontceu
export default function REDUCER_CARGO (state={cargos:[]}, action){
    switch(action.type){
        case 'ADD_CARGO':
            //pega tudo o que tinha antes e ta add um novo cargo
            return {...state, cargos: [...state.cargos, action.novoCargo]}
        case 'DELETE_CARGO':
            let cargoDeletado = [...state.cargos].filter(cargo => cargo.nome !== action.nomeExcluido);
            return {...state, cargos: [...cargoDeletado]}
        default:
            return state;
    }
}
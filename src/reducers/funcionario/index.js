//reducer chamda toda vez que a acao for chamada, 
//primeiro parametro - o state é como tava antes nossos objetos antes da funcao acontecer
//segundo paramento - a action, é a propria acao, a acao que acontceu
export default function REDUCER_FUNCIONARIO (state={funcionarios:[]}, action){
    switch(action.type){
        case 'ADD_FUNCIONARIO':
            //pega tudo o que tinha antes e ta add um novo funcionario
            return {...state, funcionarios: [...state.funcionarios, action.novoFuncionario]}

        case 'DELETE_FUNCIONARIO':
            let funcionarioDeletado = [...state.funcionarios].filter(funcionario => funcionario.nome !== action.nomeExcluido);
            return {...state, funcionarios: [...funcionarioDeletado]}
        default:
            return state;
    }
}
//reducer chamda toda vez que a acao for chamada, 
//primeiro parametro - o state é como tava antes nossos objetos antes da funcao acontecer
//segundo paramento - a action, é a propria acao, a acao que acontceu
export default function REDUCER_FUNCIONARIO (state={funcionarios:[]}, action){
    switch(action.type){
        case 'ADD_FUNCIONARIO':
            //pega tudo o que tinha antes e ta add um novo funcionario
            return {...state, funcionarios: [...state.funcionarios, action.novoFuncionario]}

        case 'DELETE_FUNCIONARIO':
            let funcionarioDeletado = [...state.funcionarios].filter(funcionario => (funcionario.nome !== action.nomeExcluido || funcionario.sobrenome !== action.sobrenomeExcluido));
            return {...state, funcionarios: [...funcionarioDeletado]}

        case 'EDIT_FUNCIONARIO':
            let funcionarioEditado = [...state.funcionarios].map(funcionario => {
                if(action.funcionarioAtualizado.nome === funcionario.nome && action.funcionarioAtualizado.sobrenome === funcionario.sobrenome){
                    return action.funcionarioAtualizado;
                }else{
                    return funcionario;
                }
            })
            return {...state, funcionarios: [...funcionarioEditado]}

        default:
            return state;
    }
}
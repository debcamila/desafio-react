import { combineReducers } from 'redux';

import REDUCER_CARGO from './cargo';
import REDUCER_FUNCIONARIO from './funcionario';

export default combineReducers ({ //funcao que junta os dois reducers
    REDUCER_CARGO, 
    REDUCER_FUNCIONARIO
})
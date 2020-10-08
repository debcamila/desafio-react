import { createStore } from 'redux';
import reducer from '../reducers';

const store = createStore(reducer); //store feito a partir dos reducers combinados

export default store;

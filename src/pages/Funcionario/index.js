import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import TopBarComponent from '../../components/TopBarComponent';

export default withRouter(function Funcionario(props) {

    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [dataNascimento, setDataNascimento] = useState(null);
    const [salario, setSalario] = useState(0);

    function mandar(){
        console.log(nome)
    }

    return (
        <div>
            <TopBarComponent />

            <div class="container">
                <h1>agora  vai</h1>
                <TextField id="nome" label="nome" 
                onChange={(event)=>{
                    setNome(event.target.value)
                }}/>
                <button onClick={()=>{mandar()}}>hi</button>
            </div>
        </div>
    )
})

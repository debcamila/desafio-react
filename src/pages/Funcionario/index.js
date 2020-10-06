import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

export default function Funcionario() {

    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [dataNascimento, setDataNascimento] = useState(null);
    const [salario, setSalario] = useState(0);

    function mandar(){
        console.log(nome)
    }

    return (
        <div>
            <h1>agora  vai</h1>
            <TextField id="nome" label="nome" 
            onChange={(event)=>{
                setNome(event.target.value)
            }}/>
            <button onClick={()=>{mandar()}}>hi</button>
        </div>
    )
}

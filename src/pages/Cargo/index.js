import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import TopBarComponent from '../../components/TopBarComponent';


export default withRouter(function Cargo(props) {

    const [descricao, setDescricao] = useState('');

    function mandar(){
        console.log(descricao)
    }

    return (
        <div>
            <TopBarComponent />

            <div className="container">
                <h1>cargo</h1>
                <TextField id="cargo" label="cargo" 
                onChange={(event)=>{
                    setDescricao(event.target.value)
                }}/>
                <button onClick={()=>{mandar()}}>enviar</button>
            </div>
        </div>
    )
})

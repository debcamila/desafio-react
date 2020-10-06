import React from 'react';
import { withRouter } from 'react-router-dom';
import logoImage from '../../static/images/3lmlogo.png';
import { Typography } from '@material-ui/core';

import "./style.css";

function pagename(history){
    if(history  ==  "/"){
        return (
            <Typography className="page-title">
                Página Inicial
            </Typography>
            )
    }else if (history  ==  "/funcionario"){
        return (
            <Typography className="page-title">
                Funcionário
            </Typography>
        )
    }else if (history == "/cargo"){
        return (
            <Typography className="page-title">
                Cargo
            </Typography>
        )
    }
}

export default withRouter(function TopBarComponent(props) {
    return (
        <div>
            <div className="topbar">
                <img 
                    src={logoImage} 
                    alt="3LM Informática logo" 
                    className="img-logo"
                    onClick={() =>{
                        props.history.push("/")
                    }}
                />

           {pagename(props.history.location.pathname)}
            
            </div>
        </div>
    )
})

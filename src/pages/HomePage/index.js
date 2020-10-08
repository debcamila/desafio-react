import React from 'react';
import { withRouter } from 'react-router-dom';

import TopBarComponent from '../../components/TopBarComponent';
import "./style.css";
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';


export default withRouter(function HomePage(props) {
    
    return (
        <div>
            <TopBarComponent />

            <div className="container">
                <Grid container spacing={5} direction="row" justify="space-between">
                    <Grid item xs={8} sm={5} className="grid-item">
                        <Typography variant="h4">Cadastrar Funcionário</Typography>
                        <Typography>Cadastre aqui um novo Funcionário.</Typography>

                        <Button variant="contained" color="primary" 
                            onClick={() =>{
                                props.history.push("/funcionario")
                            }}>
                                Novo Funcionário
                        </Button>

                        <Button variant="outlined" color="primary" style={{marginLeft: "15px"}}
                            onClick={() =>{
                                props.history.push("/listar-funcionarios")
                            }}>
                                Listar Funcionários
                        </Button>
                    </Grid>

                    <Grid item xs={8} sm={5} className="grid-item" >
                        <Typography variant="h4">Cadastrar Cargo</Typography>
                        <Typography>Cadastre aqui um novo Cargo.</Typography>

                        <Button variant="contained" color="primary" 
                            onClick={() =>{
                                props.history.push("/cargo")
                            }}>
                                Novo Cargo
                        </Button>

                        <Button variant="outlined" color="primary" style={{marginLeft: "15px"}}
                            onClick={() =>{
                                props.history.push("/listar-cargos")
                            }}>
                                Listar Cargos
                        </Button>
                    </Grid>

                </Grid>
            </div>
        </div>
    )
})

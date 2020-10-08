import React from 'react';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';

import DeleteIcon from '@material-ui/icons/Delete';

import TopBarComponent from '../../components/TopBarComponent';

import './style.css';

export default withRouter(function ListaFuncionarios(props) {

    const funcionarios = useSelector(state => state.REDUCER_FUNCIONARIO.funcionarios);
    const dispatch = useDispatch();

    function deletar_funcionario(nomeDeletado){

        dispatch({type:'DELETE_FUNCIONARIO', nomeExcluido: nomeDeletado});
    }

    return (
        <div>
            <TopBarComponent />
                <div className="container">   
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={12} className="grid-item">
                            <Typography variant="h4">Lista de Funcionários</Typography>
                            <Typography>Confira abaixo a lista de todos os Funcionários cadastrados.</Typography>
                        </Grid>

                        <div>

                            {funcionarios.map(funcionario => (
                                <Grid xs={12} sm={12} className="grid-item">
                                <Typography variant="h6">Nome: {funcionario.nome}</Typography>
                                <Typography variant="h6">Sobrenome: {funcionario.sobrenome}</Typography>
                                <Typography variant="h6">Cargo: {funcionario.cargo}</Typography>
                                <Typography variant="h6">Data de nascimento: {funcionario.dataNascimento}</Typography>
                                <Typography variant="h6">Salário: R$ {funcionario.salario}</Typography>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    startIcon={<DeleteIcon />}
                                    onClick={() => {
                                        deletar_funcionario(funcionario.nome)
                                    }}
                                    >
                                    Delete
                                </Button>
                            </Grid>
                            ))}
                        
                        </div>
                    </Grid>

                    <Grid xs={12} sm={12} className="btn-form">
                        <Button variant="outlined" color="primary" style={{marginRight:"15px"}}
                            onClick={() => {
                                props.history.push("/")
                            }}>
                            Voltar
                        </Button>

                        <Button variant="contained" color="primary"
                            onClick={() => {
                                props.history.push("/funcionario")
                            }}>
                            Cadastrar um Funcionário
                        </Button>
                    </Grid>

                </div>
        </div>
    )
})
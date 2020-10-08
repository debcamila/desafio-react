import React from 'react';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch, useSelector } from 'react-redux';


import TopBarComponent from '../../components/TopBarComponent';

export default withRouter(function ListaCargos(props) {

    const cargos = useSelector(state => state.REDUCER_CARGO.cargos);
    const dispatch = useDispatch();

    function deletar_cargo(nomeDeletado){

        dispatch({type:'DELETE_CARGO', nomeExcluido: nomeDeletado});
    }

    return (
        <div>
            <TopBarComponent />
                <div className="container">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={12} className="grid-item">
                            <Typography variant="h4">Lista de Cargos</Typography>
                            <Typography>Confira abaixo a lista de todos os Cargos cadastrados.</Typography>
                        </Grid>

                        <div>

                            {cargos.map(cargo => (
                                <Grid xs={12} sm={12} className="grid-item">
                                <Typography variant="h6">Nome: {cargo.nome}</Typography>
                                <Typography variant="h6">Descrição: {cargo.descricao}</Typography>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    startIcon={<DeleteIcon />}
                                    onClick={() => {
                                        deletar_cargo(cargo.nome)
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
                                props.history.push("/cargo")
                            }}>
                            Cadastrar um Cargo
                        </Button>
                    </Grid>
                </div>
        </div>
    )
})

import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import { useDispatch, useSelector } from 'react-redux';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import TopBarComponent from '../../components/TopBarComponent';

import './style.css';

export default withRouter(function ListaFuncionarios(props) {

    const funcionarios = useSelector(state => state.REDUCER_FUNCIONARIO.funcionarios);
    const cargos = useSelector(state => state.REDUCER_CARGO.cargos);
    const dispatch = useDispatch();

    const [novoCargo, setNovoCargo] = useState('');
    const [novoSalario, setNovoSalario] = useState(0);
    const [userEditando, setUserEditando] = useState(null);
    const [editando, setEditando] = useState(false);

    function deletar_funcionario(nomeDeletado, sobrenomeDeletado) {

        dispatch({ type: 'DELETE_FUNCIONARIO', nomeExcluido: nomeDeletado, sobrenomeExcluido: sobrenomeDeletado });
    }

    function editar_funcionario(novoFuncionario) {
        dispatch({ type: 'EDIT_FUNCIONARIO', funcionarioAtualizado: novoFuncionario })
    }

    function fechar_edicao(){
        setUserEditando(null);
        setNovoSalario(0);
        setNovoCargo('');
        setEditando(false);
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

                        <Dialog onClose={() => {fechar_edicao()}} aria-labelledby="simple-dialog-title" open={editando} style={{width:"100%"}}>
                            <DialogTitle id="simple-dialog-title">Editar dados</DialogTitle>
                            <Grid xs={12} sm={12} className="input-form" style={{padding: "20px"}}>    
                                <TextField style={{width: "80%"}}
                                    id="cargo"
                                    select
                                    label="Cargo"
                                    value={novoCargo}
                                    onChange={(event) =>{
                                        setNovoCargo(event.target.value);
                                    }}
                                >
                                    {cargos.map((option) => (
                                        <MenuItem key={option.nome} value={option.nome}>
                                            {option.nome}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>

                            <Grid xs={12} sm={12} className="input-form" style={{padding: "20px"}}>
                                <TextField id="salario" label="Salário" type="number"
                                    onChange={(event) => {
                                        if(Number(event.target.value) >= 0){
                                            setNovoSalario(event.target.value);
                                        }
                                        else{
                                            setNovoSalario(0);
                                        }
                                    }}
                                    value={novoSalario}
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                                    }}
                                />
                            </Grid>

                            <Button
                                    variant="outlined"
                                    color="secondary"
                                    onClick={() => {
                                        fechar_edicao()
                                    }}
                                >
                                    Cancelar
                                </Button>

                                <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={() => {
                                        let novoFuncionario = {
                                            ...userEditando, 
                                            cargo: novoCargo === '' ? userEditando.cargo : novoCargo,
                                            salario: novoSalario == 0 ? userEditando.salario : novoSalario 
                                        }
                                        editar_funcionario(novoFuncionario);
                                    }}
                                >
                                    Enviar
                                </Button>
                            
                        </Dialog>

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
                                        deletar_funcionario(funcionario.nome, funcionario.sobrenome)
                                    }}
                                >
                                    Delete
                                </Button>

                                <Button style={{ marginLeft: "15px" }}
                                    variant="contained"
                                    color="secondary"
                                    startIcon={<EditIcon />}
                                    onClick={() => {
                                        setEditando(true);
                                        setUserEditando(funcionario);
                                    }}
                                >
                                    Editar
                                </Button>
                            </Grid>
                        ))}

                    </div>
                </Grid>

                <Grid xs={12} sm={12} className="btn-form" style={{ marginTop: "35px" }}>
                    <Button variant="outlined" color="primary" style={{ marginLeft: "15px", float: "right" }}
                        onClick={() => {
                            props.history.push("/")
                        }}>
                        Voltar
                        </Button>

                    <Button variant="contained" color="primary" style={{ float: "right" }}
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
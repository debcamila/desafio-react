import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import "./style.css";
import { useDispatch, useSelector } from 'react-redux'; 
//dispatch - permite chamar uma acao q modifica o state
//selector - ler do state

import TopBarComponent from '../../components/TopBarComponent';

export default withRouter(function Funcionario(props) {

    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [cargo, setCargo] = useState('');
    const [dataNascimento, setDataNascimento] = useState(null);
    const [salario, setSalario] = useState(null);

    const dispatch = useDispatch();

    const cargos = useSelector(state => state.REDUCER_CARGO.cargos);

    function adicionar_funcionario(){
        let novoFuncionario= {
            nome: nome,
            sobrenome: sobrenome,
            cargo: cargo,
            dataNascimento: dataNascimento,
            salario: salario
        }
        dispatch({type:'ADD_FUNCIONARIO', novoFuncionario: novoFuncionario});
    }

    return (
        <div>
            <TopBarComponent />

            <div class="container">
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={12} className="grid-item">
                        <Typography variant="h4">Cadastro de Funcionário</Typography>
                        <Typography>Complete o formulário abaixo para cadastrar um novo Funcionário.</Typography>

                        
                        <div>
                            <Grid xs={12} sm={12} className="input-form">
                                <TextField id="nome" label="Nome" fullWidth
                                    onChange={(event) => {
                                        setNome(event.target.value)
                                    }}
                                    value={nome}
                                />
                            </Grid>

                            <Grid xs={12} sm={12} className="input-form">
                                <TextField id="sobrenome" label="Sobrenome" fullWidth
                                    onChange={(event) => {
                                        setSobrenome(event.target.value)
                                    }}
                                    value={sobrenome}
                                />
                            </Grid>

                            <Grid xs={12} sm={12} className="input-form">    
                                <TextField style={{width: "100%"}}
                                    id="cargo"
                                    select
                                    label="Cargo"
                                    value={cargo}
                                    onChange={(event) =>{
                                        setCargo(event.target.value);
                                    }}
                                >
                                    {cargos.map((option) => (
                                        <MenuItem key={option.nome} value={option.nome}>
                                            {option.nome}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>

                            <Grid xs={12} sm={12} className="input-form">
                                <TextField id="dataNascimento" label="Data de Nascimento" type="date"
                                    onChange={(event) => {
                                        setDataNascimento(event.target.value)
                                    }}
                                    value={dataNascimento}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />

                                <TextField id="salario" label="Salário" type="number" style={{marginLeft:"50px"}}
                                    onChange={(event) => {
                                        if(Number(event.target.value) >= 0){
                                            setSalario(event.target.value);
                                        }
                                        else{
                                            setSalario(0);
                                        }
                                    }}
                                    value={salario}
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                                    }}
                                />
                            </Grid>
                        </div>

                        <Grid xs={12} sm={12} className="btn-form">
                            <Button variant="outlined" color="primary" style={{marginRight:"15px"}}
                                onClick={() => {
                                    props.history.push("/")
                                }}>
                                Voltar
                            </Button>

                            <Button variant="contained" color="primary" style={{marginRight:"15px"}}
                                onClick={() => {
                                    adicionar_funcionario();
                                }}>
                                Enviar
                            </Button>

                        </Grid>

                    </Grid>
                </Grid>
            </div>
        </div>
    )
})

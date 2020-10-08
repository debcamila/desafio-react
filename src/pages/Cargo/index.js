import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TopBarComponent from '../../components/TopBarComponent';
import { useDispatch } from 'react-redux'; //permite chamar uma acao


export default withRouter(function Cargo(props) {

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const dispatch = useDispatch();

    function adionar_cargo(){
        let novoCargo = {
            nome: nome,
            descricao: descricao
        }
        dispatch({type:'ADD_CARGO', novoCargo: novoCargo});
    }

    return (
        <div>
            <TopBarComponent />

            <div className="container">
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={12} className="grid-item">
                        <Typography variant="h4">Cadastro de Cargo</Typography>
                        <Typography>Complete o formulário abaixo para cadastrar um novo Cargo.</Typography>

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
                                <TextField id="descricao" label="Descrição" fullWidth multiline
                                    onChange={(event) => {
                                        setDescricao(event.target.value)
                                    }}
                                    value={descricao}
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

                            <Button variant="contained" color="primary"
                                onClick={() => {
                                    adionar_cargo()
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

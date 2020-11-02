import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TopBarComponent from '../../components/TopBarComponent';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useDispatch } from 'react-redux'; //permite chamar uma acao

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


export default withRouter(function Cargo(props) {

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const dispatch = useDispatch();
    const [openMessage, setOpenMessage] = useState(false);

    function adionar_cargo(){
        let novoCargo = {
            nome: nome,
            descricao: descricao
        }
        dispatch({type:'ADD_CARGO', novoCargo: novoCargo});
    }

    function handleClose(){
        setOpenMessage(false);
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
                                    adionar_cargo();
                                    setOpenMessage(true);
                                    setNome('');
                                    setDescricao('');
                                }}>
                                Enviar
                            </Button>

                        </Grid>
                    </Grid>
                </Grid>

                <Snackbar open={openMessage} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success">
                        Cargo cadastrado com sucesso!
                    </Alert>
                </Snackbar>

            </div>
        </div>
    )
})

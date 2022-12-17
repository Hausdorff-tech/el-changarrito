import React from "react";
import Menu from "../components/Menu";
import TextField from '@mui/material/TextField';
import {Form, FormGroup, Button, Card } from "reactstrap";
import "./loginStyles/login.css";

export default function login(){
    return(
        <div className="LoginContainer">
            <Menu />
            <Card id="CardContainer">
                <h1 className="d-flex justify-content-center mt-3">Ingresar</h1>
                    <Form className="mt-4 d-flex justify-content-center align-items-center">
                        <FormGroup>                        
                            <div className="m-3">
                                <TextField variant="outlined" label="Correo electrónico" type="text" className="Input" />
                            </div> 
                            <div className="m-3">
                                <TextField variant="outlined" label="Contraseña" type="password" className="Input" />
                            </div>  
                            <div className="m-3">
                                <Button outline color="danger" className="send">
                                    Enviar
                                </Button>
                            </div>
                        </FormGroup>
                    </Form>

            </Card>
        </div>
    );
};
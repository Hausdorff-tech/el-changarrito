import React from "react";
import TextField from '@mui/material/TextField';
import {Form, FormGroup, Button, Card } from "reactstrap";
import Menu from "../components/Menu";
import Link from "@mui/material/Link";
import "./loginStyles/desktopLogin.css";

export default function DesktopLogin(){
    return(
        <div className="LoginContainer">
        <Menu />
        <Card id="CardContainer">
            <h1 className="d-flex justify-content-center mt-3" id="ingresar">Ingresar</h1>
                <Form className="mt-4 d-flex justify-content-center align-items-center">
                    <FormGroup>                        
                        <div className="m-3">
                            <TextField variant="outlined" color="secondary" label="Correo electrónico" type="text" className="Input" />
                        </div> 
                        <div className="m-3">
                            <TextField variant="outlined" color="secondary" label="Contraseña" type="password" className="Input" />
                        </div>  
                        <div className="m-3 d-flex justify-content-center">
                            <Button outline color="warning">
                                Acceder
                            </Button>                            
                        </div>
                        <div className="m-2 d-flex justify-content-center">
                            <Link href="/cuenta" underline="none">Crear cuenta</Link>
                        </div>
                    </FormGroup>
                </Form>
        </Card>
    </div>
    );
}


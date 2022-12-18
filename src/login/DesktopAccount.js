import React from "react";
import { Form, FormGroup, Button, Card } from "reactstrap";
import TextField from "@mui/material/TextField";
import Menu from "../components/Menu";
import "./loginStyles/desktopAccount.css"

export default function DesktopAcc(){
    return(
        <div id="DesktopAccount">
            <Menu />            
            <Card id="CardAccount">
                <h1 className="d-flex justify-content-center mt-4">Nueva cuenta</h1>
                <Form className="mt-1 d-flex justify-content-center align-items-center">
                    <FormGroup>
                        <div className="m-3">
                            <TextField variant="outlined" label="Nombre" type="text"/>
                        </div>
                        <div className="m-3">
                            <TextField variant="outlined" label="Correo electrónico" type="email"/>
                        </div>
                        <div className="m-3">
                            <TextField variant="outlined" label="Nueva contraseña" type="password"/>
                        </div>
                        <div className="m-3 d-flex justify-content-center">
                            <Button outline color="success">Crear cuenta</Button>
                        </div>
                    </FormGroup>
                </Form>
            </Card>
        </div>
    );
}
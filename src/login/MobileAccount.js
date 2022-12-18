import React from "react";
import Menu from "../components/Menu";
import { Form, FormGroup, Button } from "reactstrap";
import TextField from "@mui/material/TextField";
import "./loginStyles/mobileAccount.css";


export default function MobileAcc(){
    return(
        <div id="mobileAccount">
            <Menu />
            <h1 className="d-flex justify-content-center mt-4">Nueva cuenta</h1>
            <Form className="mt-2 d-flex justify-content-center align-items-center">
                <FormGroup>
                    <div className="m-3">
                        <TextField variant="outlined" label="Nombre" type="text" />
                    </div>
                    <div className="m-3">
                        <TextField variant="outlined" label="Correo electrónico" type="text" />
                    </div>
                    <div className="m-3">
                        <TextField variant="outlined" label="Nueva contraseña" type="password" />
                    </div>
                    <div className="m-3 d-flex justify-content-center">
                        <Button outline color="primary">Crear</Button>
                    </div>
                </FormGroup>
            </Form>
        </div>
    );
}
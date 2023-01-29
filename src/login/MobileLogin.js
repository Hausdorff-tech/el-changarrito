import React from "react";
import {
    Form,
    FormGroup,
    Button    
} from "reactstrap";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Menu from "../components/Menu";
import "./loginStyles/mobileLogin.css";

export default function MobileLogin(){
    return(
        <div id="mobileLoginContainer">
            <Menu />            
            <h1 className="d-flex justify-content-center mt-4">Ingresar</h1>
            <Form className="mt-2 d-flex justify-content-center align-items-center">
                <FormGroup>
                    <div className="m-3">
                        <TextField variant="outlined" color="secondary" label="Correo electrónico" type="text"/>
                    </div>
                    <div className="m-3">
                        <TextField variant="outlined" color="secondary" label="Contraseña" type="password"/>
                    </div>
                    <div className="m-3 d-flex justify-content-center">
                        <Button outline color="success">Acceder</Button>
                    </div>
                    <div className="m-2 d-flex justify-content-center">
                        <Link href="/reestablecer-contraseña" underline="none">Olvidé mi contraseña</Link>
                    </div>
                    <div className="m-2 d-flex justify-content-center">                        
                        <Link href="/cuenta" underline="none">Crear cuenta</Link>
                    </div>                    
                </FormGroup>
            </Form>
        </div>
    );
}
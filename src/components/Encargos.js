import React from "react";
import Menu from "./Menu";
import {
    Form,
    FormGroup,
    Button
} from "reactstrap";
import TextField  from "@mui/material/TextField";
import "./styles/encargos.css";

export default function Encargos(){
    return(        
        <div id="encargosContainer">
            <Menu />
            <h1 className="d-flex justify-content-center mt-3" id="encargar">¡Encargá tus productos favoritos!</h1>
            <Form className="mt-4 d-flex justify-content-center align-items-center">
                <FormGroup>
                    <div className="m-3">
                        <TextField variant ="outlined" color="warning" label="Nombre" type="text" />
                    </div>
                    <div className="m-3">
                        <TextField variant ="outlined" color="warning" label="Apellido" type="text" />
                    </div>
                    <div className="m-3">
                        <TextField variant ="outlined" color="warning" label="Correo Electrónico" type="text" />
                    </div>
                    <div className="m-3">
                        <TextField variant ="outlined" color="warning" label="Celular" type="text" />
                    </div>
                    <div className="m-3">
                        <TextField multiline  color="warning" label="Nuevo producto" rows={5} />
                    </div>
                    <div className="m-3 d-flex justify-content-center">
                        <Button outline color="danger">Enviar pedido</Button>
                    </div>
                </FormGroup>
            </Form>
        </div>
    );
}
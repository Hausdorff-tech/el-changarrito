import React, { useState } from "react";
import Menu from "./Menu";
import { sendOrder } from "../API/index.js";
import {
    Form,
    FormGroup,
    Button,
    Card
} from "reactstrap";
import TextField  from "@mui/material/TextField";
import "./styles/encargos.css";

export default function Encargos(){
    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [correo, setCorreo] = useState("");
    const [celular, setCelular] = useState("");
    const [producto, setProducto] = useState("");
    const [order, setOrder] = useState("");

    const handleNameChange = e =>{
        setNombre(e.target.value);
    }
    const handleLastName = e =>{
        setApellidos(e.target.value); 
    }           
    const handleEmail = e => {
        setCorreo(e.target.value);
    }
    const handlePhone = e =>{
        setCelular(e.target.value);
    }
    const handleProduct = e => {
        setProducto(e.target.value);
    }

    const handleSubmit = e => {
        //e.preventDefault();
        sendOrder({nombre,apellidos,correo,celular,producto,setOrder});
        console.log(order);
    }

    return(        
        <div id="encargosContainer">
            <Menu />
            <h1 className="d-flex justify-content-center mt-3" id="encargar">¡Encargá tus productos favoritos!</h1>
            <Card id="Card">            
            <Form onSubmit = {handleSubmit} className="mt-4 d-flex justify-content-center align-items-center">
                <FormGroup>
                    <div className="m-3">
                        <TextField onChange={handleNameChange} variant ="outlined" color="warning" label="Nombre" type="text" />
                    </div>
                    <div className="m-3">
                        <TextField onChange={handleLastName} variant ="outlined" color="warning" label="Apellido" type="text" />
                    </div>
                    <div className="m-3">
                        <TextField onChange={handleEmail} variant ="outlined" color="warning" label="Correo Electrónico" type="text" />
                    </div>
                    <div className="m-3">
                        <TextField onChange={handlePhone} variant ="outlined" color="warning" label="Celular" type="text" />
                    </div>
                    <div className="m-3">
                        <TextField onChange={handleProduct} multiline color="warning" label="Nuevo producto" rows={5} />
                    </div>
                    <div className="m-3 d-flex justify-content-center">
                        <Button outline color="danger">Enviar pedido</Button>
                    </div>
                </FormGroup>
            </Form>
            </Card>
        </div>
    );
}
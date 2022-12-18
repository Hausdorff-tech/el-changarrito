import React from "react";
import Menu from "./Menu";
//import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Form, FormGroup, Button } from "reactstrap";
import "./styles/contact.css";

export default function Contact(){
    return(
    <div id="contactContainer">  
        <Menu />                
        <h1 className="d-flex justify-content-center mt-3">¡Ponete en contacto!</h1>
        <Form id="contactForm" className="mt-3 d-flex justify-content-center">                        
            <FormGroup>
                <div className="m-3">
                    <TextField variant="outlined" color="success" label="Nombre" type="text" className="Input" /> 
                </div>                
                <div className="m-3">
                    <TextField variant="outlined" color="success" label="Apellidos" type="email" className="Input" />
                </div>
                <div className="m-3">
                    <TextField variant="outlined" color="success" label="Correo electrónico" type="text" className="Input" />
                </div> 
                <div className="m-3">
                    <TextField id="outlined-textarea" color="success" label="Mensaje" type="text" multiline rows={5} className="Input" />
                </div>  
                <div className="m-3">
                    <Button outline color="danger" className="send">
                        Enviar
                    </Button>
                </div>                                                                        
            </FormGroup>
        </Form>                 
    </div>
    );
}
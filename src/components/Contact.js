import React, { useState } from "react";
import { SendMail } from "../API";
import Menu from "./Menu";
import TextField from '@mui/material/TextField';
import {Form, FormGroup, Button } from "reactstrap";
import "./styles/contact.css";
import Footer from "./Footer";

export default function Contact(){
    const [send, setSend] = useState();
    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [correo, setCorreo] = useState("");
    const [mensaje, setMsj] = useState("");

    const handleNameChange = e =>{
        setNombre(e.target.value);
    }
    const handleLastName = e =>{
        setApellidos(e.target.value); 
    }           
    const handleEmail = e => {
        setCorreo(e.target.value);
    }
    const handleMsj = e =>{
        setMsj(e.target.value);
    }
    
    
    const submitHandler = e => {
        //e.preventDefault();        
        SendMail({nombre, apellidos, correo, mensaje, setSend});
        //console.log(send);
    }
    return(
    <div id="contactContainer">  
        <Menu />                
        <h1 className="d-flex justify-content-center mt-3">¡Ponete en contacto!</h1>
        <Form onSubmit={submitHandler} id="contactForm" className="mt-3 d-flex justify-content-center">                        
            <FormGroup>
                <div className="m-3">
                    <TextField onChange={handleNameChange} variant="outlined" color="success" label="Nombre" type="text" className="Input" /> 
                </div>                
                <div className="m-3">
                    <TextField onChange={handleLastName} variant="outlined" color="success" label="Apellidos" type="text" className="Input" />
                </div>
                <div className="m-3">
                    <TextField onChange={handleEmail} variant="outlined" color="success" label="Correo electrónico" type="email" className="Input" />
                </div> 
                <div className="m-3">
                    <TextField onChange={handleMsj} id="outlined-textarea" color="success" label="Mensaje" type="text" multiline rows={5} className="Input" />
                </div>  
                <div className="m-3">
                    <Button outline color="primary" className="send">
                        Enviar
                    </Button>
                </div>                                                                        
            </FormGroup>
        </Form>               
        <Footer/> 
    </div>
    );
}
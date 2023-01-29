import React from "react";
import "./styles/home.css";
import Menu from "./Menu";
import logo from "../images/elchangarrito.png";

export default function Inicio(){
    return(
        <> 
            <Menu/>
            <img src={logo} alt="el changarrito" title="el changarrito"/>
        </>
    );
}
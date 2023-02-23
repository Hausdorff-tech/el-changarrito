import React from "react";
import "./styles/home.css";
import Menu from "./Menu";
import logo from "../images/elchangarrito.png";
import Footer from "./Footer";

export default function Inicio(){
    return(
        <div> 
            <Menu/>            
            <div className="d-flex justify-content-center">
                <img src={logo} alt="el changarrito" title="el changarrito"/>
            </div>
            <Footer />
        </div>
    );
}
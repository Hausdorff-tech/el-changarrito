import React from "react";
import Menu from "./Menu";
import DetalleProducto from "./DetalleProducto";
/*import shirt1 from "../images/tshirt1.jpeg";
import shirt2 from "../images/tshirt2.jpg";
import shirt3 from "../images/tshirt3.jpg";*/
import { Row, Col } from "reactstrap";
import { ProductosTienda } from "../ProductosTienda";
import Footer from "./Footer";

export default function RopaMujeres(){
    return(
        <div>
            <Menu />
            <h1>Ropa para mujeres </h1>
            <Row xs="1" sm="2" md="4" className="g-4">
                {ProductosTienda.map((producto, idx) => (
                    <Col key={idx}>
                        <DetalleProducto 
                           producto = {producto}
                        />
                    </Col>
                ))}                
            </Row> 
            <Footer />                   
        </div>
    );
}
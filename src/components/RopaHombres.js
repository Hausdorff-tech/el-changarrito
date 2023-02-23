import React from "react";
import Menu from "./Menu";
import { Row, Col } from "reactstrap";
import { ProductosTienda } from "../ProductosTienda";
import DetalleProducto from "./DetalleProducto";
import Footer from "./Footer";

export default function RopaHombres(){
    return(
        <div>
            <Menu />
            <h1>Ropa para hombres</h1>
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
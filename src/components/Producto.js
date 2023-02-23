/*
Este componente se supone que es el componente que genera items para que
en el componente de carrito se muestren como una lista xd

*/
import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import { getProductData } from "../ProductosTienda";
import { Button } from "reactstrap";
import "./styles/producto.css";

export default function Producto(props){
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const productData = getProductData(id);
    return(
        <>
            <img src={productData.img} alt="Producto de la tienda" className="productImg"/>
            <h3 className="d-flex justify-content-center">{productData.producto}</h3>
            <p className="d-flex justify-content-center">Descripción: {productData.descripcion}</p>
            <p className="d-flex justify-content-center">Talla: {productData.talla}</p>
            <p className="d-flex justify-content-center">Cantidad: {quantity}</p>
            <p className="d-flex justify-content-center">C$ {(quantity * productData.precio).toFixed(2)}</p>
            <Button 
                color="info" 
                size="sm" 
                className="deleteBtn d-flex justify-content-center"
                onClick={()=> cart.deleteFromCart(id)}
            >
                Eliminar artículo
            </Button>
            <hr />
        </>
    )
}

/*
Este componente se supone que es el componente que genera items para que
en el componente de carrito se muestren como una lista xd

*/
import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import { getProductData } from "../ProductosTienda";
import { Button } from "reactstrap";

export default function Producto(props){
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const productData = getProductData(id);
    return(
        <>
            <h3>{productData.producto}</h3>
            <p>Descripción: {productData.descripcion}</p>
            <p>Talla: {productData.talla}</p>
            <p>Cantidad: {quantity}</p>
            <p>C$ {(quantity * productData.precio).toFixed(2)}</p>
            <Button color="info" size="sm" onClick={()=> cart.deleteFromCart(id)}>
                Eliminar artículo
            </Button>
            <hr />
        </>
    )
}

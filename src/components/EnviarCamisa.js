import React, { useContext, useState }from "react";
import Menu from "./Menu";
import { CartContext } from "../CartContext";
import { getProductData } from "../ProductosTienda";
import Producto from "./Producto";
import { Button } from "reactstrap";

export default function EnviarCamisa(){
    const cart = useContext(CartContext);
    const [clicked, setClicked] = useState(false);
    const [info, setInfo] = useState({});

    let productos = [];
    let i = 0;
    cart.items.forEach(elem =>{
        productos[i] = getProductData(elem.id);
        i++;
    })
    console.log("Productos: ", productos);

    const handleSubmit = () => {
        setInfo({
            img:"",
            producto:"",
            descripcion:"",
            talla:"",
            cantidad:"",
            precio:0
        })
    }

    return(
        <>
            <Menu />
            <h1 className="d-flex justify-content-center">¡Finalizá la compra!</h1>            
            {cart.items.map((currentProduct, idx) => (
                    <> 
                        <Producto key={idx} id={currentProduct.id} quantity={currentProduct.quantity}/>                                                
                    </>                    
                ))                                                
            }            
            <h3 className="d-flex justify-content-center">
               Cuenta bancaria: 12345678910
            </h3>
            <Button                  
                color="success" 
                className="d-flex justify-content-center"
                onClick={handleSubmit}
            >
                Realizar pago
            </Button>
        </>
    )
}
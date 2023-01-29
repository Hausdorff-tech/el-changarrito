import React, { useContext } from "react";
import {     
    Button, 
    Card, 
    CardBody, 
    CardTitle, 
    CardText,
    Row,  
    Col,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "./styles/detalleProducto.css";
import { CartContext } from "../CartContext";

export default function DetalleProducto(props){
    let producto = props.producto;   
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(producto.id);

    return(
            <Card id="DetailsCard">
                <img src={props.img} alt="Camiseta" />
                <CardBody>
                    <CardTitle className="d-flex justify-content-center">
                        <h4>{producto.titulo}</h4>
                    </CardTitle>
                    <CardText className="d-flex justify-content-center">
                        {producto.descripcion}
                    </CardText>
                <CardText className="d-flex justify-content-center ">
                        <p><b>Talla: </b> {producto.talla}</p>                         
                    </CardText>
                    <CardText className="d-flex justify-content-center">                       
                        <p><b>Precio: </b> C${producto.precio}</p>                                                                                                        
                    </CardText>
                    <hr/>
                    <div className="d-flex justify-content-center">
                        {productQuantity > 0 ? 
                            <>
                            <Row>
                                <Col>
                                    <span className="m-3">Cantidad: {productQuantity}</span>
                                    <Button 
                                        color="secondary"   
                                        className="ml-1 m-2"
                                        onClick={() => cart.addOneToCart(producto.id)}
                                    >
                                        <FontAwesomeIcon icon={faPlus}/>
                                    </Button> 
                                    <Button 
                                        color="secondary" 
                                        className="m-2"
                                        onClick={() => cart.removeOneFromCart(producto.id)}
                                    >
                                        <FontAwesomeIcon icon={faMinus} />
                                    </Button>
                                    
                                    <div className="d-flex justify-content-center">
                                        <Button 
                                            color="danger"                                             
                                            onClick={() => cart.deleteFromCart(producto.id)}
                                        >
                                            Eliminar del carrito
                                        </Button>
                                    </div>                                                               
                                </Col>            
                            </Row>                                
                            </>
                           :
                           <Button color="primary" onClick={() => cart.addOneToCart(producto.id)}>Añadir al carrito</Button>
                        }                        
                    </div>                    
                </CardBody>                                                         
            </Card>
    );
}
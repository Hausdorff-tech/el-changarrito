import React, { useState, useContext } from "react";
import logo from "../images/elchangarrito.png";
import "./styles/desktop.css";
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button,
    Modal,
    ModalHeader,
    ModalBody    
  } from 'reactstrap';
  import { CartContext } from "../CartContext";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
  import Producto from "./Producto";



export default function DesktopMenu(){  
    const cart = useContext(CartContext);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

    return(
        <>
        <Navbar
            color="dark"
            dark
        >
            <NavbarBrand href="/">
                <img src={logo} alt="El changarrito logo" title="El changarrito logo" id="logo" />                
            </NavbarBrand>                                                 
                <Nav>
                <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret className="mainlink">
                            <span id="producto">Producto</span>
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                <NavLink href="/ropa-mujeres" className="navlink">Ropa para mujer</NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink href="/ropa-hombres" className="navlink">Ropa para hombre</NavLink>
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                               <NavLink href="/encargos" className="navlink">Encargar productos</NavLink> 
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown> 
                    <NavItem> 
                        <NavLink href="/contacto" className="mainlink">Contacto</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/ingresar" className="mainlink">Ingresar</NavLink>
                    </NavItem> 
                    <NavItem className="mt-2 mr-1">
                        <Button color="secondary" onClick={handleShow}>
                            <FontAwesomeIcon icon={faCartShopping} />                                                       
                        </Button>
                    </NavItem>  
                </Nav>                                                            
        </Navbar>
        <Modal isOpen={show} toggle={handleClose} >
            {productsCount > 0 
                ? <>
                    <ModalHeader toggle={handleClose}> Carrito de compras: {productsCount} elementos</ModalHeader>
                    <ModalBody>
                        <p>Artículos en tu carrito:</p>
                        {cart.items.map((currentProduct, idx) => (
                            <Producto key={idx} id={currentProduct.id} quantity={currentProduct.quantity}/>
                        ))}
                        <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>
                        <Button color="success">Comprar</Button>
                    </ModalBody>
                  </>
                :
                <>
                    <ModalHeader toggle={handleClose}>
                        Carrito de compras
                    </ModalHeader>
                    <ModalBody>
                        No hay elementos seleccionados.    
                    </ModalBody>
                </>
            }                
        </Modal>
        </>
    );
}
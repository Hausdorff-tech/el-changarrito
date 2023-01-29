import React, { useState, useContext } from "react";
import logo from "../images/elchangarrito.png";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Button, 
    Modal,
    ModalHeader,
    ModalBody
  } from 'reactstrap';
  import "./styles/mobile.css";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
  import { CartContext } from "../CartContext";
  import Producto from "./Producto";

export default function MobileMenu(){
    const cart = useContext(CartContext);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const[isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

    return(
        <>  
            <Navbar color="dark" dark>
                <NavbarBrand href="/">
                    <img src={logo} alt="El changarrito logo" title="El changarrito logo" id="logo"/>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} id="toggler" />
                <Collapse isOpen={isOpen} navbar >
                    <Nav className="me-auto" navbar id="nav">
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret className="Mainlink">
                                <span id="producto">Producto</span>
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    <NavLink href="/ropa-mujeres" className="Navlink">Ropa para mujer</NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink href="/ropa-hombres" className="Navlink">Ropa para hombre</NavLink>
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                <NavLink href="/encargos" className="Navlink">Encargar productos</NavLink> 
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem> 
                            <NavLink href="/contacto" className="Mainlink">Contacto</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/ingresar" className="Mainlink">Ingresar</NavLink>
                        </NavItem> 
                        <NavItem>
                            <Button color="secondary" onClick={handleShow}>
                                <FontAwesomeIcon icon={faCartShopping}/>
                            </Button>
                        </NavItem>
                        <NavbarText id="slogan">Siempre con tu ropa favorita</NavbarText>  
                    </Nav>                    
                </Collapse>
            </Navbar>

            <Modal isOpen={show} toggle={handleClose}>
                {productsCount > 0 
                    ? <>
                        <ModalHeader toggle={handleClose}>
                            Carrito de compras: {productsCount} elementos
                        </ModalHeader>
                        <ModalBody>
                            <p>Artículos en tu carrito: </p>
                            {cart.items.map((currentProduct, idx) => (
                                <Producto index ={idx} id={currentProduct.id} quantity={currentProduct.quantity} />
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
                            No hay elementos seleccionados
                        </ModalBody>
                    </>
                }
            </Modal>
        </>
    );
}
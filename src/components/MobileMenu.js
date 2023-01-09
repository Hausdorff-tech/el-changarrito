import React, { useState } from "react";
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
  } from 'reactstrap';
  import "./styles/mobile.css";

export default function MobileMenu(){
    const[isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

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
                                    <NavLink href="/producto" className="Navlink">Ropa para mujer</NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink href="/producto" className="Navlink">Ropa para hombre</NavLink>
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
                        <NavbarText id="slogan">Siempre con tu ropa favorita</NavbarText>  
                    </Nav>                    
                </Collapse>
            </Navbar>
        </>
    );
}
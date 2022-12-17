import React from "react";
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
  } from 'reactstrap';



export default function DesktopMenu(){
   /* const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);*/

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
                                <NavLink href="/producto" className="navlink">Ropa para mujer</NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink href="/producto" className="navlink">Ropa para hombre</NavLink>
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                               <NavLink href="/encargos" className="navlink">Encargar ropa</NavLink> 
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown> 
                    <NavItem> 
                        <NavLink href="/contacto" className="mainlink">Contacto</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/ingresar" className="mainlink">Ingresar</NavLink>
                    </NavItem>   
                </Nav>                                                            
        </Navbar>
        </>
    );
}
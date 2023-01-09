import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Product from "./components/Product";
import Details from "./components/Details";
import Contact from "./components/Contact";
import Encargos from "./components/Encargos";
//// Conditional rendering
import Login from "./login/Login";
import Dashboard from "./login/Dashboard";
import Cart from "./login/Cart";
import NewAccount from "./login/NewAccount";


function App() {
  return (
    <BrowserRouter>
      <Routes>        
        <Route path="/" element={<Home />}/>
          <Route path="producto" index element={<Product />}/>          
          <Route path="producto/detalles" element={<Details />}/>
          <Route path="contacto" element={<Contact />}/>  
          <Route path="encargos" element={<Encargos />} />      
          <Route path="ingresar" element={<Login />} />
          <Route path="cuenta" element={<NewAccount />} />
          <Route path=":user" element={<Dashboard />}/>
          <Route path=":user/carrito" element={<Cart />}/>     
      </Routes>
    </BrowserRouter>
  );
}

export default App;

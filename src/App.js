import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./CartContext";
import Inicio from "./components/Inicio";
import RopaMujeres from "./components/RopaMujeres";
import RopaHombres from "./components/RopaHombres";
import DetalleProducto from "./components/DetalleProducto";
import Contact from "./components/Contact";
import Encargos from "./components/Encargos";
//// Conditional rendering
import Login from "./login/Login";
import Dashboard from "./login/Dashboard";
import NuevaCuenta from "./login/NuevaCuenta";
import ReestablecerContraseña from "./login/ReestablecerContraseña";


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>        
          <Route path="/" element={<Inicio />}/>
            <Route path="ropa-mujeres" index element={<RopaMujeres />}/>          
            <Route path="ropa-hombres" element={<RopaHombres />} />
            <Route path="producto/detalles" element={<DetalleProducto />}/>
            <Route path="contacto" element={<Contact />}/>  
            <Route path="encargos" element={<Encargos />} />      
            <Route path="ingresar" element={<Login />} />   
            <Route path="reestablecer-contraseña" element={<ReestablecerContraseña />} />       
            <Route path="cuenta" element={<NuevaCuenta />} />
            <Route path=":user" element={<Dashboard />}/>     
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

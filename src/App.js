import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./CartContext";
import Inicio from "./components/Inicio";
import RopaMujeres from "./components/RopaMujeres";
import RopaHombres from "./components/RopaHombres";
import Contact from "./components/Contact";
import Encargos from "./components/Encargos";
import EnviarCamisa from "./components/EnviarCamisa";



function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>        
          <Route path="/" element={<Inicio />}/>
            <Route path="ropa-mujeres" index element={<RopaMujeres />}/>          
            <Route path="ropa-hombres" element={<RopaHombres />} />
            <Route path="contacto" element={<Contact />}/>  
            <Route path="encargos" element={<Encargos />} />  
            <Route path="enviar" element={<EnviarCamisa />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

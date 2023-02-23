import React from "react";
import { Row, Col } from "reactstrap";
import "./styles/footer.css";

export default function Footer(){
    const date = new Date();

    return(
        <div className="d-flex justify-content-center bg-dark mt-3">
           <Row id="footer" className="mb-3">
             <div className="mt-3 d-flex justify-content-center mb-3">
                Copyright © {date.getFullYear()} El Changarrito
              </div>
              <Col className="justify-content-center align-self-center">                
                    Dirección: Empalme Tipitapa-Masaya 1 cuadra al norte
              </Col>              
              <Col className="justify-content-center align-self-center vl">                    
                        <p id="txt">
                            Tipitapa, Managua
                        </p>                                     
              </Col>
              <Col className="justify-content-center align-self-center">
                <p>
                    Número de teléfono: +505 8467 4967
                </p>                
              </Col>
           </Row>                                           
        </div>
    );
}

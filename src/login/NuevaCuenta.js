import React, { Fragment } from "react";
import Media from "react-media";
import MobileAcc from "./MobileAccount";
import DesktopAcc from "./DesktopAccount";

export default function NuevaCuenta(){
    return(        
       <>   
        <Media queries={{
                small:"(max-width:599px)",
                medium:"(min-width: 600px) and (max-width: 1199px)",
                large: "(min-width: 1200px)"
            }}>
            {matches => (
               <Fragment>
                   {matches.small && <MobileAcc />}
                   {matches.medium && <DesktopAcc />}
                   {matches.large && <DesktopAcc />}
               </Fragment>
            )}
        </Media>
       </>
    );
}
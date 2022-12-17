import React, { Fragment } from "react";
import Media from "react-media";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

export default function Menu(){    
    return(
        <> 
            <Media queries={{
                small:"(max-width:599px)",
                medium:"(min-width: 600px) and (max-width: 1199px)",
                large: "(min-width: 1200px)"
            }}>
                {matches => (
                    <Fragment>
                        {matches.small && <MobileMenu />}
                        {matches.medium && <DesktopMenu />}
                        {matches.large && <DesktopMenu />}
                    </Fragment>
                )}
            </Media>
        </>
    );
}
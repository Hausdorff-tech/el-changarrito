import React, { Fragment } from "react";
import Media from "react-media";
import DesktopLogin from "./DesktopLogin";
import MobileLogin from "./MobileLogin";
import "./loginStyles/login.css";

export default function login(){
    return(
       <>
        <Media queries={{
                small:"(max-width:599px)",
                medium:"(min-width: 600px) and (max-width: 1199px)",
                large: "(min-width: 1200px)"
            }}>
                {matches =>(
                    <Fragment>
                        {matches.small && <MobileLogin />}
                        {matches.medium && <DesktopLogin />}
                        {matches.large && <DesktopLogin />}
                    </Fragment>
                )}
        </Media>
       </>
    );
};
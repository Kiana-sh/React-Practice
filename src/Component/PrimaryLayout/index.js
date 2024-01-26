import { Fragment } from "react";
import Header from "./header";
import "./style.css";
import Footer from "./footer";

export default function PrimaryLayout(props) {
    return (
        <Fragment>
            <Header />
            {props.children}
            <Footer />
        </Fragment>
    )
}
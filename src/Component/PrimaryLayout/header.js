import { Fragment } from "react";

export default function Header() {
    return(
        <Fragment>
            <div className="header">
                <div className="container">
                    <div className="header-inside flex flex-row justify-sb align-i-c">
                        <ul className="h-logo flex flex-row justify-sb gap-20 align-i-c">
                            <li><img src="https://www.plex.tv/wp-content/themes/plex/assets/img/plex-logo.svg" /></li>
                            <input type="text" placeholder="Find Movies & TV"></input>
                        </ul>
                        <ul className="h-menu flex flex-row justify-sb gap-20">
                            <li><a href="#">Free Movies & TV</a></li>
                            <li><a href="#">Live TV</a></li>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Download</a></li>
                            <li><a href="#">Sign In</a></li>
                            <li><a href="#">Sign Up</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
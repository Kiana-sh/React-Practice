import { Fragment } from "react";

export default function Footer() {
    return(
        <Fragment>
            <div className="footer">
                <div className="container">
                    <div className="footer-inside flex flex-row justify-sb ">
                        <div className="f-logo">
                            <img src="https://www.plex.tv/wp-content/themes/plex/assets/img/plex-logo.svg" />
                        </div>
                        <div className="f-menu flex flex-row justify-sb gap-20">
                            <ul>
                                <li><a href="#" className="title">Company</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Our Culture</a></li>
                                <li><a href="#">Giving</a></li>
                                <li><a href="#">Partners</a></li>
                                <li><a href="#">Press Room</a></li>
                                <li><a href="#">Plex Gear</a></li>
                                <li><a href="#">The Plex Box</a></li>
                            </ul>
                            <ul>
                                <li><a href="#" className="title">Plex Pass</a></li>
                                <li><a href="#">Go Premium</a></li>
                                <li><a href="#">Plexamp</a></li>
                                <li><a href="#">Plex Labs</a></li>
                                <li><a href="#">Get Perks</a></li>
                            </ul>
                            <ul>
                                <li><a href="#" className="title">Downloads</a></li>
                                <li><a href="#">Plex Media Server</a></li>
                                <li><a href="#">Apps & Devices</a></li>
                                <li><a href="#">Where to Watch</a></li>
                            </ul>
                            <ul>
                                <li><a href="#" className="title">Support</a></li>
                                <li><a href="#">Finding Helps</a></li>
                                <li><a href="#">Support Library</a></li>
                                <li><a href="#">Community Forums</a></li>
                                <li><a href="#">Billing Questions</a></li>
                                <li><a href="#">Status</a></li>
                                <li><a href="#">Bug Bounty</a></li>
                                <li><a href="#">CordCutter</a></li>
                                <li><a href="#">Get in Touch</a></li>
                            </ul>
                            <ul>
                                <li><a href="#" className="title">Watch Free</a></li>
                                <li><a href="#">TV Channel Finder</a></li>
                                <li><a href="#">What to Watch</a></li>
                                <li><a href="#">What to Watch on Hulu</a></li>
                                <li><a href="#">A24 Collection</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
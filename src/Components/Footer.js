import './Footer.css';
import React from "react";
import { useState } from "react";

function HoverImageF({ defaultSrc, hoverSrc, alt, id }) {
    const [src, setSrc] = useState(defaultSrc);

    return (
        <img
            src={src}
            id={id}
            alt={alt}
            onMouseEnter={() => setSrc(hoverSrc)}
            onMouseLeave={() => setSrc(defaultSrc)}
            style={{ transition: "0.1s ease" }}
        />
    );
}

export function FooterF(props) {
    const {
        facebookImg,
        twitterImg,
        youtubeImg,
        arrowImg,
        logoImg,
        footerText,
        footerLinks,
    } = props;

    return (
        <div className="footer">
            <div className="socialAndArrow">
                <div className="socialImages">
                    <HoverImageF
                        defaultSrc={facebookImg}
                        hoverSrc={facebookImg.replace(".png", "G.png")}
                        id="facebook"
                        alt="Facebook"
                    />
                    <HoverImageF
                        defaultSrc={twitterImg}
                        hoverSrc={twitterImg.replace(".png", "G.png")}
                        id="twitter"
                        alt="Twitter"
                    />
                    <HoverImageF
                        defaultSrc={youtubeImg}
                        hoverSrc={youtubeImg.replace(".png", "G.png")}
                        id="youtube"
                        alt="YouTube"
                    />
                </div>
                <a href="#">
                    <HoverImageF
                        defaultSrc={arrowImg}
                        hoverSrc={arrowImg.replace(".png", "G.png")}
                        alt="Arrow"
                    />
                </a>
            </div>

            <div className="textAndLogo">
                <p className="footerText">{footerText}</p>
                <img src={logoImg} className="footerLogo" alt="Logo" />
            </div>

            <div className="footerLinks">
                {footerLinks.map((link, index) => (
                    <a key={index} href={link.href} className="footerLink">
                        {link.text}
                    </a>
                ))}
            </div>
        </div>
    );
}

export function Footer() {
    return (
        <footer>
            <FooterF
                facebookImg="/images/imagesFooter/facebook.png"
                twitterImg="/images/imagesFooter/twitter.png"
                youtubeImg="/images/imagesFooter/youtube.png"
                arrowImg="images/imagesFooter/arrow.png"
                logoImg="images/imagesFooter/logo.png"
                footerText="© 2025 Valve Corporation. All rights reserved. All trademarks are property of their respective owners in the US and other countries. VAT included in all prices where applicable"
                footerLinks={[
                    { href: "#", text: "Terms of service" },
                    { href: "#", text: "Jobs" },
                    { href: "#", text: "Rules" },
                    { href: "#", text: "Contracts" },
                    { href: "#", text: "Gift cards" },
                    { href: "#", text: "Facebook" },
                    { href: "#", text: "Twitter" }
                ]}
            />
        </footer>
    );
}
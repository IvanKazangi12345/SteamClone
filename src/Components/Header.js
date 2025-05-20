import './Header.css';
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router";


function HoverImageN({ defaultSrc, hoverSrc, alt, to }) {
    const [src, setSrc] = useState(defaultSrc);

    return (
        <Link to={to} className="navElement">
            <img
                src={src}
                alt={alt}
                onMouseEnter={() => setSrc(hoverSrc)}
                onMouseLeave={() => setSrc(defaultSrc)}
                style={{ transition: "0.1s ease" }}
            />
        </Link>
    );
}

export function Navigation(props) {
    const {
        logoImg,
        discoverLink,
        supportLink,
        newsLink,
        searchIcon,
        profileImg,
        wishlistImg,
        cartImg,
        languageImg,
        signInText,
        downloadText,
    } = props;

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 767);
            if (window.innerWidth > 767) {
                setIsOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <div>
            <div className="navBack">
                <nav>
                    <div className="logoWithFirstElements">
                        <div className="logo">
                            <Link to="/main" className="navElement">
                                <img src={logoImg} alt="Logo" />
                            </Link>
                        </div>

                        <div className="aAndInput">
                            {!isMobile && (
                                <>
                                    <div className="firstElements">
                                        <Link to="/main" className="navElement DSN" id="current">
                                            Discover
                                        </Link>
                                        <Link to="/support" className="navElement DSN">
                                            Support
                                        </Link>
                                        <Link to="/news" className="navElement DSN">
                                            News
                                        </Link>
                                    </div>

                                    <div className="searchDiv">
                                        <div id="logoLens">
                                            <img src={searchIcon} alt="Search" />
                                        </div>
                                        <input className="search" type="text" placeholder="Search store" />
                                    </div>
                                </>
                            )}
                        </div>
                    </div>

                    <div className="lastElements">
                        <HoverImageN
                            to="/profile"
                            defaultSrc={profileImg}
                            hoverSrc={profileImg.replace(".png", "G.png")}
                            alt="Profile"
                        />
                        <HoverImageN
                            to="/wishlist"
                            defaultSrc={wishlistImg}
                            hoverSrc={wishlistImg.replace(".png", "G.png")}
                            alt="Wishlist"
                        />
                        <HoverImageN
                            to="/cart"
                            defaultSrc={cartImg}
                            hoverSrc={cartImg.replace(".png", "G.png")}
                            alt="Cart"
                        />
                        <HoverImageN
                            defaultSrc={languageImg}
                            hoverSrc={languageImg.replace(".png", "G.png")}
                            alt="Language"
                        />
                         <Link to="#"  className="navElement">
                            <button id="signIn">{signInText}</button>
                         </Link> 

                        {!isMobile && (
                            <a href="#" className="navElement">
                                <button id="download">{downloadText}</button>
                            </a>
                        )}

                        {isMobile && (
                            <div className="burger" onClick={toggleMenu}>
                                <div className="line" />
                                <div className="line" />
                                <div className="line" />
                            </div>
                        )}
                    </div>
                </nav>

                {isMobile && isOpen && (
                    <div className="burgerMenu">
                        <Link to="/main" className="burgerLink">Discover</Link>
                        <Link to="/support" className="burgerLink">Support</Link>
                        <Link to="/news" className="burgerLink">News</Link>
                        <button id="downloadBurger">{downloadText}</button>
                    </div>
                )}
            </div>

            {isMobile && (
                <div className="searchDivMobile">
                    <div id="logoLens">
                        <img src={searchIcon} alt="Search" />
                    </div>
                    <input className="search" type="text" placeholder="Search store" />
                </div>
            )}
        </div>
    );
}

export function Header() {
    return (
        <header>
            <Navigation
                logoImg="/images/imagesNavigation/Logo.png"
                searchIcon="/images/imagesNavigation/logoLens.png"
                profileImg="/images/imagesNavigation/profile.png"
                wishlistImg="/images/imagesNavigation/wishlist.png"
                cartImg="/images/imagesNavigation/cart.png"
                languageImg="/images/imagesNavigation/languege.png"
                signInText="Sign in"
                downloadText="Download"
            />
        </header>
    );
}
function HoverImageN({ defaultSrc, hoverSrc, alt }) {
    const [src, setSrc] = useState(defaultSrc);

    return (
        <a href="#" className="navElement">
            <img
                src={src}
                alt={alt}
                onMouseEnter={() => setSrc(hoverSrc)}
                onMouseLeave={() => setSrc(defaultSrc)}
                style={{ transition: "0.1s ease" }}
            />
        </a>
    );
}

export function NavigationN(props) {
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
                            <a href="#" className="navElement">
                                <img src={logoImg} alt="Logo" />
                            </a>
                        </div>

                        <div className="aAndInput">
                            {!isMobile && (
                                <>
                                    <div className="firstElements">
                                        <a href={discoverLink} className="navElement DSN" id="current">
                                            Discover
                                        </a>
                                        <a href={supportLink} className="navElement DSN">
                                            Support
                                        </a>
                                        <a href={newsLink} className="navElement DSN">
                                            News
                                        </a>
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
                            defaultSrc={profileImg}
                            hoverSrc={profileImg.replace(".png", "G.png")}
                            alt="Profile"
                        />
                        <HoverImageN
                            defaultSrc={wishlistImg}
                            hoverSrc={wishlistImg.replace(".png", "G.png")}
                            alt="Wishlist"
                        />
                        <HoverImageN
                            defaultSrc={cartImg}
                            hoverSrc={cartImg.replace(".png", "G.png")}
                            alt="Cart"
                        />
                        <HoverImageN
                            defaultSrc={languageImg}
                            hoverSrc={languageImg.replace(".png", "G.png")}
                            alt="Language"
                        />
                        <a href="#" className="navElement">
                            <button id="signIn">{signInText}</button>
                        </a>

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
                        <a href={discoverLink} className="burgerLink">Discover</a>
                        <a href={supportLink} className="burgerLink">Support</a>
                        <a href={newsLink} className="burgerLink">News</a>
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

export function Navigation() {
    <NavigationN
        logoImg="/images/imagesNavigation/Logo.png"
        discoverLink="#"
        supportLink="#"
        newsLink="#"
        searchIcon="/images/imagesNavigation/logoLens.png"
        profileImg="/images/imagesNavigation/profile.png"
        wishlistImg="/images/imagesNavigation/wishlist.png"
        cartImg="/images/imagesNavigation/cart.png"
        languageImg="/images/imagesNavigation/languege.png"
        signInText="Sign in"
        downloadText="Download"
    />
}
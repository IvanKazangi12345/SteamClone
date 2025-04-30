import './Main.css';
import React from "react";
import { useState, useEffect } from "react";

export function ApexLegends({ imageSrc, newSeasonText, freeText, buttonText, images }) {
    return (
        <div className="ApexLegends">
            <img id="ApexOpenPhoto" src={imageSrc} alt="Apex Legends" />
            <div className="ApexLegendsNewSeason">
                <h2>APEX LEGENDS</h2>
                <p>{newSeasonText}</p>
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`Season ${index + 1}`} />
                ))}
                <div id="FreeLM">
                    <p>{freeText}</p>
                    <button className="ApexLegendsButton">{buttonText}</button>
                </div>
            </div>
        </div>
    );
}

export function DiscoverSomethingNew({ items }) {
    return (
        <div id="center">
            <div id="scrollWidth">
                <div className="DiscoverSomethingNew">
                    <h2>Discover Something New</h2>
                    <div className="cards">
                        {items.map((item, index) => (
                            <div className="card" key={index}>
                                <div className="imgAndText">
                                    <img src={item.imageSrc} alt={item.name} />
                                    <p>Base Game</p>
                                </div>
                                <ul>
                                    <li className="name">{item.name}</li>
                                    <li className="price">{item.price}</li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export function Fortnite({ cards }) {
    return (
        <div id="center">
            <div id="scrollWidth">
                <div className="cardsB">
                    {cards.map((card, index) => (
                        <div className="cardB" key={index}>
                            <img src={card.imageSrc} alt={card.title} />
                            <p className="nameOfGame">{card.title}</p>
                            <p className="description">{card.description}</p>
                            <button className="FortniteButton">
                                See In Shop <img src="/images/imagesHome/Vector_1.png" alt="Arrow" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}


export function WinterSaleSpotlight({ title = "Winter Sale Spotlight", cards }) {
    return (
        <div id="center">
            <div id="scrollWidth">
                <div className="WinterSaleSpotlight">
                    <h2>{title}</h2>
                    <div className="cards">
                        {cards.map((game, index) => (
                            <div className="card" key={index}>
                                <div className="imgAndText">
                                    <img src={game.imageSrc} alt={game.name} />
                                    <p>{game.label}</p>
                                </div>
                                <ul>
                                    <li className="name">{game.name}</li>
                                    <div className="cost">
                                        <li className="percentOfSale">{game.discount}</li>
                                        <div className="salePrice">
                                            <li className="sale">{game.originalPrice}</li>
                                            <li className="price">{game.discountedPrice}</li>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}


export function DealsOfTheWeek({ deals }) {
    return (
        <div id="center">
            <div id="scrollWidth">
                <div className="cardsB">
                    {deals.map((deal, index) => (
                        <div className="cardB" key={index}>
                            <img src={deal.imageSrc} alt={deal.name} />
                            <p className="nameOfGame">{deal.name}</p>
                            <div className="cost">
                                <li className="percentOfSale">{deal.discount}</li>
                                <div className="salePrice">
                                    <li className="sale saleM">{deal.originalPrice}</li>
                                    <li className="price priceM">{deal.discountedPrice}</li>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}



export function FreeGames({ title, buttonText, games, giftIconSrc }) {
    return (
        <div id="center">
            <div id="FreeGamesBackground">
                <div className="FreeGames">
                    <div>
                        <div>
                            <img src={giftIconSrc} alt="gift icon" />
                        </div>
                        <p>{title}</p>
                    </div>
                    <button>{buttonText}</button>
                </div>
                <div className="cardsF">
                    {games.map((game, index) => (
                        <div className="cardF" key={index}>
                            <img src={game.imageSrc} alt={game.name} />
                            <p className="nameOfGame FreeName">{game.name}</p>
                            <p className="description" id="FreeDescription">{game.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}


export function VisionStoreMobile({ imageSrc, title, description, buttonText }) {
    return (
        <div className="VisionStoreMobile">
            <img id="StoreOpenPhoto" src={imageSrc} alt="Store visual" />
            <div className="VisionStoreMobileInfo">
                <div>
                    <p>{title}</p>
                    <p>{description}</p>
                </div>
                <button>
                    {buttonText}
                    <img src="/images/imagesHome/Vector_2.png" alt="arrow icon" />
                </button>
            </div>
        </div>
    );
}

function GameSectionMini({ title, games }) {
    return (
        <div className="sectionMini">
            <div className="title">
                <p>{title}</p>
                <div>
                    <img src="/images/imagesHome/Vector_3.png" alt="arrow" />
                </div>
            </div>
            <div className="cardsTopSellers">
                {games.map((game, index) => (
                    <div className="cardT" key={index}>
                        <div className="content">
                            <img src={game.imgSrc} alt={game.name} />
                            <div className="text">
                                <p>{game.name}</p>
                                {game.sale ? (
                                    <div className="costT">
                                        <li className="percentOfSale" id="saleT">{game.sale.discount}</li>
                                        <div className="salePriceT">
                                            <li className="sale saleM">{game.sale.oldPrice}</li>
                                            <li className="price priceM">{game.sale.newPrice}</li>
                                        </div>
                                    </div>
                                ) : (
                                    <p>{game.info}</p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export function TopSellersMostPlayedTopUpcomingWishlisted() {
    return (
        <div id="center">
            <div id="scrollWidthGeneral">
                <div className="general">

                    <GameSectionMini
                        title="Top Sellers"
                        games={[
                            { imgSrc: "/images/imagesHome/MarvelRivals.png", name: "Marvel Rivals", info: "Free" },
                            { imgSrc: "/images/imagesHome/HokaiStarRail.png", name: "Honkai: Star Rail", info: "Free" },
                            {
                                imgSrc: "/images/imagesHome/RedDeadRedemption2.png",
                                name: "Red Dead Redemption 2",
                                sale: {
                                    discount: "-60%",
                                    oldPrice: "UAH 1030",
                                    newPrice: "UAH 515"
                                }
                            },
                            { imgSrc: "/images/imagesHome/InfinityNikki.png", name: "Infinity Nikki", info: "Free" },
                            { imgSrc: "/images/imagesHome/GenshinImpact.png", name: "Genshin Impact", info: "Free" }
                        ]}
                    />
                    <div className="lineW"></div>
                    <GameSectionMini
                        title="Most Played"
                        games={[
                            { imgSrc: "/images/imagesHome/Fortnite.png", name: "Fortnite", info: "Free" },
                            { imgSrc: "/images/imagesHome/RocketLeague.png", name: "Rocket League", info: "Free" },
                            { imgSrc: "/images/imagesHome/WorldWarAftermath.png", name: "World War Aftermath", info: "Free" },
                            { imgSrc: "/images/imagesHome/GrandTheftAutoV.png", name: "Grand Theft Auto V", info: "UAH 735" },
                            { imgSrc: "/images/imagesHome/Valorant_1.png", name: "Valorant", info: "Free" }
                        ]}
                    />
                    <div className="lineW"></div>
                    <GameSectionMini
                        title="Top Upcoming Wishlisted"
                        games={[
                            { imgSrc: "/images/imagesHome/AssasinsCreedShadows.png", name: "Assasins Creed Shadows", info: "UAH 890" },
                            { imgSrc: "/images/imagesHome/MikiRoyale.png", name: "Miki Royale", info: "Out on 3/10/25" },
                            { imgSrc: "/images/imagesHome/33Immortals.png", name: "33 Immortals", info: "Free" },
                            { imgSrc: "/images/imagesHome/Borderlands4.png", name: "Borderlands 4", info: "Free" },
                            { imgSrc: "/images/imagesHome/TheLastOfUsPartIIRemastered.png", name: "The Last of Us™ Part II Remastered", info: "UAH 735" }
                        ]}
                    />
                </div>
            </div>
        </div>
    );
}

export function PopularGames({ games }) {
    return (
        <div id="center">
            <div id="scrollWidth">
                <div className="PopularGames">
                    <h2>Popular Games</h2>
                    <div className="cards">
                        {games.map((game, index) => (
                            <div className="card" key={index}>
                                <div className="imgAndText">
                                    <img src={game.imgSrc} alt={game.name} />
                                    <p>{game.description}</p>
                                </div>
                                <ul>
                                    <li className="name">{game.name}</li>
                                    <li className="price">{game.price}</li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}


export function RecentlyUpdated({ games }) {
    return (
        <div id="center">
            <div id="scrollWidth">
                <div className="RecentlyUpdated">
                    <h2>Recently Updated</h2>
                    <div className="cards">
                        {games.map((game, index) => (
                            <div className="card" key={index}>
                                <div className="imgAndText">
                                    <img src={game.imgSrc} alt={game.name} />
                                    <p>{game.description}</p>
                                </div>
                                <ul>
                                    <li className="name">{game.name}</li>
                                    <li className="price">{game.price}</li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}


export function NowOnTheStore(props) {
    const { products } = props;

    return (
        <div id="center">
            <div id="scrollWidth">
                <div className="NowOnTheStore">
                    <h2>Now On The Store</h2>
                    <div className="cards">
                        {products.map((product, index) => (
                            <div className="card" key={index}>
                                <div className="imgAndText">
                                    <img src={product.imgSrc} alt={product.name} />
                                    <p>{product.description}</p>
                                </div>
                                <ul>
                                    <li className="name">{product.name}</li>
                                    <li className="price">{product.price}</li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

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

export function LastNavigation(props) {
    const {
        previousArrowImg,
        nextArrowImg,
        pageLinks
    } = props;

    return (
        <div className="wrapLastNavigation">
            <div className="LastNavigation">
                <div className="arrow" id="arrowPrevious">
                    <a href="#"><img src={previousArrowImg} alt="Previous" /></a>
                    <a href="#">Previous</a>
                </div>
                <div className="pages">
                    {pageLinks.map((page, index) => (
                        <a key={index} href={page.href}>{page.text}</a>
                    ))}
                </div>
                <div className="arrow" id="arrowNext">
                    <a href="#">Next</a>
                    <a href="#"><img src={nextArrowImg} alt="Next" /></a>
                </div>
            </div>
        </div>
    );
}

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

export function Footer(props) {
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

export function Main() {
    return (
        <div className="body">
            <header>
                <Navigation
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
            </header>
            <main>
                <section><ApexLegends
                    imageSrc="/images/imagesHome/Apex.png"
                    newSeasonText="NEW SEASON"
                    freeText="FREE"
                    buttonText="Learn more"
                    images={[
                        "/images/imagesHome/photo_1.png",
                        "/images/imagesHome/photo_2.png"
                    ]}
                />
                </section>
                <section><DiscoverSomethingNew
                    items={[
                        {
                            imageSrc: "/images/imagesHome/TheEndOfTheSun.png",
                            name: "The End of the Sun",
                            price: "UAH 515"
                        },
                        {
                            imageSrc: "/images/imagesHome/ApexLegends.png",
                            name: "Apex Legends",
                            price: "Free"
                        },
                        {
                            imageSrc: "/images/imagesHome/TheWereCleaner.png",
                            name: "The WereCleaner",
                            price: "UAH 325"
                        },
                        {
                            imageSrc: "/images/imagesHome/TheEmberlands.png",
                            name: "The EmberLands",
                            price: "UAH 355"
                        },
                        {
                            imageSrc: "/images/imagesHome/KingdomComeDeliverance.png",
                            name: "Kingdom Come Deliverance II",
                            price: "UAH 1030"
                        },
                        {
                            imageSrc: "/images/imagesHome/FinalFantasy.png",
                            name: "Final Fantasy VII",
                            price: "UAH 975"
                        }
                    ]}
                />
                </section>
                <section>
                    <Fortnite
                        cards={[
                            {
                                imageSrc: "/images/imagesHome/Fortnite_1.png",
                                title: "Fortnite",
                                description: "Feudal Gotham’s Dark Night, Ninja Knight Batman, and the malicious wildcard Karuta Harley Quinn strike with a vengeance."
                            },
                            {
                                imageSrc: "/images/imagesHome/Fortnite_2.png",
                                title: "Fortnite",
                                description: "BANG! Take your shot with bounty hunters Spike Spiegel and Faye Valentine from COWBOY BEBOP."
                            },
                            {
                                imageSrc: "/images/imagesHome/Fortnite_3.png",
                                title: "Fortnite",
                                description: "My Hero Academia’s League of Villains emerges in Fortnite!"
                            }
                        ]}
                    />
                </section>
                <section>
                    <WinterSaleSpotlight
                        cards={[
                            {
                                imageSrc: "/images/imagesHome/TheEndOfTheSun.png",
                                label: "Base Game",
                                name: "The End of the Sun",
                                discount: "-60%",
                                originalPrice: "UAH 1030",
                                discountedPrice: "UAH 515"
                            },
                            {
                                imageSrc: "/images/imagesHome/RanchSimulator.png",
                                label: "Base Game",
                                name: "Ranch Simulator",
                                discount: "-60%",
                                originalPrice: "UAH 170",
                                discountedPrice: "UAH 70"
                            },
                            {
                                imageSrc: "/images/imagesHome/FARCRY3.png",
                                label: "Base Game",
                                name: "FARCRY 3",
                                discount: "-40%",
                                originalPrice: "UAH 720",
                                discountedPrice: "UAH 515"
                            },
                            {
                                imageSrc: "/images/imagesHome/FARCRY4.png",
                                label: "Base Game",
                                name: "FARCRY 4",
                                discount: "-40%",
                                originalPrice: "UAH 1120",
                                discountedPrice: "UAH 815"
                            },
                            {
                                imageSrc: "/images/imagesHome/FARCRY5.png",
                                label: "Base Game",
                                name: "FARCRY 5",
                                discount: "-50%",
                                originalPrice: "UAH 1620",
                                discountedPrice: "UAH 810"
                            },
                            {
                                imageSrc: "/images/imagesHome/FARCRY6.png",
                                label: "Base Game",
                                name: "FARCRY 6",
                                discount: "-50%",
                                originalPrice: "UAH 2070",
                                discountedPrice: "UAH 1010"
                            }
                        ]}
                    />
                </section>
                <section>
                    <DealsOfTheWeek
                        deals={[
                            {
                                imageSrc: "/images/imagesHome/TeenageMutantNinjaTurtlesSplinteredFate.png",
                                name: "Teenage Mutant Ninja Turtles: Splintered Fate",
                                discount: "-60%",
                                originalPrice: "UAH 1030",
                                discountedPrice: "UAH 515"
                            },
                            {
                                imageSrc: "/images/imagesHome/LegoHorizonAdventures.png",
                                name: "Lego: Horizon Adventures",
                                discount: "-30%",
                                originalPrice: "UAH 930",
                                discountedPrice: "UAH 600"
                            },
                            {
                                imageSrc: "/images/imagesHome/DisneyDreamlightValley.png",
                                name: "Disney Dreamlight Valley",
                                discount: "-60%",
                                originalPrice: "UAH 550",
                                discountedPrice: "UAH 230"
                            }
                        ]}
                    />
                </section>
                <section>
                    <FreeGames
                        title="Free games!"
                        buttonText="View More"
                        giftIconSrc="/images/imagesHome/giftBox.png"
                        games={[
                            {
                                imageSrc: "/images/imagesHome/GarderStory.png",
                                name: "Garden Story",
                                description: "Free Now - Feb 27 at 05:00 PM"
                            },
                            {
                                imageSrc: "/images/imagesHome/MagesOfMystralia.png",
                                name: "MAGES OF MYSTRALIA",
                                description: "Free Now - Feb 27 at 05:00 PM"
                            },
                            {
                                imageSrc: "/images/imagesHome/Them'sFightingHerds.png",
                                name: "Them’s Fighting Herds",
                                description: "Free Soon - Feb 30 at 05:00 PM"
                            }
                        ]}
                    />
                </section>
                <section>
                    <VisionStoreMobile
                        imageSrc="/images/imagesHome/Store.png"
                        title="Vision Store Mobile"
                        description="Feudal Gotham’s Dark Night, Ninja Knight Batman, and the malicious wildcard Karuta Harley Quinn strike with a vengeance."
                        buttonText="Install Mobile"
                    />
                </section>
                <section>
                    <TopSellersMostPlayedTopUpcomingWishlisted></TopSellersMostPlayedTopUpcomingWishlisted>
                </section>
                <section>
                    <PopularGames
                        games={[
                            {
                                imgSrc: "/images/imagesHome/GrandTheftAuto.png",
                                name: "Grand Theft Auto V: Premium Edition",
                                description: "Base Game",
                                price: "UAH 629"
                            },
                            {
                                imgSrc: "/images/imagesHome/Valorant_2.png",
                                name: "VALORANT",
                                description: "Base Game",
                                price: "Free"
                            },
                            {
                                imgSrc: "/images/imagesHome/WitchIt.png",
                                name: "Witch It",
                                description: "Base Game",
                                price: "UAH 369"
                            },
                            {
                                imgSrc: "/images/imagesHome/CrosshairV2.png",
                                name: "Crosshair V2",
                                description: "Base Game",
                                price: "Free"
                            },
                            {
                                imgSrc: "/images/imagesHome/FarmingSimulator22.png",
                                name: "Farming Simulator 22",
                                description: "Base Game",
                                price: "UAH 459"
                            },
                            {
                                imgSrc: "/images/imagesHome/ZenlessZoneZero.png",
                                name: "Zenless Zone Zero",
                                description: "Base Game",
                                price: "Free"
                            }
                        ]}
                    />
                </section>
                <section>
                    <RecentlyUpdated
                        games={[
                            {
                                imgSrc: "/images/imagesHome/BlackMythWukong.png",
                                name: "Black Myth: Wukong",
                                description: "Base Game",
                                price: "UAH 1629"
                            },
                            {
                                imgSrc: "/images/imagesHome/StarTrekOnline.png",
                                name: "Star Trek Online",
                                description: "Base Game",
                                price: "Free"
                            },
                            {
                                imgSrc: "/images/imagesHome/DisneySpeedstorm.png",
                                name: "Disney Speedstorm",
                                description: "Base Game",
                                price: "UAH 369"
                            },
                            {
                                imgSrc: "/images/imagesHome/HonkaiStarRail.png",
                                name: "Honkai: Star Rail",
                                description: "Base Game",
                                price: "Free"
                            },
                            {
                                imgSrc: "/images/imagesHome/Destiny2.png",
                                name: "Destiny 2",
                                description: "Base Game",
                                price: "UAH 459"
                            },
                            {
                                imgSrc: "/images/imagesHome/HonkaiImpact3rd.png",
                                name: "Honkai Impact 3rd",
                                description: "Base Game",
                                price: "Free"
                            }
                        ]}
                    />
                </section>
                <section>
                    <NowOnTheStore
                        products={[
                            {
                                imgSrc: "/images/imagesHome/HellLetLooseDeluxeEdition.png",
                                name: "Hell Let Loose - Deluxe Edition",
                                description: "Base Game",
                                price: "UAH 1629"
                            },
                            {
                                imgSrc: "/images/imagesHome/HellLetLooseUltimateEdition.png",
                                name: "Hell Let Loose - Ultimate Edition",
                                description: "Base Game",
                                price: "UAH 1449"
                            },
                            {
                                imgSrc: "/images/imagesHome/HellLetLoose.png",
                                name: "Hell Let Loose",
                                description: "Base Game",
                                price: "UAH 999"
                            },
                            {
                                imgSrc: "/images/imagesHome/Turnoil.png",
                                name: "Turmoil",
                                description: "Base Game",
                                price: "UAH 239"
                            },
                            {
                                imgSrc: "/images/imagesHome/VampireSurvivors.png",
                                name: "Vampire Survivors",
                                description: "Base Game",
                                price: "UAH 78"
                            },
                            {
                                imgSrc: "/images/imagesHome/DREDGEDigitalDeluxeEdition.png",
                                name: "DREDGE - Digital Deluxe Edition",
                                description: "Base Game",
                                price: "UAH 549"
                            }
                        ]}
                    />
                </section>
                <section>
                    <LastNavigation
                        previousArrowImg="/images/imagesHome/Vector_4.png"
                        nextArrowImg="/images/imagesHome/Vector_3.png"
                        pageLinks={[
                            { href: "#", text: "1" },
                            { href: "#", text: "2" },
                            { href: "#", text: "3" },
                            { href: "#", text: "4" },
                            { href: "#", text: "5" },
                            { href: "#", text: "6" },
                            { href: "#", text: "..." },
                            { href: "#", text: "198" }
                        ]}
                    />
                </section>
            </main>
            <footer>
                <Footer
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
        </div>
    );
}
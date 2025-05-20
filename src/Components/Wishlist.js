import { useState } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import './Wishlist.css';

function WishlistGameCard({ game }) {
    return (
        <div id="wishlistGameDivq">
            <div id="imgTextDivq">
                <img id="imgMyWishlistq" src={game.coverSrc} alt="Game Cover" />
                <div id="baseGameDivq">
                    <p id="baseGamePq">{game.type}</p>
                    <h5>{game.title}</h5>
                    <div id="firstPDivq">
                        <p className="mainPq">All Reviews:</p>
                        <p className="mainGreenPq">{game.reviews}</p>
                    </div>
                    <div id="secondPDivq">
                        <p className="mainPq">Release Date</p>
                        <p className="mainPq">{game.releaseDate}</p>
                    </div>
                    <div id="smallLogoPlatformsq">
                        {game.platforms.map((src, i) => (
                            <img
                                key={i}
                                src={src}
                                alt="Platform logo"
                                id={i === 1 ? "macLogoSmallq" : undefined}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div id="endDivq">
                <p id="smallCostPq">{game.price}</p>
                <div id="thirdPDivq">
                    <p className="mainGreyPq">Remove</p>
                    <button className="mainLeftButtonq">Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

function WishlistHeader({ totalPrice }) {
    return (
        <div id="myWishlistDivq">
            <h1 id="myWishlistH1q">My Wishlist</h1>
            <p id="costPq">UAH {totalPrice}</p>
        </div>
    );
}

function WishlistNotification() {
    return (
        <div id="notificationDivq">
            <div id="greenNotificationDivq">
                <p>!</p>
            </div>
            <div id="mailSwitchDivq">
                <div id="mailNotificationDivq">
                    <img src="/images/imagesWishlist/imgIconMainGreen.png" alt="Notification Icon" />
                    <p id="notificationP">
                        Get notified when your wishlisted games go on sale, or are available for purchase or pre-purchase.
                    </p>
                </div>
                <label className="switch">
                    <input type="checkbox" id="toggleSwitch" />
                    <span className="slider round">
                        <span className="text"></span>
                    </span>
                </label>
            </div>
        </div>
    );
}

function WishlistSort() {
    return (
        <div id="sortSaleStartDivq">
            <div id="sortSaleDivq">
                <p id="sortPq">Sort by:</p>
                <p id="salePq">On Sale</p>
                <img id="arrowDownImgq" src="/images/imagesWishlist/tabler-icon-chevron-right.png" alt="Arrow" />
            </div>
        </div>
    );
}

function WishlistContent({ games }) {
    return (
        <>
            {games.map((game, index) => (
                <WishlistGameCard key={index} game={game} />
            ))}
        </>
    );
}

export function Wishlist() {
    const games = [
        {
            title: "The End of the Sun",
            type: "Base Game",
            reviews: "Mostly Positive",
            releaseDate: "20.05.2025",
            coverSrc: "/images/imagesWishlist/coverPictureGame.png",
            platforms: [
                "/images/imagesWishlist/windowsLogoSmall.png",
                "/images/imagesWishlist/macLogoSmall.png"
            ],
            price: "UAH 0.00"
        }
    ];

    const totalPrice = "0.00";

    return (
        <div id="wrapped">
            <Header />
            <main>
                <div id="wrapwq">
                    <div id="wrappedq">
                        <div id="mainInfWishlistDivq">
                            <WishlistHeader totalPrice={totalPrice} />
                            <WishlistNotification />
                            <WishlistSort />
                            <WishlistContent games={games} />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

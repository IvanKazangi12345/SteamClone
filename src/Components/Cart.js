import { useState } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import './Cart.css';

function GameCard({ game }) {
    return (
        <div id="cartGameDiv">
            <div id="imgTextDiv">
                <img id="imgMyCart" src={game.coverSrc} alt="Game Cover" />
                <div id="baseGameDiv">
                    <p id="baseGameP">{game.type}</p>
                    <h5>{game.title}</h5>
                    <div id="firstPDiv">
                        <p className="mainP">All Reviews:</p>
                        <p className="mainGreenP">{game.reviews}</p>
                    </div>
                    <div id="secondPDiv">
                        <p className="mainP">Release Date</p>
                        <p className="mainP">{game.releaseDate}</p>
                    </div>
                    <div id="smallLogoPlatforms">
                        {game.platforms.map((src, i) => (
                            <img key={i} src={src} alt="Platform logo" className={i === 1 ? "macLogoSmall" : ""} />
                        ))}
                    </div>
                </div>
            </div>
            <div id="endDiv">
                <p id="smallCostP">{game.price}</p>
                <div id="thirdPDiv">
                    <p className="mainGreyP">Remove</p>
                    <p className="mainGreyLeftP">Move to wishlist</p>
                </div>
            </div>
        </div>
    );
}

function CartContent({ games }) {
    return (
        <>
            {games.map((game, index) => (
                <GameCard key={index} game={game} />
            ))}
            <div id="easyLine"></div>
        </>
    );
}

function CartSummary({ total, taxPercent }) {
    return (
        <div id="totalTaxDiv">
            <div id="totalDiv">
                <p id="totalP">Total:</p>
                <p id="UAHP">{total} UAH</p>
            </div>
            <div id="taxDiv">
                <p className="taxprecentP">Tax:</p>
                <p className="taxprecentP">{taxPercent}%</p>
            </div>
            <p id="textTaxP">
                Of their respective owners in the US and other countries. VAT included in all prices where applicable
            </p>
            <button id="checkOutButton">Check Out</button>
        </div>
    );
}

export function Cart() {
    const games = [
        {
            title: "The End of the Sun",
            type: "Base Game",
            reviews: "Mostly Positive",
            releaseDate: "20.05.2025",
            coverSrc: "/images/imagesCart/coverPictureGame.png",
            platforms: [
                "/images/imagesCart/windowsLogoSmall.png",
                "/images/imagesCart/macLogoSmall.png"
            ],
            price: "UAH 0.00"
        }
    ];

    const totalPrice = "0.00";
    const taxPercent = 4;

    return (
        <div id="wrapped">
            <Header></Header>
            <main>
                <div id="wrapwq">
                    <div id="cartContent">
                        <div id="myCartDiv">
                            <h1 id="myCartH1">My Cart</h1>
                            <p id="costP">UAH {totalPrice}</p>
                        </div>
                        <div id="mainInfDiv">
                            <CartContent games={games} />
                            <CartSummary total={totalPrice} taxPercent={taxPercent} />
                        </div>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </div>
    );
}
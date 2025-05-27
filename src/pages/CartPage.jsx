import { useState } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import {CartContent} from "../components/cartComponents/gameCardComponent"
import { CartSummary } from "../components/cartComponents/cartSummaryComponent";
import '../components/cartComponents/Cart.css';

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
            <main className="mainHead">
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
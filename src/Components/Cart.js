import { useState } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import './Cart.css';

export function Cart() {
    return (
        <div id="wrapped">
                <div id="myCartDiv">
                    <h1 id="myCartH1">My Cart</h1>
                    <p id="costP">UAH 0.00</p>
                </div>
                <div id="mainInfDiv">
                    <div id="cartGameDiv">
                        <div id="imgTextDiv">
                            <img id="imgMyCart" src="/imgForMyCartPage/coverPictureGame.png"></img>
                            <div id="baseGameDiv">
                                <p id="baseGameP">Base Game</p>
                                <h5>The End of the Sun</h5>
                                <div id="firstPDiv">
                                    <p class="mainP">All Reviews:</p>
                                    <p class="mainGreenP">Mostly Positive</p>
                                </div>
                                <div id="secondPDiv">
                                    <p class="mainP">Release Date</p>
                                    <p class="mainP">20.05.2025</p>
                                </div>
                                <div id="smallLogoPlatforms">
                                    <img src="/imgForMyCartPage/windowsLogoSmall.png"></img>
                                    <img id="macLogoSmall" src="/imgForMyCartPage/macLogoSmall.png"></img>
                                </div>
                            </div>
                        </div>
                        <div id="endDiv">
                            <p id="smallCostP">UAH 0.00</p>
                            <div id="thirdPDiv">
                                <p class="mainGreyP">Remove</p>
                                <p class="mainGreyLeftP">Move to wishlist</p>
                            </div>
                        </div>
                    </div>

                    <div id="easyLine"></div>

                    <div id="totalTaxDiv">
                        <div id="totalDiv">
                            <p id="totalP">Total:</p>
                            <p id="UAHP">0.00 UAH</p>
                        </div>
                        <div id="taxDiv">
                            <p class="taxprecentP">Tax:</p>
                            <p class="taxprecentP">4%</p>
                        </div>
                        <p id="textTaxP">Of their respective owners in the US and other countries. VAT included in all prices where applicable</p>
                        <button id="checkOutButton">Check Out</button>
                    </div>
                </div>
            </div>
    );
}
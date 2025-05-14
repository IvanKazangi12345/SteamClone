import { useState, props, useEffect } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import './Wishlist.css';

export function Wishlist() {
    return (
        <div id="wrapped">
            <div id="myWishlistDiv">
                <h1 id="myWishlistH1">My Wishlist</h1>
                <p id="costP">UAH 0.00</p>
            </div>
            <div id="mainInfDiv">
                <div id="notificationDiv">
                    <div id="greenNotificationDiv">
                        <p>!</p>
                    </div>
                    <div id="mailSwitchDiv">
                        <div id="mailNotificationDiv">
                            <img src="/imgForMyWishlistPage/imgIconMainGreen.png"></img>
                            <p id="notificationP">Get notified when your wishlisted games go on sale, or are available for purchase or pre-purchase.</p>
                        </div>
                        <label class="switch">
                            <input type="checkbox" id="toggleSwitch"></input>
                            <span class="slider round">
                                <span class="text"></span>
                            </span>
                        </label>
                    </div>
                </div>
                <div id="sortSaleStartDiv">
                    <div id="sortSaleDiv">
                        <p id="sortP">Sort by:</p>
                        <p id="saleP">On Sale</p>
                        <img id="arrowDownImg" src='/imgForSupportPage/tabler-icon-chevron-right.png'></img>
                    </div>
                </div>
                <div id="wishlistGameDiv">
                    <div id="imgTextDiv">
                        <img id="imgMyWishlist" src="/imgForMyCartPage/coverPictureGame.png"></img>
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
                            <button class="mainLeftButton">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



 





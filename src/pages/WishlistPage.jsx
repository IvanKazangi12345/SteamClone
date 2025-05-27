import { useState } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { WishlistHeader } from "../components/WishListComponents/WishlistHeaderComponent";
import { WishlistNotification } from "../components/WishListComponents/WishlistNotificationComponent";
import { WishlistSort } from "../components/WishListComponents/WishlistSortComponent";
import { WishlistContent } from "../components/WishListComponents/WishlistContentComponent";
import '../components/WishListComponents/Wishlist.css'; 

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
            <main className="mainHead">
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

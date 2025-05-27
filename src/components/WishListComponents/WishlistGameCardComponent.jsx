import { Link } from "react-router";
export function WishlistGameCard({ game }) {
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
                     <Link to="/cart" className="fImg"><button className="mainLeftButtonq">Add to Cart</button></Link>
                </div>
            </div>
        </div>
    );
}
import { Link } from "react-router";
export function GameCardOnTheRight() {
    return (
        <div>
            <img id="imgRight" src="/images/imagesFavoriteGame/rightWrapImage.png"></img>
            <p id="pIM">Marvel Rivals is a Super Hero Team-Based PVP Shooter! Assemble an all-star Marvel squad, devise countless strategies by combining powers to form unique Team-Up skills and fight in destructible, ever-changing battlefields across the continually evolving Marvel universe!</p>
            <div className="fTp">
                <p className="tPA">All Reviews</p>
                <p id="gP">Mostly Positive</p>
            </div>
            <div className="fTp">
                <p className="tPA">Release Date</p>
                <p className="tPAW">20.05.2025</p>
            </div>
            <div className="fTp">
                <p className="tPA">Developer</p>
                <p className="tPAW">pixyda,inc.</p>
            </div>
            <div className="fTp" id="mFTP">
                <p className="tPA">Publisher</p>
                <p className="tPAW">pixyda,inc.</p>
            </div>
            <div id="buttonsCW">
                <Link to="/cart"><button className="CWButton" id="c">Add to cart</button></Link>
                <Link to="/wishlist"><button className="CWButton" id="w">Wishlist</button></Link>
            </div>
            <div id="pTextDMVImg">
                <img id="pegImg" src="/images/imagesFavoriteGame/pegiInfo.png"></img>
                <div>
                    <p id="pD">16+</p>
                    <p id="pMV">Mild Violence</p>
                </div>
            </div>
        </div>
    );
}
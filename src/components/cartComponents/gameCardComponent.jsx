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

export function CartContent({ games }) {
    return (
        <>
            {games.map((game, index) => (
                <GameCard key={index} game={game} />
            ))}
            <div id="easyLine"></div>
        </>
    );
}
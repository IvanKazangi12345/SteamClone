import { Link } from "react-router";
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
                         <Link to="/favorite" ><div className="cardF" key={index}>
                            <img className="fImg" src={game.imageSrc} alt={game.name} />
                            <p className="nameOfGame FreeName">{game.name}</p>
                            <p className="description" id="FreeDescription">{game.description}</p>
                        </div></Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

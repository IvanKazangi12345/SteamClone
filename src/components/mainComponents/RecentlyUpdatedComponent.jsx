import { Link } from "react-router";
export function RecentlyUpdated({ games }) {
    return (
        <div id="center">
            <div id="scrollWidth">
                <div className="RecentlyUpdated">
                    <h2>Recently Updated</h2>
                    <div className="cards">
                        {games.map((game, index) => (
                            <div className="card" key={index}>
                                <div className="imgAndText">
                                     <Link to="/favorite" className="fImg"><img src={game.imgSrc} alt={game.name} /></Link>
                                    <p>{game.description}</p>
                                </div>
                                <ul>
                                    <li className="name">{game.name}</li>
                                    <li className="price">{game.price}</li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

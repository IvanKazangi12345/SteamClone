import { Link } from "react-router";
export function WinterSaleSpotlight({ title = "Winter Sale Spotlight", cards }) {
    return (
        <div id="center">
            <div id="scrollWidth">
                <div className="WinterSaleSpotlight">
                    <h2>{title}</h2>
                    <div className="cards">
                        {cards.map((game, index) => (
                            <div className="card" key={index}>
                                <div className="imgAndText">
                                     <Link to="/favorite" className="fImg"><img src={game.imageSrc} alt={game.name} /></Link>
                                    <p>{game.label}</p>
                                </div>
                                <ul>
                                    <li className="name">{game.name}</li>
                                    <div className="cost">
                                        <li className="percentOfSale">{game.discount}</li>
                                        <div className="salePrice">
                                            <li className="sale">{game.originalPrice}</li>
                                            <li className="price">{game.discountedPrice}</li>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

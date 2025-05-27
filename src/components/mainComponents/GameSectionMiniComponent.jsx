import { Link } from "react-router";
export function GameSectionMini({ title, games }) {
    return (
        <div className="sectionMini">
            <div className="title">
                <p>{title}</p>
                <div>
                    <img src="/images/imagesHome/Vector_3.png" alt="arrow" />
                </div>
            </div>
            <div className="cardsTopSellers">
                {games.map((game, index) => (
                     <Link to="/favorite"><div className="cardT" key={index}>
                        <div className="content">
                            <img src={game.imgSrc} alt={game.name} />
                            <div className="text">
                                <p>{game.name}</p>
                                {game.sale ? (
                                    <div className="costT">
                                        <li className="percentOfSale" id="saleT">{game.sale.discount}</li>
                                        <div className="salePriceT">
                                            <li className="sale saleM">{game.sale.oldPrice}</li>
                                            <li className="price priceM">{game.sale.newPrice}</li>
                                        </div>
                                    </div>
                                ) : (
                                    <p>{game.info}</p>
                                )}
                            </div>
                        </div>
                    </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
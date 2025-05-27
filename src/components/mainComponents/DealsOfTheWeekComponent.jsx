import { Link } from "react-router";
export function DealsOfTheWeek({ deals }) {
    return (
        <div id="center">
            <div id="scrollWidth">
                <div className="cardsB">
                    {deals.map((deal, index) => (
                        <div className="cardB" key={index}>
                            <Link to="/favorite" className="dealsImg"><img src={deal.imageSrc} alt={deal.name} /></Link>
                            <p className="nameOfGame">{deal.name}</p>
                            <div className="cost">
                                <li className="percentOfSale">{deal.discount}</li>
                                <div className="salePrice">
                                    <li className="sale saleM">{deal.originalPrice}</li>
                                    <li className="price priceM">{deal.discountedPrice}</li>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}


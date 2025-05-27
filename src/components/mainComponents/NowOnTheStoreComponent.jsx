import { Link } from "react-router";
export function NowOnTheStore(props) {
    const { products } = props;

    return (
        <div id="center">
            <div id="scrollWidth">
                <div className="NowOnTheStore">
                    <h2>Now On The Store</h2>
                    <div className="cards">
                        {products.map((product, index) => (
                            <div className="card" key={index}>
                                <div className="imgAndText">
                                     <Link to="/favorite" className="fImg"><img src={product.imgSrc} alt={product.name} /></Link>
                                   
                                    <p>{product.description}</p>
                                </div>
                                <ul>
                                    <li className="name">{product.name}</li>
                                    <li className="price">{product.price}</li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
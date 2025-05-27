import { Link } from "react-router";
export function ApexLegends({ imageSrc, newSeasonText, freeText, buttonText, images }) {
    return (
        <div className="ApexLegends">
            <img id="ApexOpenPhoto" src={imageSrc} alt="Apex Legends" />
            <div className="ApexLegendsNewSeason">
                <h2>APEX LEGENDS</h2>
                <p>{newSeasonText}</p>
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`Season ${index + 1}`} />
                ))}
                <div id="FreeLM">
                    <p>{freeText}</p>
                   <Link to="/favorite"><button className="ApexLegendsButton">{buttonText}</button></Link>
                </div>
            </div>
        </div>
    );
}
const BigNewsCard = ({
    imageSrc,
    lastDate,
    title,
    newsText,
    link,
}) => {
    return (
        <div className="firstBigNewsCard">
            <img src={imageSrc} />
            <h3 className="dateOfpushNews">{lastDate}</h3>
            <h1 className="cardTitleNews">{title}</h1>
            <div className="textNews-container">
                <p className="textNews">{newsText}</p>
            </div>
            <a href="#" className="newsLink">{link}</a>
        </div>
    );
};

const newsCardsData = [
    {
        imageSrc: './imgForRelevantNewsPage/starWarsBigImgOne.png',
        lastDate: "4 days ago",
        title: "Star Wars: Knights of the Old Republic I and II available for free on the Epic Games Store on mobile",
        newsText: ["Feudal Gotham’s Dark Night, Ninja Knight Batman, and the", "malicious wildcard Karuta Harley Quinn strike with a", "vengeance.  "],
        link: "Read More",
    },
    {
        imageSrc: './imgForRelevantNewsPage/starWarsBigImgTwo.png',
        lastDate: "2 days ago",
        title: "How The Thing, Aliens, and Predator helped shape Killing Floor 3",
        newsText: ["Killing Floor 3 devs talk body horror, storytelling, and finding the balance"],
        link: "Read More",
    },
];

export function MainNews() {
    return (
        <div>
            <section className="sectionForTwoBigNewsCards">
                <div className="titleNewsDiv">
                    <h1 className="titleRelevantNews">Relevant News</h1>
                    <div className="twoBigNewsCard">
                        <div className="firstBigNewsCard">
                            {newsCardsData.slice(0, 1).map((card, idx) => (
                                <div key={idx + 1}>
                                    <BigNewsCard {...card} />
                                </div>
                            ))}
                        </div>
                        <div className="secondBigNewsCard">
                            {newsCardsData.slice(1, 2).map((card, idx) => (
                                <div key={idx + 1}>
                                    <BigNewsCard {...card} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

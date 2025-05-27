import { Link } from "react-router";
const SimpleProgressBar = ({ progress = 50, fillColor = "#606976" }) => {
    const containerStyle = {
        width: "200px",
        height: "17px",
        borderRadius: "9px",
        border: "2px solid #222831",
        backgroundColor: "#222831",
        overflow: "hidden",
    };

    const fillerStyle = {
        height: "100%",
        width: `${progress}%`,
        backgroundColor: fillColor,
        transition: "width 0.5s ease-in-out",
    };

    return (
        <div style={containerStyle}>
            <div style={fillerStyle}></div>
        </div>
    );
};

const GameCard = ({
    imageSrc,
    title,
    achivements = [],
    gameInfos = [],
    completed,
    progress,
}) => {
    const fillColor = progress === 100 ? '#7BC74D' : '#606976';

    return (
        <div className="gameBlock">
            <Link to="/favorite"><img src={imageSrc} alt={title} className="gameWall" /></Link>
            <h1 className="gameName">{title}</h1>
            <div className="forGameInfo">
                <div className="topThreeAchiv">
                    {achivements.map((src, idx) => (
                        <img key={idx} src={src} />
                    ))}
                </div>
                <div className="blockGameTexts">
                    {gameInfos.map((info, idx) => (
                        <p key={idx} className="blockGameInfo">{info}</p>
                    ))}
                </div>
            </div>
            <p className="gameProgres">{completed}{progress}%</p>
            <SimpleProgressBar progress={progress} fillColor={fillColor} />
        </div>
    );
};


const gamesData = [
    {
        imageSrc: '/imgForUserAccountPage/imgForGameCardOne.png',
        title: 'Tiny Rogues',
        achivements: ['/imgForUserAccountPage/achivOneForCardOne.png', '/imgForUserAccountPage/achivTwoForCardOne.png', '/imgForUserAccountPage/achivThreeForCardOne.png'],
        gameInfos: ['53 hours played on record', 'Last played: 3 days ago'],
        completed: "Complted: ",
        progress: 70,
    },
    {
        imageSrc: '/imgForUserAccountPage/imgForGameCardTwo.png',
        title: 'Mordhau',
        achivements: ['/imgForUserAccountPage/achivOneForCardTwo.png', '/imgForUserAccountPage/achivTwoForCardTwo.png', '/imgForUserAccountPage/achivThreeForCardTwo.png'],
        gameInfos: ['73 hours played on record', 'Last played: 7 days ago'],
        completed: "Complted: ",
        progress: 45,
    },
    {
        imageSrc: '/imgForUserAccountPage/imgForGameCardThree.png',
        title: 'The Binding Of Isaac Rebirth',
        achivements: ['/imgForUserAccountPage/achivOneForCardThree.png', '/imgForUserAccountPage/achivTwoForCardThree.png', '/imgForUserAccountPage/achivThreeForCardThree.png'],
        gameInfos: ['90 hours played on record', 'Last played: 15 day ago'],
        completed: "Complted: ",
        progress: 23,
    },
    {
        imageSrc: '/imgForUserAccountPage/imgForGameCardFour.png',
        title: 'Hades',
        achivements: ['/imgForUserAccountPage/achivOneForCardFour.png', '/imgForUserAccountPage/achivTwoForCardFour.png', '/imgForUserAccountPage/achivThreeForCardFour.png'],
        gameInfos: ['20 hours played on record', 'Last played: 6 days ago'],
        completed: "Complted: ",
        progress: 20,
    },
    {
        imageSrc: '/imgForUserAccountPage/imgForGameCardFive.png',
        title: 'Team Fotress 2',
        achivements: ['/imgForUserAccountPage/achivOneForCardFive.png', '/imgForUserAccountPage/achivTwoForCardFive.png', '/imgForUserAccountPage/achivThreeForCardFive.png'],
        gameInfos: ['450 hours played on record ', 'Last played: 9 days ago'],
        completed: "Complted: ",
        progress: 20,
    },
    {
        imageSrc: '/imgForUserAccountPage/imgForGameCardSix.png',
        title: 'Marvel Rivals',
        achivements: ['/imgForUserAccountPage/achivOneForCardSix.png', '/imgForUserAccountPage/achivTwoForCardSix.png', '/imgForUserAccountPage/achivThreeForCardSix.png'],
        gameInfos: ['500 hours played on record', 'Last played: 20 days ago'],
        completed: "Complted: ",
        progress: 100,
    },
];

export function GameCollection() {
    return (
        <>
            <section>
                <h1 className="gameCollectionText">Game collection</h1>
                <div className="gameBlocks">
                    <div className="gameColumn">
                        {gamesData.slice(0, 3).map((game, idx) => (
                            <div key={idx} className="gameBlockMany">
                                <GameCard {...game} />
                            </div>
                        ))}
                    </div>
                    <div className="gameColumn">
                        {gamesData.slice(3, 6).map((game, idx) => (
                            <div key={idx + 3}>
                                <GameCard {...game} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
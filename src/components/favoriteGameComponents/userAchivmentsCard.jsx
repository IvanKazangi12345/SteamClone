import { Link } from "react-router";
const AchivmentsCard = ({
    imgInCard,
    achivementNameText,
    percentProgresText,
}) => {
    return (
        <>
            <div className="card qWe">
                <img className="imgInCard" src={imgInCard} />
                <h3 className="textInCard rwqq">{achivementNameText}</h3>
                <p className="secondTextinCard rtq">{percentProgresText}</p>
            </div>
        </>
    )
}

const AchivmentsData = [
    {
        imgInCard: "./imgForUserAccountPage/cardImgOne.png",
        achivementNameText: "Hard achievement",
        percentProgresText: "Completed by 0.5%",
    },
    {
        imgInCard: "./imgForUserAccountPage/cardImgTwo.png",
        achivementNameText: "First steps",
        percentProgresText: "Completed by 90%",
    },
    {
        imgInCard: "./imgForUserAccountPage/cardImgThree.png",
        achivementNameText: "Going forward",
        percentProgresText: "Completed by 70%",
    },
    {
        imgInCard: "./imgForUserAccountPage/cardImgFour.png",
        achivementNameText: "Collect all the “Bags o...",
        percentProgresText: "Completed by 7%",
    },
    {
        imgInCard: "./imgForUserAccountPage/cardImgFive.png",
        achivementNameText: "Complete your first ba...",
        percentProgresText: "Completed by 60%",
    },
    {
        imgInCard: "./imgForUserAccountPage/cardImgSix.png",
        achivementNameText: "Final boss",
        percentProgresText: "Completed by 10%",
    },
]

export function Achivments() {
    return (
        <>
            <section>
                <div className="userAchivments">
                    <h1 className="achivmentsText">Achievements</h1>
                    <div className="wcards qC">
                        {AchivmentsData.slice(0, 6).map((achiv, idx) => (
                            <div key={idx}>
                                <AchivmentsCard {...achiv} />
                            </div>
                        ))}
                    </div>
                    <Link to="/achievements" className="linkForAchivPage" >Show More <img src='imgForUserAccountPage/showMoreArrowRight.png' className="arrowRightShpwMoreImg" /></Link>
                </div>
            </section>
        </>
    );
}
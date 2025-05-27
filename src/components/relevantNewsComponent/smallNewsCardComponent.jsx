import { useMediaQuery } from 'react-responsive'
import React from "react";

const SmallCards = ({
    imgSrc,
    datePush,
    titleNews,
    textNews,
    newsLink,
}) => {
    return (
        <div className="smallCardNews">
            <img src={imgSrc} className="imgInSmallCard"/>
            <div >
                <h3 className="dateOfpushSmallNews">{datePush}</h3>
                <h1 className="smallCardTitleNews">{titleNews}</h1>
                <div className="smallTextNews-container">
                    <p className="smallTextNews">{textNews}</p>
                </div>
                <a href="#" className="smallNewsLink">{newsLink}</a>
            </div>
        </div>
    );
};

const smallCardsData = [
    {
        imgSrc: './imgForRelevantNewsPage/gameSmallCardImgOne.png',
        datePush: '4 days ago',
        titleNews: 'SMITE 2 beginners guide: Tips for understanding gods, roles, and teamwork',
        textNews: 'Learn how to pick the right god, master roles, and play as a team in this fast-paced MOBA, whether youre new to SMITE or new to the genre.',
        newsLink: 'Read More',
    },
    {
        imgSrc: './imgForRelevantNewsPage/gameSmallCardImgFive.png',
        datePush: '1 days ago',
        titleNews: 'Black Hawk Down returns in Delta Force: a free co-op battle available now',
        textNews: 'Delta Force: Black Hawk Down is out now for free. Relive the brutal battle for survival via Epic Games Store.',
        newsLink: 'Read More',
    },
    {
        imgSrc: './imgForRelevantNewsPage/gameSmallCardImgTwo.png',
        datePush: '20 days ago',
        titleNews: 'Forge your legend in Blades of Fire, coming to Epic Game Store this May',
        textNews: 'Only you can answer the riddle of steel',
        newsLink: 'Read More',
    },
    {
        imgSrc: './imgForRelevantNewsPage/gameSmallCardImgSix.png',
        datePush: '14 days ago',
        titleNews: 'Infinity Nikki daily guide: Fastest ways to earn Bling, Diamonds, and crafting materials',
        textNews: 'Need more Bling, Bubbles, and Diamonds in Infinity Nikki but ran out of quests? No worries! Here are a few simple daily activities you can do to fill up your backpack in no time.',
        newsLink: 'Read More',
    },
    {
        imgSrc: './imgForRelevantNewsPage/gameSmallCardImgThree.png',
        datePush: '4 days ago',
        titleNews: 'Night shift nightmare: The WereCleaner turns office cleaning into a moral dilemma',
        textNews: 'The WereCleaner combines office drudgery with lycanthropic murder. Discover how a USC student’s capstone project became a surprise hit.',
        newsLink: 'Read More',
    },
    {
        imgSrc: './imgForRelevantNewsPage/gameSmallCardImgSeven.png',
        datePush: '6 days ago',
        titleNews: 'Shadowheart and Nathan Drake will host the Future Games Show Spring Showcase on March 20',
        textNews: 'The show will have over 40 titles, including FBC: Firebreak and Clair Obscur: Expedition 33, and more',
        newsLink: 'Read More',
    },
    {
        imgSrc: './imgForRelevantNewsPage/gameSmallCardImgFour.png',
        datePush: '11 days ago',
        titleNews: 'Deity-slaying co-op roguelike 33 Immortals releases on Epic Games Store March 18',
        textNews: 'Learn all about the 33-player co-op slasher that redefines the roguelike genre',
        newsLink: 'Read More',
    },
    {
        imgSrc: './imgForRelevantNewsPage/gameSmallCardImgEight.png',
        datePush: '2 days ago',
        titleNews: 'Killing Floor 3 wants to tick all the modern multiplayer boxes',
        textNews: 'Our impressions from the closed beta of the bold reinvention of the Killing Floor series',
        newsLink: 'Read More',
    },
]

export function SmallNews() {
    const isMobile = useMediaQuery({ maxWidth: 440 });

    const mobileOrder = [0, 5, 2, 3, 6, 7, 2]; 
    const desktopGroups = [
        [0, 1],
        [2, 3],
        [4, 5],
        [6, 7],
    ];

    if (isMobile) {
        return (
            <div>
                <section className="sectionForSmallNewsCards">
                    {mobileOrder.map((index, idx) => (
                        <React.Fragment key={idx}>
                            <SmallCards {...smallCardsData[index]} />
                            <hr className="hr" />
                        </React.Fragment>
                    ))}
                </section>
            </div>
        );
    }

    return (
        <div>
            <section className="sectionForSmallNewsCards">
                {desktopGroups.map((group, groupIdx) => (
                    <React.Fragment key={groupIdx}>
                        <hr className="hr" />
                        <div className="smallCardsBlockTwo">
                            {group.map((index, idx) => (
                                <SmallCards key={idx} {...smallCardsData[index]} />
                            ))}
                        </div>
                    </React.Fragment>
                ))}
            </section>
        </div>
    );
}

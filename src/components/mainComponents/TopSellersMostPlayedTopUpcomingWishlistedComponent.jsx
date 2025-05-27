import { GameSectionMini } from './GameSectionMiniComponent';

export function TopSellersMostPlayedTopUpcomingWishlisted() {
    return (
        <div id="center">
            <div id="scrollWidthGeneral">
                <div className="general">

                    <GameSectionMini
                        title="Top Sellers"
                        games={[
                            { imgSrc: "/images/imagesHome/MarvelRivals.png", name: "Marvel Rivals", info: "Free" },
                            { imgSrc: "/images/imagesHome/HokaiStarRail.png", name: "Honkai: Star Rail", info: "Free" },
                            {
                                imgSrc: "/images/imagesHome/RedDeadRedemption2.png",
                                name: "Red Dead Redemption 2",
                                sale: {
                                    discount: "-60%",
                                    oldPrice: "UAH 1030",
                                    newPrice: "UAH 515"
                                }
                            },
                            { imgSrc: "/images/imagesHome/InfinityNikki.png", name: "Infinity Nikki", info: "Free" },
                            { imgSrc: "/images/imagesHome/GenshinImpact.png", name: "Genshin Impact", info: "Free" }
                        ]}
                    />
                    <div className="lineW"></div>
                    <GameSectionMini
                        title="Most Played"
                        games={[
                            { imgSrc: "/images/imagesHome/Fortnite.png", name: "Fortnite", info: "Free" },
                            { imgSrc: "/images/imagesHome/RocketLeague.png", name: "Rocket League", info: "Free" },
                            { imgSrc: "/images/imagesHome/WorldWarAftermath.png", name: "World War Aftermath", info: "Free" },
                            { imgSrc: "/images/imagesHome/GrandTheftAutoV.png", name: "Grand Theft Auto V", info: "UAH 735" },
                            { imgSrc: "/images/imagesHome/Valorant_1.png", name: "Valorant", info: "Free" }
                        ]}
                    />
                    <div className="lineW"></div>
                    <GameSectionMini
                        title="Top Upcoming Wishlisted"
                        games={[
                            { imgSrc: "/images/imagesHome/AssasinsCreedShadows.png", name: "Assasins Creed Shadows", info: "UAH 890" },
                            { imgSrc: "/images/imagesHome/MikiRoyale.png", name: "Miki Royale", info: "Out on 3/10/25" },
                            { imgSrc: "/images/imagesHome/33Immortals.png", name: "33 Immortals", info: "Free" },
                            { imgSrc: "/images/imagesHome/Borderlands4.png", name: "Borderlands 4", info: "Free" },
                            { imgSrc: "/images/imagesHome/TheLastOfUsPartIIRemastered.png", name: "The Last of Us™ Part II Remastered", info: "UAH 735" }
                        ]}
                    />
                </div>
            </div>
        </div>
    );
}
import '../components/mainComponents/Main.css';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { LastNavigation } from "../components/LastNavigation";
// imports component
import { ApexLegends } from '../components/mainComponents/ApexLegendsComponent';
import { DealsOfTheWeek } from '../components/mainComponents/DealsOfTheWeekComponent';
import { DiscoverSomethingNew } from '../components/mainComponents/DiscoverSomethingNewComponent';
import { Fortnite } from '../components/mainComponents/FortniteComponent';
import { FreeGames } from '../components/mainComponents/FreeGamesComponent';
import { NowOnTheStore } from '../components/mainComponents/NowOnTheStoreComponent';
import { PopularGames } from '../components/mainComponents/PopularGamesComponent';
import { RecentlyUpdated } from '../components/mainComponents/RecentlyUpdatedComponent';
import { TopSellersMostPlayedTopUpcomingWishlisted } from '../components/mainComponents/TopSellersMostPlayedTopUpcomingWishlistedComponent';
import { VisionStoreMobile } from '../components/mainComponents/VisionStoreMobileComponent';
import { WinterSaleSpotlight } from '../components/mainComponents/WinterSaleSpotlightComponent';

export function Main() {
    return (
        <div className="body">
            <Header />
            <main className="mainHead">
                <section>
                    <ApexLegends
                        imageSrc="/images/imagesHome/Apex.png"
                        newSeasonText="NEW SEASON"
                        freeText="FREE"
                        buttonText="Learn more"
                        images={[
                            "/images/imagesHome/photo_1.png",
                            "/images/imagesHome/photo_2.png"
                        ]}
                    />
                </section>
                <section>
                    <DiscoverSomethingNew
                        items={[
                            {
                                imageSrc: "/images/imagesHome/TheEndOfTheSun.png",
                                name: "The End of the Sun",
                                price: "UAH 515"
                            },
                            {
                                imageSrc: "/images/imagesHome/ApexLegends.png",
                                name: "Apex Legends",
                                price: "Free"
                            },
                            {
                                imageSrc: "/images/imagesHome/TheWereCleaner.png",
                                name: "The WereCleaner",
                                price: "UAH 325"
                            },
                            {
                                imageSrc: "/images/imagesHome/TheEmberlands.png",
                                name: "The EmberLands",
                                price: "UAH 355"
                            },
                            {
                                imageSrc: "/images/imagesHome/KingdomComeDeliverance.png",
                                name: "Kingdom Come Deliverance II",
                                price: "UAH 1030"
                            },
                            {
                                imageSrc: "/images/imagesHome/FinalFantasy.png",
                                name: "Final Fantasy VII",
                                price: "UAH 975"
                            }
                        ]}
                    />
                </section>
                <section>
                    <Fortnite
                        cards={[
                            {
                                imageSrc: "/images/imagesHome/Fortnite_1.png",
                                title: "Fortnite",
                                description: "Feudal Gotham’s Dark Night, Ninja Knight Batman, and the malicious wildcard Karuta Harley Quinn strike with a vengeance."
                            },
                            {
                                imageSrc: "/images/imagesHome/Fortnite_2.png",
                                title: "Fortnite",
                                description: "BANG! Take your shot with bounty hunters Spike Spiegel and Faye Valentine from COWBOY BEBOP."
                            },
                            {
                                imageSrc: "/images/imagesHome/Fortnite_3.png",
                                title: "Fortnite",
                                description: "My Hero Academia’s League of Villains emerges in Fortnite!"
                            }
                        ]}
                    />
                </section>
                <section>
                    <WinterSaleSpotlight
                        cards={[
                            {
                                imageSrc: "/images/imagesHome/TheEndOfTheSun.png",
                                label: "Base Game",
                                name: "The End of the Sun",
                                discount: "-60%",
                                originalPrice: "UAH 1030",
                                discountedPrice: "UAH 515"
                            },
                            {
                                imageSrc: "/images/imagesHome/RanchSimulator.png",
                                label: "Base Game",
                                name: "Ranch Simulator",
                                discount: "-60%",
                                originalPrice: "UAH 170",
                                discountedPrice: "UAH 70"
                            },
                            {
                                imageSrc: "/images/imagesHome/FARCRY3.png",
                                label: "Base Game",
                                name: "FARCRY 3",
                                discount: "-40%",
                                originalPrice: "UAH 720",
                                discountedPrice: "UAH 515"
                            },
                            {
                                imageSrc: "/images/imagesHome/FARCRY4.png",
                                label: "Base Game",
                                name: "FARCRY 4",
                                discount: "-40%",
                                originalPrice: "UAH 1120",
                                discountedPrice: "UAH 815"
                            },
                            {
                                imageSrc: "/images/imagesHome/FARCRY5.png",
                                label: "Base Game",
                                name: "FARCRY 5",
                                discount: "-50%",
                                originalPrice: "UAH 1620",
                                discountedPrice: "UAH 810"
                            },
                            {
                                imageSrc: "/images/imagesHome/FARCRY6.png",
                                label: "Base Game",
                                name: "FARCRY 6",
                                discount: "-50%",
                                originalPrice: "UAH 2070",
                                discountedPrice: "UAH 1010"
                            }
                        ]}
                    />
                </section>
                <section>
                    <DealsOfTheWeek
                        deals={[
                            {
                                imageSrc: "/images/imagesHome/TeenageMutantNinjaTurtlesSplinteredFate.png",
                                name: "Teenage Mutant Ninja Turtles: Splintered Fate",
                                discount: "-60%",
                                originalPrice: "UAH 1030",
                                discountedPrice: "UAH 515"
                            },
                            {
                                imageSrc: "/images/imagesHome/LegoHorizonAdventures.png",
                                name: "Lego: Horizon Adventures",
                                discount: "-30%",
                                originalPrice: "UAH 930",
                                discountedPrice: "UAH 600"
                            },
                            {
                                imageSrc: "/images/imagesHome/DisneyDreamlightValley.png",
                                name: "Disney Dreamlight Valley",
                                discount: "-60%",
                                originalPrice: "UAH 550",
                                discountedPrice: "UAH 230"
                            }
                        ]}
                    />
                </section>
                <section>
                    <FreeGames
                        title="Free games!"
                        buttonText="View More"
                        giftIconSrc="/images/imagesHome/giftBox.png"
                        games={[
                            {
                                imageSrc: "/images/imagesHome/GarderStory.png",
                                name: "Garden Story",
                                description: "Free Now - Feb 27 at 05:00 PM"
                            },
                            {
                                imageSrc: "/images/imagesHome/MagesOfMystralia.png",
                                name: "MAGES OF MYSTRALIA",
                                description: "Free Now - Feb 27 at 05:00 PM"
                            },
                            {
                                imageSrc: "/images/imagesHome/Them'sFightingHerds.png",
                                name: "Them’s Fighting Herds",
                                description: "Free Soon - Feb 30 at 05:00 PM"
                            }
                        ]}
                    />
                </section>
                <section>
                    <VisionStoreMobile
                        imageSrc="/images/imagesHome/Store.png"
                        title="Vision Store Mobile"
                        description="Feudal Gotham’s Dark Night, Ninja Knight Batman, and the malicious wildcard Karuta Harley Quinn strike with a vengeance."
                        buttonText="Install Mobile"
                    />
                </section>
                <section>
                    <TopSellersMostPlayedTopUpcomingWishlisted></TopSellersMostPlayedTopUpcomingWishlisted>
                </section>
                <section>
                    <PopularGames
                        games={[
                            {
                                imgSrc: "/images/imagesHome/GrandTheftAuto.png",
                                name: "Grand Theft Auto V: Premium Edition",
                                description: "Base Game",
                                price: "UAH 629"
                            },
                            {
                                imgSrc: "/images/imagesHome/Valorant_2.png",
                                name: "VALORANT",
                                description: "Base Game",
                                price: "Free"
                            },
                            {
                                imgSrc: "/images/imagesHome/WitchIt.png",
                                name: "Witch It",
                                description: "Base Game",
                                price: "UAH 369"
                            },
                            {
                                imgSrc: "/images/imagesHome/CrosshairV2.png",
                                name: "Crosshair V2",
                                description: "Base Game",
                                price: "Free"
                            },
                            {
                                imgSrc: "/images/imagesHome/FarmingSimulator22.png",
                                name: "Farming Simulator 22",
                                description: "Base Game",
                                price: "UAH 459"
                            },
                            {
                                imgSrc: "/images/imagesHome/ZenlessZoneZero.png",
                                name: "Zenless Zone Zero",
                                description: "Base Game",
                                price: "Free"
                            }
                        ]}
                    />
                </section>
                <section>
                    <RecentlyUpdated
                        games={[
                            {
                                imgSrc: "/images/imagesHome/BlackMythWukong.png",
                                name: "Black Myth: Wukong",
                                description: "Base Game",
                                price: "UAH 1629"
                            },
                            {
                                imgSrc: "/images/imagesHome/StarTrekOnline.png",
                                name: "Star Trek Online",
                                description: "Base Game",
                                price: "Free"
                            },
                            {
                                imgSrc: "/images/imagesHome/DisneySpeedstorm.png",
                                name: "Disney Speedstorm",
                                description: "Base Game",
                                price: "UAH 369"
                            },
                            {
                                imgSrc: "/images/imagesHome/HonkaiStarRail.png",
                                name: "Honkai: Star Rail",
                                description: "Base Game",
                                price: "Free"
                            },
                            {
                                imgSrc: "/images/imagesHome/Destiny2.png",
                                name: "Destiny 2",
                                description: "Base Game",
                                price: "UAH 459"
                            },
                            {
                                imgSrc: "/images/imagesHome/HonkaiImpact3rd.png",
                                name: "Honkai Impact 3rd",
                                description: "Base Game",
                                price: "Free"
                            }
                        ]}
                    />
                </section>
                <section>
                    <NowOnTheStore
                        products={[
                            {
                                imgSrc: "/images/imagesHome/HellLetLooseDeluxeEdition.png",
                                name: "Hell Let Loose - Deluxe Edition",
                                description: "Base Game",
                                price: "UAH 1629"
                            },
                            {
                                imgSrc: "/images/imagesHome/HellLetLooseUltimateEdition.png",
                                name: "Hell Let Loose - Ultimate Edition",
                                description: "Base Game",
                                price: "UAH 1449"
                            },
                            {
                                imgSrc: "/images/imagesHome/HellLetLoose.png",
                                name: "Hell Let Loose",
                                description: "Base Game",
                                price: "UAH 999"
                            },
                            {
                                imgSrc: "/images/imagesHome/Turnoil.png",
                                name: "Turmoil",
                                description: "Base Game",
                                price: "UAH 239"
                            },
                            {
                                imgSrc: "/images/imagesHome/VampireSurvivors.png",
                                name: "Vampire Survivors",
                                description: "Base Game",
                                price: "UAH 78"
                            },
                            {
                                imgSrc: "/images/imagesHome/DREDGEDigitalDeluxeEdition.png",
                                name: "DREDGE - Digital Deluxe Edition",
                                description: "Base Game",
                                price: "UAH 549"
                            }
                        ]}
                    />
                </section>
                <section>
                    <LastNavigation></LastNavigation>
                </section>
            </main>
            <Footer />
        </div>
    );
}
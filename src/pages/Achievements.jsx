import '../components/achivmentsComponents/Achievements.css';
import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { LastNavigation } from "../components/LastNavigation";
import { AchievementsCards } from '../components/achivmentsComponents/achievementsCardsComponent';

export function Achievements() {
    const achievementData = [
        {
            title: "Professional newbies",
            description: "Complete the game at the easiest difficulty",
            image: "/images/imagesAchievements/ProfessionalNewbies.png",
            percent: 95,
        },
        {
            title: "The ultimate bug killer",
            description: "Sometimes you just gotta kill em",
            image: "/images/imagesAchievements/NightlySniper.png",
            percent: 93,
        },
        {
            title: "Nightly sniper",
            description: "Kill 10 players in a single night",
            image: "/images/imagesAchievements/StarOfRespect.png",
            percent: 88,
        },
        {
            title: "Star of respect",
            description: "Complete a mission perfectly",
            image: "/images/imagesAchievements/HeadCollector.png",
            percent: 70,
        },
        {
            title: "Head collector",
            description: "Kill every type of enemy",
            image: "/images/imagesAchievements/KABLOOID.png",
            percent: 56,
        },
        {
            title: "KABLOOID",
            description: "Make the biggest bomb possible",
            image: "/images/imagesAchievements/TheUltimateBugKiller.png",
            percent: 50,
        },
        {
            title: "Armor up",
            description: "Upgrade armor to the maximum",
            image: "/images/imagesAchievements/ArmorUp.png",
            percent: 42,
        },
        {
            title: "All done!",
            description: "",
            image: "/images/imagesAchievements/AllDone!.png",
            percent: 34,
        },
        {
            title: "Mine farmer",
            description: "Upgrade armor to the maximum",
            image: "/images/imagesAchievements/MineFarmer.png",
            percent: 20,
        },
        {
            title: "Get down!",
            description: "Help your teammate with a ping",
            image: "/images/imagesAchievements/GetDown!.png",
            percent: 15,
        },
        {
            title: "Freedom, against all odds",
            description: "Defeat the final boss",
            image: "/images/imagesAchievements/FreedomAgainstAllOdds.png",
            percent: 10,
        },
    ];
    return (
        <div className="body">
            <Header />
            <main className="mainHead">
                <section>
                    <div id="wrapping">
                        <AchievementsCards achievements={achievementData} />
                    </div>
                </section>
                <section>
                    <LastNavigation />
                </section>
            </main>
            <Footer />
        </div>
    );
}
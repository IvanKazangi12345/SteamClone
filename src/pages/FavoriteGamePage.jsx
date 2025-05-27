import '../components/favoriteGameComponents/FavoriteGame.css'
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { LastNavigation } from "../components/LastNavigation";
import { PictureSlider } from '../components/favoriteGameComponents/pictureSliderComponent';
import { GameCardOnTheRight } from '../components/favoriteGameComponents/GameCardOnTheRightComponent';
import { AboutThisGame } from '../components/favoriteGameComponents/aboutThisGameComponent';
import { Achivments } from '../components/favoriteGameComponents/userAchivmentsCard';
import { CustomerReviews } from '../components/favoriteGameComponents/customerRewieComponent';
import { SystemRequirements } from '../components/favoriteGameComponents/systemRequirementsComponent';


export function FavoriteGame() {
    return (
        <div className="body">
            <Header />
            <main className="mainHead" id="q">
                <div id="wrappingq">
                    <section>
                        <PictureSlider></PictureSlider>
                    </section>
                    <section>
                        <AboutThisGame></AboutThisGame>
                    </section>
                    <section>
                        <SystemRequirements></SystemRequirements>
                    </section>
                    <section>
                        <Achivments></Achivments>
                    </section>
                    <section>
                        <CustomerReviews
                            title="Customer reviews"
                            score="45k reviews"
                            scoreText="Mostly positive"
                            sortBy="Recent"
                            reviews={[
                                {
                                    username: "user_generic",
                                    date: "November 23",
                                    recommend: true,
                                    comment: "Its a shame this game has gotten the hate it has. Its actually pretty awesome. The combat is repetitive, yes, but so is diablo??? There is an open world aspect that isnt like some stupid ubisoft game, but maybe alittle more like borderlands? Tons of quests, tons of dungeons. loads of loot.",
                                },
                                {
                                    username: "NonGenericUser",
                                    date: "November 25",
                                    recommend: false,
                                    comment: "While definitely better than it was at launch, it still feels far too shallow and repetitive. The combat is fun at first, but you'll be fighting the same enemies in the same environments with unfun modifiers over, and over, and over again.",
                                },
                                {
                                    username: "NonGenericUser",
                                    date: "November 25",
                                    recommend: false,
                                    comment: "Bad game",
                                },
                                {
                                    username: "NonGenericUser",
                                    date: "November 25",
                                    recommend: false,
                                    comment: "---&#123; Graphics &#125;---<br>☐ You forget what reality is<br>☐ Beautiful<br>&nbsp;Good<br>☐ Decent<br>☐ Bad<br>☐ Don‘t look too long at it<br>☐ MS-DOS<br><br>---&#123; Gameplay &#125;---<br>☐ Very good<br> Good...",
                                    showMore: true,
                                },
                                {
                                    username: "user_generic",
                                    date: "November 23",
                                    recommend: true,
                                    comment: "&#62; Watched Starship troopers before hand <br>&#62; Watched Terminator before hand <br>&#62; Watched Battle: Los Angeles before hand <br> &#62; Booted up Helldivers 2 <br> &#62; First game I get absolutely curb stomped by a Bile Titan <br></br>10/10 would play a third game",
                                },
                                {
                                    username: "user_generic",
                                    date: "November 23",
                                    recommend: true,
                                    comment: "really really fun i love the warfare and free campaign",
                                },
                                {
                                    username: "user_generic",
                                    date: "November 23",
                                    recommend: true,
                                    comment: "Great game. Extraction mode is best out there but needs some work on getting rid of cheaters.",
                                },
                            ]}
                        />

                    </section>
                    <section class="LastF" id="wrapLast">
                        <LastNavigation />
                    </section>
                </div>
                <div className="lineW" id="LineQ"></div>
                <div id="rigthWrapping">
                    <GameCardOnTheRight></GameCardOnTheRight>
                </div>
            </main>
            <Footer />
        </div>
    );
}
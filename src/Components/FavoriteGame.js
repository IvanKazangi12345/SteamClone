import './Achievements.css';
import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { LastNavigation } from "./LastNavigation";

export function PictureSlider() {
    return (
        <div>
            <h1>Your favorite new game!</h1>
            <div>
                <img></img>
                <div>
                    <img></img>
                    <img></img>
                    <img></img>
                    <img></img>
                </div>
            </div>
        </div>
    );
}

export function GameCardOnTheRight() {
    return (
        <div>
            <img></img>
            <p></p>
            <div>
                <p></p>
                <p></p>
            </div>
            <div>
                <p></p>
                <p></p>
            </div>
            <div>
                <p></p>
                <p></p>
            </div>
            <div>
                <p></p>
                <p></p>
            </div>
            <div>
                <button></button>
                <button></button>
            </div>
            <div>
                <img></img>
                <div>
                    <p></p>
                    <p></p>
                </div>
            </div>
        </div>
    );
}

export function AboutThisGame() {
    return (
        <div>
            <h2></h2>
            <h3></h3>
            <p></p>
            <img></img>
            <p></p>
        </div>
    );
}

export function SystemRequirements() {
    return (
        <div>
            <h2></h2>
            <div>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
            </div>
            <div>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
            </div>
        </div>
    );
}

export function GameAchievements() {
    return (
        <div>
            {/* Точно такое же у Миши. Надо позаимствовать */}
        </div>
    );
}

export function CustomerReviews() {
    return (
        <div id="customerReviews">
            <h2></h2>
            <div>
                <p></p>
                <p></p>
                <p></p>
            </div>
            <div id="comment">
                <div id="recommend">
                    <img></img>
                    <div>
                        <p></p>
                        <p></p>
                    </div>
                    <p></p>
                </div>
                <div>
                    <p></p>
                    <div id="helpful">
                        <p></p>
                        <img></img>
                        <img></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function FavoriteGame() {
    return (
        <div className="body">
            <Header />
            <main>
                <div id="wrapping">
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
                        <GameAchievements></GameAchievements>
                    </section>
                    <section>
                        <CustomerReviews></CustomerReviews>
                    </section>
                </div>
                <div id="rigthWrapping">
                    <GameCardOnTheRight></GameCardOnTheRight>                    
                </div>
                <section>
                    <LastNavigation />
                </section>
            </main>
            <Footer />
        </div>
    );
}
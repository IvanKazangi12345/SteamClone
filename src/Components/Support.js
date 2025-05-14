import { useState } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import './Support.css';

export function Support() {
    const [open, setOpen] = useState(false);

    return (
        <div id="wrapped">
            <div id="supportFindDiv">
                <h1 id="supportH1">Support</h1>
                <div className="findDiv"><img src="/imgForSupportPage/logoLens.png" className="findLens" /><input className="findInput" type="text" placeholder="Find help" /></div>
            </div>
            <div id="questionsDiv">
                    <div className="answerDiv">
                        <div className="headerDiv">
                            <h4>Game problems</h4>
                            <button className="arrowButton" onClick={() => setOpen(!open)}>
                                <img
                                    src="/imgForSupportPage/tabler-icon-chevron-right.png"
                                    className={`arrow ${open ? "rotated" : ""}`}
                                    alt="toggle" />
                            </button>
                        </div>
                        <div className="pDiv" style={{ maxHeight: open ? "269px" : "0" }}>
                            <p className="extraP" style={{ display: open ? "block" : "none" }}>
                                If you are contacted by Epic Games support, the email will come from the domain @support.epicgames.com, help@acct.epicgames.com or help@accts.epicgames.com emails. Any email with a different domain claiming to be Epic Games Support is not Epic Games Support.
                            </p>
                        </div>
                    </div>
                    <div class="answerDiv">
                        <div className="headerDiv">
                            <h4>Refund</h4>
                            <button class="arrowButton">
                                <img src='/imgForSupportPage/tabler-icon-chevron-right.png' class="arrow"></img>
                            </button>
                        </div>
                    </div>
                    <div class="answerDiv">
                        <div className="headerDiv">
                            <h4>My account</h4>
                            <button class="arrowButton">
                                <img src='/imgForSupportPage/tabler-icon-chevron-right.png' class="arrow"></img>
                            </button>
                        </div>
                    </div>
                    <div class="answerDiv">
                        <div className="headerDiv">
                            <h4>Client</h4>
                            <button class="arrowButton">
                                <img src='/imgForSupportPage/tabler-icon-chevron-right.png' class="arrow"></img>
                            </button>
                        </div>
                    </div>
                    <div class="answerDiv">
                        <div className="headerDiv">
                            <h4>Community problems</h4>
                            <button class="arrowButton">
                                <img src='/imgForSupportPage/tabler-icon-chevron-right.png' class="arrow"></img>
                            </button>
                        </div>
                    </div>
                    <div class="answerDiv">
                        <div className="headerDiv">
                            <h4>Device problems</h4>
                            <button class="arrowButton">
                                <img src='/imgForSupportPage/tabler-icon-chevron-right.png' class="arrow"></img>
                            </button>
                        </div>
                    </div>
                    <div class="answerDiv">
                        <div className="headerDiv">
                            <h4>Gifts</h4>
                            <button class="arrowButton">
                                <img src='/imgForSupportPage/tabler-icon-chevron-right.png' class="arrow"></img>
                            </button>
                        </div>
                    </div>
                    <div class="answerDiv">
                        <div className="headerDiv">
                            <h4>Frequent questions</h4>
                            <button class="arrowButton">
                                <img src='/imgForSupportPage/tabler-icon-chevron-right.png' class="arrow"></img>
                            </button>
                    </div>
                </div>
            </div>

            <div id="pagesDiv">
                <a href="#" id="arrowSmallLeft"><img src='/imgForSupportPage/tabler-icon-chevron-left-small.png'></img></a>
                <a href="#" class="textLinksA">Previous</a>
                <a href="#" class="textLinksAGreen">1</a>
                <a href="#" class="textLinksA">2</a>
                <a href="#" class="textLinksA">3</a>
                <a href="#" class="textLinksA-adaptive">4</a>
                <a href="#" class="textLinksA-adaptive">5</a>
                <a href="#" class="textLinksA-adaptive">6</a>
                <a href="#" class="textLinksA">...</a>
                <a href="#" class="textLinksA">19</a>
                <a href="#" class="textLinksA">Next</a>
                <a href="#" id="arrowSmallRight"><img id="arrowSmallRight" src='/imgForSupportPage/tabler-icon-chevron-right.png'></img></a>
            </div>

            <div id="contactDiv">
                <h3>Have any other questions?</h3>
                <button id="contactButton">Contact us on our email!</button>
            </div>
        </div>
    );
}


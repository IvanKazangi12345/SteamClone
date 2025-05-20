import { useState } from "react";
import { LastNavigation } from "./LastNavigation";
import { Footer } from "./Footer";
import { Header } from "./Header";
import './Support.css';

function SupportContent({ questions }) {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <div id="questionsDiv">
            {questions.map((q, index) => (
                <QuestionItem
                    key={index}
                    title={q.title}
                    content={q.content}
                    isOpen={openIndex === index}
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
            ))}
        </div>
    );
}

function QuestionItem({ title, content, isOpen, onClick }) {
        const [open, setOpen] = useState(false);
    return (
        <div className="answerDiv">
            <div className="headerDiv">
                <h4>{title}</h4>
                <button className="arrowButton" onClick={() => setOpen(!open)}>
                    <img
                        src="/images/imagesSupport/tabler-icon-chevron-right.png"
                        className={`arrow ${open ? "rotated" : ""}`}
                        alt="toggle"
                    />
                </button>
            </div>
            {content && (
                <div className="pDiv" style={{ maxHeight: open ? "269px" : "0" }}>
                    <p className="extraP" style={{ display: open ? "block" : "none" }}>
                        {content}
                    </p>
                </div>
            )}
        </div>
    );
}

function SupportContact() {
    return (
        <div id="contactDiv">
            <h3>Have any other questions?</h3>
            <button id="contactButton">Contact us on our email!</button>
        </div>
    );
}

export function Support() {
    const questions = [
        {
            title: "Game problems",
            content: "If you are contacted by Epic Games support, the email will come from the domain @support.epicgames.com, help@acct.epicgames.com or help@accts.epicgames.com emails. Any email with a different domain claiming to be Epic Games Support is not Epic Games Support."
        },
        { title: "Refund" },
        { title: "My account" },
        { title: "Client" },
        { title: "Community problems" },
        { title: "Device problems" },
        { title: "Gifts" },
        { title: "Frequent questions" }
    ];

    return (
        <div id="wrapped">
            <Header></Header>
            <main>
                <div id="supportFindDiv">
                    <h1 id="supportH1">Support</h1>
                    <div className="findDiv">
                        <img src="/images/imagesSupport/logoLens.png" className="findLens" alt="Search" />
                        <input className="findInput" type="text" placeholder="Find help" />
                    </div>
                </div>
                <SupportContent questions={questions} />
                <LastNavigation id="supportLastNav" />
                <SupportContact />
            </main>
            <Footer></Footer>
        </div>
    );
}

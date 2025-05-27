import { LastNavigation } from "../components/LastNavigation";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import '../components/SupportComponents/Support.css';
import { SupportContact } from "../components/SupportComponents/SupportContactComponent.jsx";
import { SupportContent } from "../components/SupportComponents/SupportContentComponent.jsx";


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
            <main className="mainHead">
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

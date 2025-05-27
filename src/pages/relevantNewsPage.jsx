import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import {LastNavigation} from "../components/LastNavigation";
import '../components/relevantNewsComponent/relevantNews.css';
import { MainNews } from "../components/relevantNewsComponent/bigNewsCardComponent.jsx";
import { SmallNews } from "../components/relevantNewsComponent/smallNewsCardComponent.jsx";

export function RelevantNewsApp() {
    return (
        <div id="wrapperWE">
            <Header></Header>
            <div className="allPage">
                <main className="mainNews">
                    <MainNews></MainNews>
                    <SmallNews></SmallNews>
                    <LastNavigation></LastNavigation>
                </main>
            </div>
            <Footer></Footer>
        </div>
    )
}
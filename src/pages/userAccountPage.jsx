import '../components/accountPageComponents/userAccountPage.css'; 
import { UserInfo } from '../components/accountPageComponents/userInfo';
import { Achivments } from '../components/accountPageComponents/userAchivmentsCard';
import { GameCollection } from '../components/accountPageComponents/userGameCard';
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { LastNavigation } from "../components/LastNavigation";


export function UserAccPage() {
    return (
        <div>
            <Header></Header>
            <main className="mainLogin">
                <div className="wrapper">
                    <UserInfo></UserInfo>
                    <Achivments></Achivments>
                    <GameCollection></GameCollection>
                    <LastNavigation></LastNavigation>
                </div>
            </main>
            <Footer></Footer>
        </div>
    );
}
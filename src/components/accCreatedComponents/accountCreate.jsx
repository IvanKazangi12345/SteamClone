import { Link } from "react-router";
import './accountCreate.css';

const YourAccCreated = ({
    backgroundImage,
    textAccCreated,
    textEmailSent,
    linkForMainPage,
    linkForMainPageText,
}) => {
    return (
        <main className='createdMain'>
            <Link to="/main" className='backEmbLoginPage' id="two"><img src={backgroundImage} /></Link>
            <div className='createdDiv'>
                <div className='mainCreateDiv'>
                    <div>
                        <h1 className='accCreatedH1'>{textAccCreated}</h1>
                        <p className='emailSentText'>{textEmailSent}</p>
                    </div>
                    <Link to="/login" className='toLoginLink'><button className='createdSignBtn'><p className='createdSignTextInBtn'>{linkForMainPageText}</p></button></Link>
                </div>
            </div>
        </main>
    )
}

const YourAccCreatedData = [
    {
        backgroundImage: './imgForLoginPage/backEmbLoginPage.png',
        textAccCreated: 'Account created!',
        textEmailSent: 'An email has been sent to you.',
        linkForMainPage: '/',
        linkForMainPageText: 'LOG IN',
    },
]


export function Created() {
    return (
        <>
            {YourAccCreatedData.map((crtd, idx) => (
                <div key={idx}>
                    <YourAccCreated {...crtd} />
                </div>
            ))}
        </>
    );
}

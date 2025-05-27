import { Link } from "react-router";
const handleFocus = (e) => {
    e.target.classList.add('error');
    e.target.disabled = true;

    const errorText = e.target.previousElementSibling.querySelector('.regErrorText');
    if (errorText) {
        errorText.classList.remove('hidden');
    }
};

const RegInputs = ({
    regText,
    regErrorText,
}) => {
    return (
        <div className='regInputwrapper'>
            <div className='regInputHeader'>
                <h3 className='regText'>{regText}</h3>
                <span className='regErrorText hidden'>{regErrorText}</span>
            </div>
            <input className='regInput' onFocus={handleFocus}></input>
        </div>
    )
}

const RegInputsData = [
    {
        regText: 'PUT YOUR EMAIL HERE',
        regErrorText: '(an error was made)',
    },
    {
        regText: 'CREATE A PASSWORD',
    },
]

export const CreateAcc = ({
    backgroundImage,
    mainCreatetext,
    checkAgeText,
    regHumanText,
    captchaImage,
    regSignText,
}) => {
    return (
        <main className='regestrationMain'>
            <Link to="/main" className='backEmbLoginPage one' > <img src={backgroundImage} /></Link>
            <div className='mainCreatePage'>
                <h1 className='mainCreateText'>{mainCreatetext}</h1>
                <div className='regValidation'>
                    <div className='regInputs'>
                        {RegInputsData.map((regIn, idx) => (
                            <div key={idx}>
                                <RegInputs {...regIn} />
                            </div>
                        ))}
                    </div>
                    <div className='regCheckAgeDiv'>
                        <label className='regCheckAgeLabel'>
                            <input type='checkbox' className='regCheckAge' />
                            <span className='customCheckMark'></span>
                        </label>
                        <p className='checkAgeText'>{checkAgeText}</p>
                    </div>
                    <div className='captchaDiv'>
                        <div className='regHumanDiv'>
                            <input type='checkbox' className='regHumanInput' />
                            <p className='regHumanText'>{regHumanText}</p>
                        </div>
                        <img src={captchaImage} />
                    </div>
                    <Link to='/access'><button className='regSignBtn'><p className='regSignTextInBtn'>{regSignText}</p></button></Link>
                </div>
            </div>
        </main>
    )
}

export const CreateaccData = [
    {
        backgroundImage: './imgForLoginPage/backEmbLoginPage.png',
        mainCreatetext: 'Create an account',
        checkAgeText: 'I am 13 years of age or older and agree to the terms of the Steam Subscriber Agreement and the Valve Privacy Policy.',
        regHumanText: 'I am human',
        captchaImage: './imgForLoginPage/hCaptchImg.png',
        regSignText: 'SIGN IN',
    }
]



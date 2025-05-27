import { useMediaQuery } from 'react-responsive'

const UserInfoMob = ({
    imageUserAvatar,
    userLvlText,
    userLvlSpan,
    userNickText,
    imageBtnAdd,
    imageBtnBlock,
    gamesNumText,
    numOfgames,
    achivNumText,
    numOfAchiv,
}) => {
    return (
        <>
            <section>
                <div className="userInfo">
                    <div className="levelAvaNick">
                        <img src={imageUserAvatar} className="userAvatarMainAcc" />
                        <div>
                            <h3 className="userLevelText">{userLvlText} <span id="levelNumber">{userLvlSpan}</span></h3>
                            <h1 className="userNickText">{userNickText}</h1>
                        </div>
                        <div className="twoBattonInfo">
                            <a><button className="addFriendBtn"><img src={imageBtnAdd} /></button></a>
                            <a><button className="banBtn"><img src={imageBtnBlock} /></button></a>
                        </div>
                    </div>
                    <div id="gText">
                        <div>
                            <h3 className="games">{gamesNumText}</h3>
                            <h1 className="numOfGames">{numOfgames}</h1>
                        </div>
                        <div className="achivDivInInfo">
                            <h3 className="achivments">{achivNumText}</h3>
                            <h1 className="numOfAchivments">{numOfAchiv}</h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const UserInfoDes = ({
    imageUserAvatar,
    userLvlText,
    userLvlSpan,
    userNickText,
    imageBtnAdd,
    imageBtnBlock,
    gamesNumText,
    numOfgames,
    achivNumText,
    numOfAchiv,
}) => {
    return (
        <>
            <section>
                <div className="userInfo">
                    <div className="levelAvaNick">
                        <img src={imageUserAvatar} className="userAvatarMainAcc" />
                        <div>
                            <h3 className="userLevelText">{userLvlText}<span id="levelNumber">{userLvlSpan}</span></h3>
                            <h1 className="userNickText">{userNickText}</h1>
                        </div>
                    </div>
                    <div className="textAndBtnsGames">
                        <div className="twoBattonInfo">
                            <a><button className="addFriendBtn"><img src={imageBtnAdd} /></button></a>
                            <a><button className="banBtn"><img src={imageBtnBlock} /></button></a>
                        </div>
                        <div id="gText">
                            <div>
                                <h3 className="games">{gamesNumText}</h3>
                                <h1 className="numOfGames">{numOfgames}</h1>
                            </div>
                            <div className="achivDivInInfo">
                                <h3 className="achivments">{achivNumText}</h3>
                                <h1 className="numOfAchivments">{numOfAchiv}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const UserInfoData = [
    {
        imageUserAvatar: '/imgForUserAccountPage/userAvatar.png',
        userLvlText: 'Level',
        userLvlSpan: '18',
        userNickText: 'Wertiks',
        imageBtnAdd: './imgForUserAccountPage/addFriendEmb.png',
        imageBtnBlock: './imgForUserAccountPage/banEmb.png',
        gamesNumText: 'Games',
        numOfgames: '50',
        achivNumText: 'Achivments',
        numOfAchiv: '304',
    },
]

export function UserInfo() {
    const isMobile = useMediaQuery({ maxWidth: 440 })

    if (isMobile) {
        return (
            <>
                {UserInfoData.map((usr, idx) => (
                    <div key={idx}>
                        <UserInfoMob {...usr} />
                    </div>
                ))}
            </>
        )
    }

    return (
        <>
            {UserInfoData.map((usr, idx) => (
                <div key={idx}>
                    <UserInfoDes {...usr} />
                </div>
            ))}
        </>
    )
}

export function AchievementCard({ title, description, image, percent }) {

    return (
        <div className="cardAchievements">
            <img className="cardAchievementsImg" src={image} alt={title} />
            <div id="textAndProcentAchievements" style={{ background: `linear-gradient(90deg, #393E46 ${percent}%, #222831 ${percent}%, #222831 100%)` }}>
                <div id="textAchievements">
                    <p>{title}</p>
                    <p>{description}</p>
                </div>
                <p>{percent}%</p>
            </div>
        </div>
    );
}

export function AchievementsCards({ achievements }) {
    return (
        <div id="backAchievements">
            <div id="headAchievements">
                <h1>Achievements</h1>
                <p>Amount of achievements: {achievements.length}</p>
            </div>
            {achievements.map((achieve, index) => (
                <AchievementCard
                    key={index}
                    title={achieve.title}
                    description={achieve.description}
                    image={achieve.image}
                    percent={achieve.percent}
                />
            ))}
        </div>
    );
}

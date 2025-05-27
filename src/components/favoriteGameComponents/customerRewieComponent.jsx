export function CustomerReviews({ title, score, scoreText, sortBy, reviews }) {
    return (
        <div id="customerReviews">
            <div id="YD">
                <h2 id="textAb" className="rewr">{title}</h2>
                <div>
                    <h3 id="pRS">Review score:</h3>
                    <div id="mR">
                        <p id="textMSP">{scoreText}</p>
                        <p id="textRP">({score})</p>
                    </div>
                    <div id="PPIMG">
                        <p id="pSB">Sort by:</p>
                        <p id="pRT">{sortBy}</p>
                        <img id="imgAD" src="/images/imagesFavoriteGame/arrowDownWhite.png" alt="sort icon" />
                    </div>
                </div>
            </div>
            <div id="comments">
                {["left", "right"].map((side) => (
                    <div id={`${side}Com`} key={side}>
                        {reviews
                            .filter((_, i) => (side === "left" ? i % 2 === 0 : i % 2 !== 0))
                            .map((review, index) => (
                                <div id="comment" key={index}>
                                    <div id="recommend">
                                        <img id="likeImg" src={review.recommend ? "/images/imagesFavoriteGame/like.png" : "/images/imagesFavoriteGame/dislike.png"} />
                                        <div id="cT">
                                            <div id="rT">
                                                <p>@{review.username}</p>
                                                <p>Posted on: {review.date}</p>
                                            </div>
                                            <p id={review.recommend ? undefined : "dRec"}>
                                                {review.recommend
                                                    ? "This user recommends this game"
                                                    : "This user doesn’t recommend this game"}
                                            </p>
                                        </div>
                                    </div>
                                    <div id="textComment">
                                        <p className="textCommentP" dangerouslySetInnerHTML={{ __html: review.comment }}></p>
                                        {review.showMore && (
                                            <div id="showM">
                                                <p>Show more</p>
                                                <img src="/images/imagesFavoriteGame/arrowDownWhite.png" />
                                            </div>
                                        )}
                                        <div id="helpful">
                                            <p id="pWRH">Was review helpful?</p>
                                            <img src="/images/imagesFavoriteGame/arrowUp.png" />
                                            <img src="/images/imagesFavoriteGame/arrowDown.png" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

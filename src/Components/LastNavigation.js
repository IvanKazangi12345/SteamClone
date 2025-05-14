import React from "react";

export function LastNavigationL(props) {
    const {
        previousArrowImg,
        nextArrowImg,
        pageLinks
    } = props;

    return (
        <div className="wrapLastNavigation">
            <div className="LastNavigation">
                <div className="arrow" id="arrowPrevious">
                    <a href="#"><img src={previousArrowImg} alt="Previous" /></a>
                    <a href="#">Previous</a>
                </div>
                <div className="pages">
                    {pageLinks.map((page, index) => (
                        <a key={index} href={page.href}>{page.text}</a>
                    ))}
                </div>
                <div className="arrow" id="arrowNext">
                    <a href="#">Next</a>
                    <a href="#"><img src={nextArrowImg} alt="Next" /></a>
                </div>
            </div>
        </div>
    );
}

export function LastNavigation() {
    return (
        <LastNavigationL
        previousArrowImg="/images/imagesHome/Vector_4.png"
        nextArrowImg="/images/imagesHome/Vector_3.png"
        pageLinks={[
            { href: "#", text: "1" },
            { href: "#", text: "2" },
            { href: "#", text: "3" },
            { href: "#", text: "4" },
            { href: "#", text: "5" },
            { href: "#", text: "6" },
            { href: "#", text: "..." },
            { href: "#", text: "198" }
        ]}
    />
    );
}
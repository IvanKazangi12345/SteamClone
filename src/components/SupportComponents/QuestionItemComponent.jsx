import { useState } from "react";

export function QuestionItem({ title, content, isOpen, onClick }) {
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

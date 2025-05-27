import { QuestionItem } from "./QuestionItemComponent";
import { useState } from "react";

export function SupportContent({ questions }) {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <div id="questionsDiv">
            {questions.map((q, index) => (
                <QuestionItem
                    key={index}
                    title={q.title}
                    content={q.content}
                    isOpen={openIndex === index}
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
            ))}
        </div>
    );
}

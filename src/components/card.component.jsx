import { useState, useEffect } from "react";

const Card = ({ category }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [questions, setQuestions] = useState(category);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleBtn = (action) => {
    if (action === "Next") {
      nextHandler();
    } else if (action === "Answer") {
      setShowAnswer(true);
    }
  };

  const nextHandler = () => {
    setShowAnswer(false);
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      if (nextIndex >= questions.length) {
        // Reshuffle and restart when reaching the end
        const reshuffledQuestions = shuffleArray([...category]);
        setQuestions(reshuffledQuestions);
        return 0; // Reset to the beginning
      }
      return nextIndex;
    });
  };

  useEffect(() => {
    const shuffledQuestions = shuffleArray([...category]);
    setQuestions(shuffledQuestions);
  }, [category]);

  if (questions.length === 0) {
    return <div>Loading questions...</div>;
  }

  return (
    <div className="card centerCol">
      <div className="centerCol">
        <p className="question">{questions[currentIndex].question}</p>

        <div
          className={`${showAnswer ? "unhide" : ""}  answerContainer centerCol`}
        >
          <p>{questions[currentIndex].answer}</p>
        </div>

        <button onClick={() => handleBtn(showAnswer ? "Next" : "Answer")}>
          {`${showAnswer ? "Next" : "Answer"}`}
        </button>
      </div>
    </div>
  );
};

export default Card;

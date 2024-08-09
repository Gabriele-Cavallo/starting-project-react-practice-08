import { useState, useCallback } from "react";
import QUESTIONS from '../questions.js';
import quizComplete from '../assets/quiz-complete.png';
import Question from './Question.jsx';

export default function Quiz() {
    const [ userAnswers, setUsersAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer){
        setUsersAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer];
        });
    }, []);

    const handlesSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer])

    if(quizIsComplete){
        return <div id="summary">
            <img src={quizComplete} alt="Quiz Complete" />
            <h2>Quiz Completed!</h2>
        </div>
    }
    
    return (
        <div id="quiz">
           <Question 
            key={activeQuestionIndex}
            index={activeQuestionIndex}
            onSelectAnswer={handleSelectAnswer} 
            onSkipAnswer={handlesSkipAnswer}
            />
        </div>

    )
}
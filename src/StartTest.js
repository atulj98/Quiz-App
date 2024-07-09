import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { QUESTIONS_BY_SUBJECT } from './Questions';
import './StartTest.css';

const StartTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const currentSubject = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo')).subject
    : 'Maths';

  const questions = QUESTIONS_BY_SUBJECT[currentSubject];

  // Function to handle next question and score calculation
  const handleNextQuestion = () => {
    // Calculate score logic based on correct/incorrect answers
    const correctAnswerIndex = questions[currentQuestion].correctIndex;
    if (selectedOption === questions[currentQuestion].options[correctAnswerIndex]) {
      setScore(score + 2); // +2 points for correct answer
    } else {
      setScore(score - 1); // -1 point for incorrect answer
    }

    // Move to the next question or navigate to Greeting page after the last question
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate('/greeting', { state: { score, totalQuestions: questions.length } });
    }
  };

  return (
    <div className="quiz-container">
      <h3>{questions[currentQuestion].questionText}</h3>
      {
      <div>
        {questions[currentQuestion].options.map((option, index) => (
          <div key={index}>
            <input
              type="radio"
              id={`option${index}`}
              name={`question${currentQuestion}`}
              value={option}
              checked={selectedOption === option}
              onChange={() => setSelectedOption(option)}
            />
            <label htmlFor={`option${index}`}>{option}</label>
          </div>
        ))}
      </div>
      }
      <button onClick={handleNextQuestion}>Next</button>
    </div>
  );
};

export default StartTest;
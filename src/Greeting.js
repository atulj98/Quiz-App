import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Greeting = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Extract score and totalQuestions from location.state
  const { score, totalQuestions } = location.state || {};

  useEffect(() => {
    // Automatically redirect to the home page after 5 seconds
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);

    // Clean up timer on component unmount
    return () => clearTimeout(timer);
  }, [navigate]);

  const calculateStatus = () => {
    if (!score || !totalQuestions) return 'Unknown'; // Handle cases where score or totalQuestions are undefined
    const percentage = (score / totalQuestions) * 100;
    return percentage >= 60 ? 'Pass' : 'Fail';
  };

  return (
    <div className="greeting-container">
      <h2>Hey testing user,</h2>
      {score !== undefined && totalQuestions !== undefined && (
        <>
          <p>You have scored: {score} / {totalQuestions * 2}</p>
          <p>Status: {calculateStatus()}</p>
        </>
      )}
      <Link to="/" className="btn">
      <button> 
      Return Home 
      </button>
      </Link>
    </div>
  );
};

export default Greeting;

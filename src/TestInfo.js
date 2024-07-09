import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TestInfo.css';

const TestInfo = () => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !subject) {
      setError('Both fields are required.');
      return;
    }
    // Store user info in localStorage (optional)
    localStorage.setItem('userInfo', JSON.stringify({ name, subject }));

    // Navigate to quiz page
    navigate('/quiz');
  };

  return (
    <div>
      <h2>Quiz App</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Enter your name'
          />
        </div>
        <div>
          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          >
            <option value="">Select a subject</option>
            <option value="Maths">Maths</option>
            <option value="Physics">Physics</option>
            <option value="Chemistry">Chemistry</option>
          </select>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TestInfo;

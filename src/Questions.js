// Questions.js

export const QUESTIONS_BY_SUBJECT = {
  Maths: [
    {
      questionText: 'What is 2 + 2?',
      options: ['3', '4', '5', '6'],
      correctIndex: 1,
    },
    {
      questionText: 'What is 3 * 4?',
      options: ['9', '10', '11', '12'],
      correctIndex: 3,
    },
    {
      questionText: 'What is the square root of 16?',
      options: ['2', '3', '4', '5'],
      correctIndex: 2,
    },
    {
      questionText: 'What is 5 squared?',
      options: ['20', '25', '30', '35'],
      correctIndex: 1,
    },
    {
      questionText: 'What is the value of π (pi) rounded to two decimal places?',
      options: ['3.12', '3.14', '3.16', '3.18'],
      correctIndex: 1,
    },
  ],
  Physics: [
    {
      questionText: 'What is Newton’s first law of motion?',
      options: [
        'An object at rest stays at rest',
        'Force equals mass times acceleration',
        'For every action, there is an equal and opposite reaction',
        'None of these',
      ],
      correctIndex: 0,
    },
    {
      questionText: 'What is the formula for pressure?',
      options: ['P = F/A', 'P = F + A', 'P = F - A', 'P = F x A'],
      correctIndex: 0,
    },
    {
      questionText: 'What is the SI unit of power?',
      options: ['Watt', 'Joule', 'Newton', 'Tesla'],
      correctIndex: 0,
    },
    {
      questionText: 'What is the acceleration due to gravity on Earth?',
      options: ['9.8 m/s²', '10.0 m/s²', '8.0 m/s²', '12.0 m/s²'],
      correctIndex: 0,
    },
    {
      questionText: 'What is the unit of electrical resistance?',
      options: ['Volt', 'Ampere', 'Ohm', 'Watt'],
      correctIndex: 2,
    },
  ],
  Chemistry: [
    {
      questionText: 'What is the chemical symbol for water?',
      options: ['H2O', 'CO2', 'O2', 'H2SO4'],
      correctIndex: 0,
    },
    {
      questionText: 'What is the atomic number of Carbon?',
      options: ['5', '6', '7', '8'],
      correctIndex: 1,
    },
    {
      questionText: 'What is the pH of a neutral solution?',
      options: ['5', '6', '7', '8'],
      correctIndex: 2,
    },
    {
      questionText: 'Which gas is known as laughing gas?',
      options: ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Nitrous oxide'],
      correctIndex: 3,
    },
    {
      questionText: 'What is the process of converting a liquid into vapor called?',
      options: ['Condensation', 'Evaporation', 'Sublimation', 'Vaporization'],
      correctIndex: 3,
    },
  ],
};

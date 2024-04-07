import React, { useState } from 'react';

interface Answers {
    [key: number]: string;
  }
  

const questions = [
  { 
    id: 1, 
    text: "What grade are you in? (Just type number)", 
  },
  {
    id: 2,
    text: "How many hours do you code per week? (Just type number)",
  }
  // ...add more questions as needed
];

const Form = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [errorMessage, setErrorMessage] = useState('');
  
  const currentQuestion = questions[currentQuestionIndex];
  
  const handleInputChange = (event:any) => {
    const { value } = event.target;
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [currentQuestion.id]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const answer = answers[currentQuestion.id];
    
    if (currentQuestion.id === 1) {
      if (['9', '10', '11', '12'].includes(answer)) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        alert('Please enter a valid grade (9, 10, 11, or 12).');
        return; // Stop the function if the answer is invalid
      }
    } else if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      console.log('Final answers:', answers);
      // Process the final answers as needed
    }
  };

  return (
    <form className='pt-10 text-black' onSubmit={handleSubmit}>
      <div className='flex justify-center'>
        <h1 className='text-center py-12 w-1/2 bg-[#D9B878] border-2 border-solid rounded-md'>
          Question {currentQuestion.id}: {currentQuestion.text}
        </h1>
      </div>
      <div className='flex justify-center py-12'>
        <input
          className='bg-[#D9B878] text-3xl w-[40rem] h-[5rem] text-[4rem]'
          type="text"
          value={answers[currentQuestion.id] || ''}
          onChange={handleInputChange}
        />
      </div>
      <div className='flex justify-center'>
        <button type="submit" className='py-2 px-4 bg-[#D9B878] rounded-md'>
          {currentQuestionIndex < questions.length - 1 ? 'Next' : 'Submit'}
        </button>
      </div>
    </form>
  );
};

export default Form;

import { Answers, ClassCategory, ClassType, GradeOffered, IntendedDifficulty, StudentInfo } from '@/lib/interfaces';
import React, { useState } from 'react';



const questions = [
  { 
    id: 1, 
    text: "What grade are you in? (Just type number)", 
  },
  {
    id: 2,
    text: "What is your name?",
  },
  {
    id: 3,
    text: "Have you decided on a career? (Type yes or no)"
  },
  {
    id: 4,
    text: "If you have decided  on a career, what is it? (Type n/a if you haven't)"
  },
  {
    id: 5,
    text: "What career goals do you have"
  },
  {
    id: 6,
    text: "How many honors/ap/ib classes do you want to take this year"
  },
  {
    id: 7,
    text: "How many total classes do you wish to take"
  },
  
  // ...add more questions as needed
];

const Form = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [errorMessage, setErrorMessage] = useState('');

  const student:StudentInfo = {
    id: 34,
    name: "Joe Luis",
    careerDecided: true,
    careerPlan: "Sof",
    careerGoals: ["Make money", "Be famous"],
    classes: [
      {
        className: "AP Physics C:Mechanics",
        offered: true,
        taken: true,
        gradeOffered: GradeOffered.C,
        classType: ClassType.ap,
        classCategory: ClassCategory.D,
        classDifficulty: 10,  
        students: [] 
      },
      {
        className: "AP Chemistry",
        offered: true,
        taken: true,
        gradeOffered: GradeOffered.C,
        classType: ClassType.ap,
        classCategory: ClassCategory.D,
        classDifficulty: 10,  
        students: [] 
      }
    ],
    advancedClassCap: 4,
    totalClassCap: 5,
    desiredDifficulty: IntendedDifficulty.C
  }
  
  const currentQuestion = questions[currentQuestionIndex];
  
  const handleInputChange = (event:any) => {
    const { value } = event.target;
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [currentQuestion.id]: value
    }));
  };

  const createUserProfile = (student:StudentInfo) => {
    
  }
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const answer = answers[currentQuestion.id];
    
    //Don't forget to add the collection  of all answers to the student profile!
    if (currentQuestion.id === 1) {
      if (['9', '10', '11', '12'].includes(answer)) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        alert('Please enter a valid grade (9, 10, 11, or 12).');
        return; // Stop the function if the answer is invalid
      }
    } 
    else if (currentQuestion.id === 3){
      if (["yes", "no", "Yes", "No"].includes(answer)){
        setCurrentQuestionIndex(currentQuestionIndex+1)
      } else{
        alert("Please enter either 'yes' or 'no'.");
        return;
      }
    }
    else if (currentQuestion.id === 4){
      if (["n/a", "N/A"].includes(answer)){
        //Career plan is empty
      }
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
    else if (currentQuestion.id === 6){
      if (!Number.isNaN(parseInt(answer))){
        
        setCurrentQuestionIndex(currentQuestionIndex + 1)
      }
      else{
        alert("Please enter a valid whole number");
        return; 
      }
    }
    else if (currentQuestion.id === 7){
      if (!Number.isNaN(parseInt(answer))){
        //add the logic to make sure this is greater than or equal to advanced class number
        console.log('Final answers:', answers);
      }
      else{
        alert("Please enter a valid whole number");
        return; 
      }
    }

    else if (currentQuestionIndex < questions.length - 1) {
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

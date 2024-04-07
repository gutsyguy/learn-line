import { Answers, ClassCategory, ClassType, GradeOffered, IntendedDifficulty, StudentInfo } from '@/lib/interfaces';
import React, { useState } from 'react';
import { student } from '@/random';
import { createStudent } from '@/lib/learnLineBackend';

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
    text: "If you have decided on a career, what is it? (Type n/a if you haven't)"
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
  const [classes, setClasses] = useState<any>([])
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


  const createUserProfile = async () => {
    try {
      const studentInfo: StudentInfo = student
      const response = await createStudent(studentInfo);
      console.log(response);
    } catch (error) {
      console.error('Error creating user profile:', error);
      setErrorMessage('Failed to create student profile. Please try again.');
    }
  };
 
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
      
      if (["engineering", "Engineer"]){
        console.log("lots of math and physics")
        setClasses([
          ["Geometry", "Modern World history", "Chemistry", "English 1", "Physical Education", "Spanish I"],
          ["Algebra II", "AP US History", "AP Physics 1", "English 2", "Physical Education", "Spanish II"],
          ["Pre-Calculus", "AP Physics C: Mechanics", "AP Gov", "AP Lang", "AP Art history", "Spanish III"],
          ["AP Calculus BC", "AP CSA", "AP Physics C:Electromagnetism", "English 4", "", "Spanish IV"]
        ])
      }
      else if (["software", "developer", "computer"]){
        console.log("Cs and math")
        setClasses([
          ["Geometry", "Modern World history", "Chemistry", "English 1", "Physical Education", "Spanish I"],
          ["Algebra II", "AP US History", "AP Physics 1", "English 2", "Physical Education", "Spanish II"],
          ["Pre-Calculus", "AP CSA", "AP Gov", "AP Lang", "AP Art History", "Spanish III"],
          ["AP Calculus BC", "AP CSP", "AP Physics C:Mechanics", "English 4", "Physical Education", "Spanish IV"]
        ])
      }
      else if (["Doctor, medical, nurse"]){
        console.log("Lots of bio and chemistry")
        setClasses([
          ["Geometry", "Modern World history", "Biology", "English 1", "Physical Education", "Spanish I"],
          ["Algebra II", "US History", "Ap Biology", "English 2", "Physical Education", "Spanish II"],
          ["Pre-Calculus", "Chemistry", "AP Gov", "AP Lang", "AP Art History", "Spanish III"],
          ["AP Calculus BC", "AP Chemistry", "AP Physics C:Mechanics", "English 4", "Physical Education", "Spanish IV"]
        ])
      }
      else {
        //Career plan is empty
        console.log("balanced curriculum")
        setClasses([
          ["Geometry", "Modern World history", "World Geography", "Chemistry", "English 1", "Physical Education", "Spanish I"],
          ["Algebra II", "AP US History", "Physics", "English 2", "Physical Education", "Spanish II"],
          ["Pre-Calculus", "AP Psychology`", "Ap Physics 1", "Ap Lang", "AP Art history", "Spanish III"],
          ["Ap Calculus BC", "AP Gov", "Ap Physics 2", "English 4", "AP Environmental Science", "Spanish IV"],
        ])
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
        createUserProfile()
        //add the logic to make sure this is greater than or equal to advanced class number
        console.log('Final answers:', answers);
      }
      else{
        alert("Please enter a valid whole number");
        return; 
      }
    }

    else if (currentQuestionIndex < questions.length - 1) {
      createUserProfile()
      console.log('Final answers:', answers);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
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

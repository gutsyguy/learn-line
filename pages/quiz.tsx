import ClassInput from "@/components/ClassInput";
import Form from "@/components/Form";
import React, { useState } from "react";

const Quiz = () => {
  const [classes, setClasses] = useState([]);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  return (
    <div className="pt-12 text-3xl bg-[#FFFDCA] min-h-screen">
      <h1 className="text-center text-black">Placement Quiz</h1> 
      {
        isQuizCompleted ? <ClassInput classes={classes} /> : <Form onDataChange={setClasses} onQuizComplete={() => setIsQuizCompleted(true)} />
      }
    </div>
  )
}

export default Quiz;

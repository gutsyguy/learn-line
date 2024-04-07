import ClassInput from "@/components/ClassInput";
import Form from "@/components/Form";
import { useState } from "react";

const quiz = () =>{
  const lever:Boolean = true 
  return(
    <div className="pt-12 text-3xl bg-[#FFFDCA] min-h-screen">
      <h1 className="text-center text-black">Placement Quiz</h1> 
      {
        lever? <Form /> : <ClassInput/>
      }
      
      

    </div>
  )
}

export default quiz 

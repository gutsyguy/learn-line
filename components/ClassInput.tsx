import React from 'react'

const ClassInput = ({ classes }:any) => {

  return (
    <div className='text-black text-center'>
        <h1>You should take these classes to do well to prepare for {1}</h1>
        <div className='flex justify-center'>
          <h1 className='text-center py-4 w-1/2 bg-gray-200 border-2 border-solid rounded-md'>
              High School Schedule
          </h1>
          
        </div>
        <div className='flex flex-col'>
        {classes.map((gradeClasses:any, index:any) => (
        <div key={index} className='flex flex-col'>
          <h1 className='py-4 bg-gray-400'>{index + 9}th Grade</h1>
          <ul className='flex flex-row justify-evenly bg-white py-5'>
            {gradeClasses.map((classItem:any, classIndex:any) => (
              <li key={classIndex}>{classItem}</li>
            ))}
          </ul>
        </div>
      ))} 
        </div>
    </div>
  )
}

export default ClassInput
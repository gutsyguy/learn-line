import { ClassCategory, ClassType, GradeOffered, IntendedDifficulty, StudentInfo } from "./lib/interfaces";

export const student:StudentInfo = {
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
    desiredDifficulty: "B" 
}



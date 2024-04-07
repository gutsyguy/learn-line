export default async function handle(req:any, res:any) {
    if (req.method === 'POST') {
      const {name, careerDecided, careerPlan, careerGoals, classes, advancedClassCap, totalClassCap, desiredDifficulty } = req.body;
      
      res.status(200).json();
    } else if (req.method === 'GET') {
      res.status(200).json()
    } else if (req.method === "DELETE"){
      res.status(200).json()
    }
    else {
      res.status(405).send(`Method ${req.method} Not Allowed`)
    }
}
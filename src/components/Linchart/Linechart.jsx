
import { LineChart as LChart, Line,XAxis,YAxis } from 'recharts';
const Linechart = () => {

    
     const  students = [
          {
            "name": "Student 1",
            "mathMarks": 85
          },
          {
            "name": "Student 2",
            "mathMarks": 78
          },
          {
            "name": "Student 3",
            "mathMarks": 92
          },
          {
            "name": "Student 4",
            "mathMarks": 65
          },
          {
            "name": "Student 5",
            "mathMarks": 70
          },
          {
            "name": "Student 6",
            "mathMarks": 88
          },
          {
            "name": "Student 7",
            "mathMarks": 76
          },
          {
            "name": "Student 8",
            "mathMarks": 94
          },
          {
            "name": "Student 9",
            "mathMarks": 60
          },
          {
            "name": "Student 10",
            "mathMarks": 82
          }
        ];
      
      


    return (
        
        <div className='bg-rose-900 p-2 rounded-md' >
            <LChart width={600} height={300} data={students}>
            <Line type="monotone" dataKey="mathMarks" stroke="#8884d8" />
            <XAxis dataKey="name" />
            <YAxis />
            </LChart>
        </div>
    );
};

export default Linechart;
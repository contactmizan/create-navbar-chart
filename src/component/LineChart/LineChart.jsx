import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const subjectMarksData = [
        { student_id: 1, math_marks: 85, physics_marks: 78, chemistry_marks: 72 },
        { student_id: 2, math_marks: 78, physics_marks: 82, chemistry_marks: 75 },
        { student_id: 3, math_marks: 92, physics_marks: 88, chemistry_marks: 90 },
        { student_id: 4, math_marks: 67, physics_marks: 70, chemistry_marks: 65 },
        { student_id: 5, math_marks: 73, physics_marks: 75, chemistry_marks: 68 },
        { student_id: 6, math_marks: 88, physics_marks: 85, chemistry_marks: 80 },
        { student_id: 7, math_marks: 79, physics_marks: 72, chemistry_marks: 78 },
        { student_id: 8, math_marks: 91, physics_marks: 89, chemistry_marks: 85 },
        { student_id: 9, math_marks: 84, physics_marks: 80, chemistry_marks: 83 },
        { student_id: 10, math_marks: 76, physics_marks: 73, chemistry_marks: 71 }
    ];


    return (
        <div>
            <LChart width={800} height={400} data={subjectMarksData}>  
            <XAxis dataKey=" student_id" />  
            <YAxis></YAxis>    
            <Line dataKey="math_marks" stroke='red'></Line>
            <Line dataKey={'physics_marks'} stroke='yellow'></Line>
            </LChart>

        </div>
    );
}

export default LineChart;
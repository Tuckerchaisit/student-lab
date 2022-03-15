import Student from './Student'

const StudentList = (props) => {
  return (  
    <h2>
      This is Student's list
      {props.students.map(student=>
        <Student key={student.name} student ={student}/>
        )}
    </h2>
  );
}
 
export default StudentList;
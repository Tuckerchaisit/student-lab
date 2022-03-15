import Score from "./Score"
const Student = (props) => {
  return ( 
    <>
    <h3>
    name: {props.student.name} 
    </h3>
    <h5>
    Bio: {props.student.bio}
    </h5>
    {props.student.scores.map(container=>
      <Score key={container} container={container}/>
      )}
    </>
   );
}
 
export default Student;
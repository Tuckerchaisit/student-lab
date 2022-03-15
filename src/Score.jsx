const Score = (props) => {
  return ( 
    <>
    <h5>
      date: {props.container.date}
    </h5>
    <h6>
      score: {props.container.score}
    </h6>
    </>
   );
}
 
export default Score;
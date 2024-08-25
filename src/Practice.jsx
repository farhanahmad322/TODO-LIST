const Practice = () => {
    const student=[6,7];
  return (
    <>
    {/* <p>{student.length &&"No students found"}</p> */}
    {/* <p>{student.length===0 &&"No students found"}</p>
    */}
     <p>{!student.length && "No students found"}</p>
    <p>number of student :{student.length}</p> 
    </>
  )
}

export default Practice
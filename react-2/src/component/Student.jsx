
const styles = {
  studentCardStyle:{
    border: '1px solid black',
    borderRadius:'10px',
    width: 'max-content',
    padding: '10px',
    margin: '10px auto'

  }
}

function Student({fullName,country,age}) {
  
  return (
    <div style={styles.studentCardStyle}>
      <h1>{fullName}</h1>
      <p>{country}</p>
      <p>Batch:{age}</p>
    </div>
  )
}

export default Student
import React from 'react'


const containerStyle = {
  backgroundColor: 'aliceblue',
  border: '1px solid black',
  margin: '20px',
  fontSize: 'large'
}

function HOC({Component}) {
  return (
    <div style={containerStyle}>
      <Component />
    </div>
  )
}

export default HOC
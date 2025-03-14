import React from 'react'

function Basic({part,year}) {
  // console.log(props)
  return (
    <>
    <div>This is just some random functional component</div>
    <p style={{textAlign:'center',marginTop:'20px',}}>{part} Year:: {year}</p>
    </>
  )
}

export default Basic;
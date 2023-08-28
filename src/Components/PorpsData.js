import React from 'react'

const PorpsData = () => {
  return (
    <div>
        <p>Parent data</p>

        <ChildData messages={'hello Ganesh Aher'} />
        {/* <p>Hello Ganesh </p> */}
    </div>
  )
}

const ChildData =(props)=>{
    return(
        <div>
            <h1>Child Data</h1>
            <h2>{props.messages}</h2>
        </div>
    )
}

export default PorpsData
// https://jsonplaceholder.typicode.com/posts
import React, { useEffect, useState } from 'react'

const ApiData = () => {
  const [data, setData] = useState([])
  console.log("APIdata.....................",data);

  const ApiFun =async()=>{
    const url = "https://jsonplaceholder.typicode.com/posts";
    var result=await fetch(url);
    result = await result.json()
    setData(result)
  }
  useEffect(() => {
    ApiFun()
  }, []);

  return (
    <ul>
      {
        data.map(item=>(
          <div key={item.id}>
            <li>{item.id}</li>
            <li>{item.body}</li>
            <li>{item.title}</li>

          </div>
        ))
      }
    </ul>

  )
}

export default ApiData
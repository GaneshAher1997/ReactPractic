import React, { useState } from 'react'

const Count2 =() =>{
    const [count, setCount] = useState(10)
  return (
    <div>
        <h1>CounterApp</h1>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count + 1)}>Increment</button>
        <button onClick={()=>count > 5 && setCount(count - 1)}>Decrement</button>
        <button onClick={()=>setCount(10)}>Reset</button>
        
    </div>
  )
}

export default Count2



// import React, { useState, useEffect } from 'react';

// const ApiData = () => {
//   const [items, setItems] = useState([]);

//   const ApiFun = async()=>{
//     const url ='https://jsonplaceholder.typicode.com/posts';
//     var result = await fetch(url);
//     result = await result.json()

//     setItems(result)
//   }

//   // useEffect(() => {
//   //   fetch('https://jsonplaceholder.typicode.com/posts')
//   //     .then(response => response.json())
//   //     .then(data => setItems(data));
//   // }, []);
//   useEffect(() => {
//     ApiFun();
//   }, []);

//   return (
//     <ol>
//       {items.map(item => (
//         <div  key={item.id}>         
//         <li style={{color:'red'}}> ItemsID:- {item.id}</li>
//         <li>ItemsBody:- {item.body}</li>
//         <li style={{backgroundColor:'green'}}>ItemsTitle:- <li> {item.title}</li> </li>
//         </div>


//       ))}
//     </ol>
//   );
// };

// export default ApiData;

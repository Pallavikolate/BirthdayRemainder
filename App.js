import React, { useState } from 'react'
import Data from './Project 1/Data'
import './App.css'

const App = () => {
  const[data,setData]=useState(Data)
  return (
    <div className='App'>
      <center><h1>Birthday Remaider is {data.length}</h1></center>
      <section>
       <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        {data.map((item)=>{
          return(
            <tbody>
              <tr>
                <td><img src={item.image} alt='' height={'100px'} width={'100px'}></img></td>
                <td>{item.name}</td>
                <td>{item.age}</td>
              </tr>
            </tbody>
          ) 
        })
         }
         <tfoot>
          <tr>
            <td></td>
          <td colSpan={'2'} ><button onClick={()=>setData([])}>clear</button> </td>
          {/* <td></td> */}
          </tr>
         </tfoot>
        
       
      </table>
      </section>
      
    </div>
  )
}

export default App

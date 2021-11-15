
import React,{useState} from 'react'


export default function Tenth(props) {

    const  [engMarks, setEngMarks] = useState(0)
    const [passMarks, setPassMarks] = useState(35)
  
    

 const   onIncrement=()=>
    {
        setEngMarks(engMarks+1)
       
    }

 const   onDecrement=()=>
 {
    setEngMarks(engMarks-1)
    
 }


    return ( 
        <div className="sub">
         <h1 className="display">{engMarks}</h1> 
         <label >{props.name}</label>
         <button onClick={onIncrement}>+</button>
          <button onClick={onDecrement}>-</button>
          <span></span>
         
         {engMarks != "" && (engMarks>= passMarks?<span style = {{color: 'green'}}>Pass</span> : <span style = {{color: 'red'}}>Fail</span>)}
         
        </div>
    )
}


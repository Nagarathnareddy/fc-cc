import React,{useState} from 'react'
import Tenth from './Tenth'

export default function Inputs() {
    const  [engMarks, setEngMarks] = useState(0)
    const  [telMarks, setTelMarks] = useState(0)
    const  [matMarks, setMatMarks] = useState(0)
    const  [hinMarks, setHinMarks] = useState(0)
    const  [sciMarks, setSciMarks] = useState(0)
    const  [socMarks, setSocMarks] = useState(0)
  //const [result, setResult] = useState("")
   const [total, setTotal] = useState("")  
  // const [grade, setGrade] = useState("")  
   //const [percent, setPercent] = useState("")  

   const addingResult=()=>
   {
       let total= parseInt(engMarks)+parseInt(telMarks)+parseInt(hinMarks)+parseInt(matMarks)+parseInt(sciMarks)+parseInt(socMarks)
       
       setTotal(total)
   }
 
    return (
        <div className="ma" >
           <Tenth name="English Marks"/>
           <Tenth name="Telugu Marks"/>
           <Tenth name="Hindhi Marks"/>
           <Tenth name="Maths Marks" />
           <Tenth name="Science Marks"/>
           <Tenth name="Social Marks"/> 
           <br/>
          <button onClick={addingResult}>Check Result</button>
          <br/>
          <br/>
          <span>Total:{total}</span>
          <br/>
          <br/>
          <span>Percentage:</span>
          <br/>
          <br/>
          <span>Grade:</span>
        </div>
    )
}

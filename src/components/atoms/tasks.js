import { useState } from "react"

import "./tasks.css"

export function Task(){
    const[task,setTask]=useState("")
    const[tasks,setTasks]=useState([])
    function inp(e){
        setTask(e.target.value)
}
    function handleClick(){
       tasks.push(task)
       console.log(tasks)
        
    
    }
    function handleClicktodelete(indexNumber){
        const filteredData=tasks.filter((ele,index)=>index!==indexNumber);
        setTasks(filteredData);
    }
    return(
        <div className="box">
            <br/>
            <br/>
            <img className="logo" src="https://cdn-icons-png.flaticon.com/512/906/906334.png" alt=""></img>
            <p>Pending Tasks is {tasks.length}</p>
            <input onChange={inp} className="inpu" placeholder="Add Activity "></input>
            <button onClick={handleClick} className="Addbtn">click</button>
            <div className="lis">
            <ol>
            {tasks.map((ele,index)=>{
                return(
                    <div key={index}>
                    

            
                <li>{ele} <button className="delete" onClick={()=>handleClicktodelete(index)}>X</button></li>
                
                </div>

             )} )}
            </ol>
            </div>

        </div>
    )
}
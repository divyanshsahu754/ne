import { useState } from "react"



export function Name(){
    const[task,setTask]=useState("")
    const[namelist,setList]=useState([])
    
    function inp(e){
        setTask(e.target.value)
}
    function handleClick(){
       namelist.push(task)
       console.log(namelist)
       setTask("")
    
       }
       function handleClicktodelete(indexNumber){
        const filteredData=namelist.filter((ele,index)=>index!==indexNumber);
        setList(filteredData);
        
        

    }
   
    return(
        <div>
            <input onChange={inp} className="inpu" placeholder="Add Name " value={task}></input>
            <button onClick={handleClick} className="Addbtn">click</button>
            <div className="lis">
            <ol>
            {namelist.map((ele,index)=>{
                return(
                    <div key={index} className="list">
                    

            
                <li>{ele}
                <span> </span><button className="delete" onClick={()=>handleClicktodelete(index)}>X</button>
                </li>
                

                
                
                </div>
                )})}
                </ol>
                </div>
        </div>
    )
}
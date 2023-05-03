import { useState } from "react"


export function Details(){
        const[image,setImage]=useState([])

        function fet(){
        
            fetch("https://reqres.in/api/users/")
            .then((response) =>{
                return response.json();
            }).then((data)=>{
                //let user = data.results
                let user=data.data
                setImage(user)
                
            })
        }



    

      
    
    return(
        <div>
           <button onClick={fet}>Fetch Api</button>
           <br/>
           
           {image.map((item)=>(
            
            <span>
                
        
            <li>id: {item.id}</li>
            <li>email: {item.email}</li>
            <li>first_name: {item.first_name}</li>
            <li>last_name: {item.last_name}</li>
            <li>avatar: {item.avatar}</li>
            <hr/>
            
            </span>
           ))}
           
           
           
           
        </div>
    )
}
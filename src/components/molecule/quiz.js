import { useState } from "react"
import { Question } from "../atoms/question"


export function Quiz(){
    const q1=[{q:"Two dice are thrown. What is the probability that the sum of the numbers appearing on the two dice is 11, if 5 appears on the first"
                ,A:"1/36"
                ,B:"1/6"
                ,C:"5/6"
                ,D:"none"
                ,id:1}]
    const q2=[            {q:"If P(A)=1/2,P(B)=1/3 and P(A∩B)=1/4, then P(B/A)="
                ,A:"1"
                ,B:"0"
                ,C:".5"
                ,D:".33333"
            ,id:2}]
    const q3=           [ {q:"If A and B are two events such that P(A)≠0 and P(B)≠1, then P(A¯/B¯)="
                ,A:"  1−P(A/B)"
                ,B:"1−P(A¯/B)"
                ,C:" 1−P(A∪B)/P(B¯)"
                ,D:" P(A¯)/P(B¯)"
            ,id:3}]
     const q4=       [{q:"[ML-1T-2] is the dimensional formula of"
            ,A:"force"
            ,B:"coefficient of friction"
            ,C:"modulus of elasticity"
            ,D:"energy"
        ,id:4}]
            const q5=[{q:"The measurement of radius of a circle has error of 1%. The error in measurement of its area is"
            ,A:"1%"
            ,B:"2%"
            ,C:"3%"
            ,D:"none"
        ,id:5}]
            const q6=[{q:"A stone is released from an elevator going up with acceleration 5 m/s2 . The acceleration of the stone after the release is:"
            ,A:"5 ms-2"
            ,B:"4.8 ms-2 upward"
            ,C:"4.8 ms-2 downward"
            ,D:"9.8 ms-2 downward"
        ,id:6}]
  const q7=      [{q:"A satellite in force-free space sweeps stationary interplanetary dust at a rate (dM/dt) = αv . The acceleration of satellite is:"
        ,A:"-2v2/M"
        ,B:"-αv2/M"
        ,C:"-αv2/2M"
        ,D:"-αv2"
    ,id:7}]
   const q8=[ {q:"Cyclohexanone on treatment with hydroxylamine gives P, which on treatment with sulphuric acid gives Q. When Q is heated with water at high temperature, R is obtained. Identify R."
    ,A:"Nylon-6"
    ,B:"Caprolactam"
    ,C:"Amino caproic acid"
    ,D:"Nylon-6,6"
        ,id:8}]
        const q9=[{q:"Vulcanization is carried out with which element?"
        ,A:"Sulphur"
        ,B:"Phosphorous"
        ,C:"Oxygen"
        ,D:"Chlorine"
        ,id:9}]
    const q10=[{q:"Diamond is an example of _______"
    ,A:"solid with hydrogen bonding"
    ,B:"electrovalent solid"
    ,C:"covalent solid"
    ,D:"glass"
,id:10}]
        const q11=[{q:"The total number of atoms in one unit cell of primitive unit cubic cell is ______ atom(s)."
        ,A:"1"
        ,B:"8"
        ,C:"4"
        ,D:"2"
        ,id:11}]
        const [data,setData]=useState(q1)
    return(
        <div>
            {data.map((ele,index)=>{
                return(
                <Question
                key={index}
                q={ele.q}
                A={ele.A}
                B={ele.B}
                C={ele.C}
                D={ele.D}
                id={ele.id}
                />
            )})}
            <br/>
            <div className='buttons' style={{maxWidth:"100%",display:"flex"
                ,alignItems: "center"
                ,justifyContent: "center"}}>
            <button type ="submit" onClick={()=>{setData(q1)}} style={{width:"3rem",marginLeft:"2rem"}} >1</button>
            <button type ="submit" onClick={()=>{setData(q2)}} style={{width:"3rem",marginLeft:"2rem"}}>2</button>
            <button type ="submit" onClick={()=>{setData(q3)}} style={{width:"3rem",marginLeft:"2rem"}}>3</button>
            <button type ="submit" onClick={()=>{setData(q4)}} style={{width:"3rem",marginLeft:"2rem"}}>4</button>
            <button type ="submit" onClick={()=>{setData(q5)}} style={{width:"3rem",marginLeft:"2rem"}}>5</button>
            <button type ="submit" onClick={()=>{setData(q6)}} style={{width:"3rem",marginLeft:"2rem"}}>6</button>
            <button type ="submit" onClick={()=>{setData(q7)}} style={{width:"3rem",marginLeft:"2rem"}}>7</button>
            <button type ="submit" onClick={()=>{setData(q8)}} style={{width:"3rem",marginLeft:"2rem"}}>8</button>
            <button type ="submit" onClick={()=>{setData(q9)}} style={{width:"3rem",marginLeft:"2rem"}}>9</button>
            <button type ="submit" onClick={()=>{setData(q10)}} style={{width:"3rem",marginLeft:"2rem"}}>10</button>
            <button type ="submit" onClick={()=>{setData(q11)}} style={{width:"3rem",marginLeft:"2rem"}}>11</button>
            </div>

        </div>
    )
}
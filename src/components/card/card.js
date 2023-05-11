import style from "./card.module.css"

export function Card(props){
    


return (
    <div className={style.container}>
        
        <img src={props.img} alt={props.imgalt}></img>
        <h3><em><strong>{props.name}</strong></em></h3>
        <br/><br/>
        <p>{props.education}</p>
        <p>{props.description}</p>
        <p> {props.experience}</p>
        



    </div>

);
}

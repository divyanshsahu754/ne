import "./card.css"

export function Card(props){
    function handleClick(){
        alert("product " +props.id+" ,which is Laptop of "+props.brand+" has a price of Rs. "+props.price+" is added in the cart, please proceed to pay")
    }


return (
    <div className="container">
        <h3>{props.id}</h3>
        <img src={props.img} alt={props.imgalt}></img>
        <p>{props.name}</p>
        <p>{props.brand}</p>
        <p>{props.description}</p>
        <p>Rs. {props.price}</p>
        <button onClick={handleClick}>ADD TO CART</button>



    </div>

);
}
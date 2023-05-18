

export function Question(props){
    return(
        <div className="Ques">
            
            <p>{props.id}. {props.q}</p>
            <form className="option">
            <label for="A">
            <input type="radio" id="A" name="i"></input>
            </label>
            <span> {props.A}</span>
            <br/>
            <label for="B">
            <input type="radio" id="B" name="i"></input>
            </label>
            <span> {props.B}</span>
            <br/>
            <label for="C">
            <input type="radio" id="C" name="i"></input>
            </label>
            <span> {props.C}</span>
            <br/>
            <label for="D">
            <input type="radio" id="D" name="i"></input>
            </label>
            <span> {props.D}</span>
            <br/>
            </form>

        </div>
    )
}
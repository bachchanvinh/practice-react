import './style.css'

function Inputtodo (props){
    const {todos,onClick}=props
    console.log(todos)
    return (
        <div className="inputtodo">
            <input placeholder="Enter todo here"/>
            <button onClick={onClick}>Submit</button>
        </div>
    )
}

export default Inputtodo
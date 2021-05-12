import React,{useState,useEffect} from 'react'
import Inputtodo from '../Inputtodoapp'

import './style.css'
let todolist=['aaaaa','bbbbbb','ccccccc']

function Todoapp() {
    const [todo,settodo]=useState(0)
    // useEffect(()=>{

    // })
    return (
        <div className="todoApp">
            <h1>Todos app</h1>
            <Inputtodo onClick={()=>settodo(todo+1)}todos={todo}/>
        </div>
    )
}

export default Todoapp
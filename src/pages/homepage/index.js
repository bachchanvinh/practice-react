import React from 'react'
import Todoapp from '../../components/Todoappcontainer' 


import './style.css'

class Homepage extends React.Component {
    render(){
        return(
            <div className="homepage">
            <Todoapp/>
            </div>
        )
    }
}

export default Homepage
import React from 'react'
import Pigcard from './Pigcard'

class Pigpen extends React.Component {

    addPigs = () => {
        return this.props.pigs.map((pig, index) => 
            <Pigcard key={index} pig={pig}/>
        )
    }

    render() {
        return (
            <div className="ui grid container" >
                {this.addPigs()}
            </div>
        )
    }

}

export default Pigpen
import React from 'react'

const weightKey = "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
const medalKey = "highest medal achieved"

class Pigcard extends React.Component {

    state = {
        showMoreInfo: false
    }

    handleToggle = () => {
        if (this.state.showMoreInfo) {
            this.setState({showMoreInfo : false})
        } else {
            this.setState({showMoreInfo : true})
        }
    }

    getPigImageUrl = () => {
        const underscoredPigName = this.props.pig.name.toLowerCase().split(" ").join("_")
        const imagePath = `../hog-imgs/${underscoredPigName}.jpg`
        return imagePath
    }

    render() {
        return (
            <div onClick={this.handleToggle} className="ui eight wide column" >
                <h2>{this.props.pig.name}</h2>
                <img alt={this.props.pig.name} src={process.env.PUBLIC_URL + this.getPigImageUrl()}/>
                {this.state.showMoreInfo ? <PigDescription pig={this.props.pig}/> : null}
            </div>
        )
    }

}

function PigDescription(props) {
    return (
        <div>
            <small>{`Weight compared to fridge: ${props.pig[weightKey]}`}</small> <br/>
            <small>{`Greased: ${props.pig.greased}`}</small><br/>
            <small>{`Highest medal achived: ${props.pig[medalKey]}`}</small><br/>
            <small>{`Specialty: ${props.pig.specialty}`}</small><br/>
            
        </div>
    )
}

export default Pigcard
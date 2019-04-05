import React from 'react'

class Pigcard extends React.Component {

    state = {
        showMoreInfo: false
    }

    handleToggle = () => {
        
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
            </div>
        )
    }

}

export default Pigcard
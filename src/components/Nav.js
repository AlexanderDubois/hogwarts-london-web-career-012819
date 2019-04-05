import piggy from '../porco.png'
import React from 'react'
import NavbarButton from './NavbarButton'

const Nav = (props) => {
	return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<a href="https://modernfarmer.com/2014/03/pigheaded-smart-swine/">
					<img src={piggy} className="App-logo" alt="piggy" />
				</a>
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span>

			<br/> <br/>
			<NavbarButton title="Reset" callback={props.reset}/>
			<h3>Filter by </h3>
			<NavbarButton title="Greased" callback={props.filterByGreased}/>
			<h3>Sort by</h3>
			<NavbarButton title="Name" callback={props.sortByName}/>
			<h3>or</h3>
			<NavbarButton title="Weight" callback={props.sortByWeight}/>
			
		</div>
	)
}

export default Nav

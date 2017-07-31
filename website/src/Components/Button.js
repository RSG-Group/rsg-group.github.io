import React from 'react';
import './../css/Button.css';

export default class extends React.Component{
	render(){
		return(
			<div className="button">{this.props.children}</div>
		)
	}
}
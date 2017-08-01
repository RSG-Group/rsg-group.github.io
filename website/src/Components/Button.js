import React from 'react';
import './../css/Button.css';
import omit from 'lodash.omit';

export default class extends React.Component{
	render(){
		const props = this.props;
		const className = props.className ? ` ${props.className}` : "";

		return(
			<div
				{...omit(props, ['className', 'children'])}
				className={`button${className}`}>
					{props.children}
			</div>
		)
	}
}
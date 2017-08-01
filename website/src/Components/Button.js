import React from 'react';
import './../css/Button.css';
import omit from 'lodash.omit';

export default class extends React.Component{
	click = () => {
		const props = this.props;
		props.onClick && props.onClick();
		if(props.redirect){
			window.location = props.redirect;
		}
	}

	render(){
		const props = this.props;
		const className = props.className ? ` ${props.className}` : "";

		return(
			<div
				{...omit(props, ['className', 'children', 'onClick', 'redirect'])}
				className={`button${className}`}
				onClick={this.click}>
					{props.children}
			</div>
		)
	}
}
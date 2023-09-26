import React, { Children } from 'react';

class WithLogging extends React.Component {
	constructor(props) {
		super(props);
	};

	componentDidMount() {
		let componentName = this.props.children.type.name || 'Component';
		console.log(`Component ${componentName} is mounted`);
	};

	componentWillUnmount() {
		let componentName = this.props.children.type.name || 'Component';
		console.log(`Component ${componentName} is going to unmount`);
	};

	render() {
		return (this.props.children);
	};

};

export default WithLogging;
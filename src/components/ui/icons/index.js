import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

const GenericIcon = (props) => {
	const type = props.type;
	const fixedWidth = props.fixedWidth;

	const classNames = ['fa', `fa-${type}`];
	if (fixedWidth) {
		classNames.push('fa-fw');
	}

	return (
		<i className={classNames.join(' ')} />
	);
};

GenericIcon.propTypes = {
	type: React.PropTypes.string.isRequired,
	fixedWidth: React.PropTypes.bool
};

export const RightAngleIcon = (props) => {
	return (
		<GenericIcon {...props} type="angle-right" />
	);
};

export const LeftAngleIcon = (props) => {
	return (
		<GenericIcon {...props} type="angle-left" />
	);
};

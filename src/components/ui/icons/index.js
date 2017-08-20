// @flow
import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

type GenericIconProps = {
	type: string,
	fixedWidth?: boolean
};

type IconProps = {
	fixedWidth?: boolean
};

const GenericIcon = (props: GenericIconProps) => {
	const { type, fixedWidth } = props;

	const classNames = ['fa', `fa-${type}`];
	if (fixedWidth) {
		classNames.push('fa-fw');
	}

	return (
		<i className={classNames.join(' ')} />
	);
};

export const RightAngleIcon = (props: IconProps) => {
	return (
		<GenericIcon {...props} type="angle-right" />
	);
};

export const LeftAngleIcon = (props: IconProps) => {
	return (
		<GenericIcon {...props} type="angle-left" />
	);
};

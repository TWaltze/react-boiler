// @flow
import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faAngleRight from '@fortawesome/fontawesome-free-solid/faAngleRight';
import faAngleLeft from '@fortawesome/fontawesome-free-solid/faAngleLeft';

type GenericIconProps = {
	icon: any,
	fixedWidth?: boolean
};

type IconProps = {
	fixedWidth?: boolean
};

const GenericIcon = (props: GenericIconProps) => {
	const { icon, fixedWidth } = props;

	return (
		<FontAwesomeIcon icon={icon} fixedWidth={fixedWidth} />
	);
};

export const RightAngleIcon = (props: IconProps) => (
	<GenericIcon {...props} icon={faAngleRight} />
);

export const LeftAngleIcon = (props: IconProps) => (
	<GenericIcon {...props} icon={faAngleLeft} />
);

import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp, SizeProp} from '@fortawesome/fontawesome-svg-core';

type Props = {
	icon: IconProp;
	size?: SizeProp;
	color?: string;
}

const Icon: FC<Props> = ({ icon, size='sm', color='#5a636a' }) => (
	<FontAwesomeIcon icon={icon} size={size} color={color}/>
)

export default Icon;
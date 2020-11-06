import React, { FC } from 'react';
import { FallbackProps } from 'react-error-boundary';
import Icon from '../../Icon';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';


const Crashed: FC<FallbackProps> = () => (
  <div className="Crashed">
    <Icon icon={faExclamationTriangle} /> Sorry this plugin has crashed!
  </div>
);

export default Crashed;

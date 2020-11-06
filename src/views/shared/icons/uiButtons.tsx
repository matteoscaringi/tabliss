import React, { FC } from 'react';

import Icon from '../../../Icon';
import { faTrash, faChevronUp, faChevronDown, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';


type Props = {};

// Actions
export const RemoveIcon: FC<Props> = () => <Icon icon={faTrash} />;

// Arrows
export const UpIcon: FC<Props> = () => <Icon icon={faChevronUp} />;
export const DownIcon: FC<Props> = () => <Icon icon={faChevronDown} />;

// Toggles
export const ExpandIcon: FC<Props> = () => <Icon icon={faPlus} />;
export const CollapseIcon: FC<Props> = () => <Icon icon={faMinus} />;

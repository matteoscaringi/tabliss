import React, { FC, useState } from 'react';

import { Props, defaultData, Shortcut } from './types';

import './Shortcuts.sass'

const ShortcutElement: FC<Shortcut> = ({ url, icon }) => {

	return (
		<a className="Shortcut" href={"https://" + url}>
			<img src={icon} alt=""/>
		</a>
	)
}

const Shortcuts: FC<Props> = ({ data = defaultData }) => {
	return (
		<div className="Shortcuts">
			<div />
			{data.Shortcuts.map(({ url, icon, key }) =>
				<ShortcutElement url={url} icon={icon} key={key}/>
			)}
		</div>
	)
}

export default Shortcuts;
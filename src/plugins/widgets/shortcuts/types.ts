import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faApple, faTwitch, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Url } from 'url';
import { API } from '../../types';

export type Shortcut = {
	url: string;
	key: string;
	icon: string;
};

export type Data = {
  Shortcuts: Shortcut[]
};

export type Props = API<Data>;

export const defaultData: Data = {
	Shortcuts: [{
		icon: 'https://api.faviconkit.com/youtube.com',
		url: 'youtube.com',
		key: "ABCDEFGH",
	}, {
		icon: 'https://api.faviconkit.com/twitch.tv',
		url: 'twitch.tv',
		key: 'AAAAAAAA',
	}, {
		icon: 'https://api.faviconkit.com/apple.com',
		url: 'apple.com',
		key: 'BBBBBBBB',
	}]
};

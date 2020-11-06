import React, { FC, useState, useEffect } from 'react';

import { Props, defaultData, Shortcut } from './types';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Icon from '../../../Icon';

import './ShortcutSettings.sass';

type liProps = {
  shortcut: Shortcut;
  onChange: (data: Shortcut) => void;
  onDelete: (data: Shortcut) => void;
}

const Li: FC<liProps> = ({ shortcut, onChange, onDelete }) => {
  const [url, setUrl] = useState(shortcut.url);

  useEffect(() => {
    onChange({ icon: `https://api.faviconkit.com/${url}`, url, key: shortcut.key });
  }, [url])

  return (
    <li>
      <span>https://</span>
      <input placeholder="url" value={url} onChange={(e) => setUrl(e.target.value)}/>
      <button className="delete" onClick={() => onDelete(shortcut)}>
        <Icon icon={faTimes}></Icon>
      </button>
    </li>
  )
};

const ShortcutSettings: FC<Props> = ({ data = defaultData, setData }) => {
  let shortcuts: Shortcut[] = data.Shortcuts;

  const save = (): void => {
    setData({ Shortcuts: shortcuts });
  }

  const onDelete = (shortcut: Shortcut): void => {    
    shortcuts = shortcuts.filter((sc) => sc.key != shortcut.key);
    save();
  }

  const onChange = (shortcut: Shortcut): void => {
    shortcuts = shortcuts.map((sc) => {
      if (shortcut.key != sc.key) return sc;
      return { icon: shortcut.icon, url: shortcut.url, key: shortcut.key };
    });
    save();
  }

  return (
    <div className="ShortcutSettings">
      <ul>
        {shortcuts.map((sc) => (
          <Li key={sc.key} shortcut={sc} onChange={onChange} onDelete={onDelete}/>
        ))}
        <li>
          <div className="content">
            <button onClick={() => setData({Shortcuts: [...shortcuts, {icon: '', url: 'shrt.lu', key: (Math.random() * 300) + ""}]})}>+</button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ShortcutSettings;
import React, { FC } from 'react';

import { engines } from './engines';
import { Props, defaultData } from './types';

const SearchSettings: FC<Props> = ({ data = defaultData, setData }) => (
  <div className="SearchSettings">
    <label>
      Search Provider
      <select
        onChange={event =>
          setData({ ...data, searchEngine: event.target.value })
        }
        value={data.searchEngine}
      >
        {engines.map(({ key, name }) => (
          <option key={key} value={key}>
            {name}
          </option>
        ))}
      </select>
    </label>
    <label>
      <input type="text" onChange={event => setData({ ...data, placeholder: event.target.value })} value={data.placeholder}/>
    </label>
  </div>
);

export default SearchSettings;

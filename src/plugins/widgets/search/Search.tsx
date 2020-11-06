import React, { FC, useRef, useState } from 'react';

import { Props, defaultData } from './types';
import { buildUrl, getSearchUrl } from './utils';

import Icon from '../../../Icon';
import { faSistrix } from '@fortawesome/free-brands-svg-icons';

import './Search.sass';

const Search: FC<Props> = ({ data = defaultData }) => {
  const searchInput = useRef<HTMLInputElement>(null);
  const previousValue = useRef('');
  const placeholder = data.placeholder;

  const [open, setOpen] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    previousValue.current = event.target.value;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    search();
  };

  const search = () => {
    document.location.assign(
      buildUrl(searchInput.current!.value, getSearchUrl(data.searchEngine)),
    );
  };

  return (
    <form className={open ? 'open Search' : 'Search'} onSubmit={handleSubmit}>
      <Icon icon={faSistrix}></Icon>
      <input
        autoFocus
        defaultValue=""
        placeholder={placeholder}
        ref={searchInput}
        tabIndex={1}
        type="text"
        onChange={handleChange}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
      />
    </form>
  );
};

export default Search;

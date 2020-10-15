import { API } from '../../types';

type Data = {
  searchEngine: string;
  placeholder: string;
};

export type Props = API<Data>;

export const defaultData: Data = {
  searchEngine: 'google',
  placeholder: 'Type to search'
};

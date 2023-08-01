import { createContext, useContext } from 'react';

export const ListContext = createContext(0);

export const useListDepth = () => useContext(ListContext);

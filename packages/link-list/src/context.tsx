import { createContext, useContext } from 'react';

export const LinkListContext = createContext(-1);
export const useLinkListDepth = () => useContext(LinkListContext);

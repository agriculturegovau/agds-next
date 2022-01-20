import { createContext, useContext } from 'react';

export const LinkListContext = createContext(0);
export const useLinkListDepth = () => useContext(LinkListContext);

import { createTheme } from '@vanilla-extract/css';
import { globalVars } from '@ag.ds-next/core';
import { tokens } from '@ag.ds-next/theme-ag';

export const theme = createTheme(globalVars, tokens);

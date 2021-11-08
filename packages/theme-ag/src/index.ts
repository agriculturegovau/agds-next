import { ColorTheme } from '@ag.ds-next/core';

const light: ColorTheme = {
	foreground: {
		text: '#313131',
		action: '#00558b',
		focus: '#9263de',
		hint: '#6f777b',
		hintAlt: '#61696b',
		muted: '#626262',
	},
	background: {
		page: '#FFFFFF',
		shade: '#f5f5f5',
		pageAlt: '#ebebeb',
		shadeAlt: '#e0e0e0',
	},
	border: {
		default: '#808080',
	},
};

const dark: ColorTheme = {
	foreground: {
		text: '#FFFFFF',
		action: '#61daff',
		focus: '#c390f9',
		hint: '#6f777b',
		hintAlt: '#61696b',
		muted: '#bdd2d7',
	},
	background: {
		page: '#162845',
		shade: '#0A1931',
		pageAlt: '#474747',
		shadeAlt: '#0A323C',
	},
	border: {
		default: '#95b7bf',
	},
};

export const tokens = {
	light,
	dark,
};

import { style } from '@vanilla-extract/css';

export const code = style({
	// we don't want ligatures because they look strange in lots of cases
	// and mess up the editor
	fontFeatureSettings: 'initial',
	MozFontFeatureSettings: 'initial',
	minWidth: '100%',
});

import { fontGrid, mapSpacing, themeVars, tokens } from '@ag.ds-next/core';

export const sideNavStyles = {
	// background-color: $AU-color-background-alt;
	// border-radius: $AU-border-radius;
	...fontGrid('sm', 'default'),
	overflow: 'hidden',
	border: 0,

	'a, .active > span': {
		...fontGrid('xs', 'default'),
		padding: mapSpacing(1),
		color: themeVars.foreground.muted,
		display: 'block',
	},

	li: { margin: 0 },

	a: {
		textDecoration: 'none',

		'&:hover': {
			textDecoration: 'underline',
			textDecorationSkipInk: 'auto',
			backgroundColor: themeVars.background.shadeAlt,
		},

		// @include AU-focus();
	},

	// Desktop styles
	[tokens.mediaQuery.min.md]: {
		// background: 'transparent',
		borderRadius: 0,
		overflow: 'visible',

		// Open the menu on desktop
		'.au-accordion__body.au-accordion--closed': {
			display: 'block',
			height: 'auto',
		},

		'a:hover': {
			backgroundColor: themeVars.background.shade,
		},
	},
} as const;

export const sideNavContentStyles = {
	marginTop: 0,
	marginBottom: 0,
	marginLeft: mapSpacing(1),
	marginRight: mapSpacing(1),

	ul: {
		'a, .active > span': {
			paddingLeft: mapSpacing(1),
		},

		ul: {
			'a, .active > span': {
				paddingLeft: mapSpacing(2),
			},

			ul: {
				'a, .active > span': {
					paddingLeft: mapSpacing(3),
				},
			},
		},
	},

	'.active > span': {
		fontWeight: 'bold',
		color: themeVars.foreground.text,
	},

	'ul ul ul a, ul ul ul .active > span': {
		'&:before': {
			content: '" "',
			width: mapSpacing(1),
			height: mapSpacing(1),
			backgroundSize: mapSpacing(1),
			marginLeft: `-1.5rem`,
			display: 'block',
			float: 'left',
			backgroundRepeat: 'no-repeat',
			backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='gray' d='M2 10h12v1H2zM2 5h1v5H2z'/%3E%3C/svg%3E")`,
			// backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='gray' d='M2 10h12v1H2zM2 5h1v5H2z'/%3E%3C/svg%3E')",
		},
	},

	'& > ul > li': {
		borderBottom: `1px solid ${themeVars.border}`,

		'&:last-of-type': {
			border: 'none',
		},
	},

	[tokens.mediaQuery.min.md]: {
		margin: 0,
	},
} as const;

export const sideNavTitleStyles = {
	...fontGrid('sm', 'default'),
	color: themeVars.foreground.text,
	borderBottom: `2px solid ${themeVars.border}`,
	fontWeight: 'bold',
	margin: 0,
} as const;

export const accordionTitleStyles = {
	...fontGrid('sm', 'default'),
	// 	color: $AU-color-foreground-action;
	// 	font-weight: normal;
	// 	text-decoration: underline;
	// 	text-decoration-skip-ink: auto;
	// 	background-color: inherit;
	// 	&:hover {
	// 		text-decoration: none;
	// 	}
	// 	&:focus {
	// 		outline-offset: -3px;
	// 	}
	// 	// Hide the accordion title without javascript
	// 	.no-js & {
	// 		display: none;
	// 	}
	//  [tokens.mediaQuery.max.md]: {
	//      display: 'none',
	//  },
};

export const sideNavLinkListStyles = {
	padding: 0,
	margin: 0,

	li: {
		margin: 0,

		a: {
			...fontGrid('xs', 'default'),
			color: themeVars.foreground.muted,
			textDecoration: 'none',

			'&:hover': {
				color: themeVars.foreground.muted,
				textDecoration: 'underline',
				textDecorationSkipInk: 'auto',
				backgroundColor: themeVars.background.shadeAlt,
			},

			// @include AU-focus();
		},
	},
};

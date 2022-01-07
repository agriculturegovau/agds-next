import { css } from '@emotion/react';
import {
	forwardRefWithAs,
	tokens,
	themeVars,
	mapSpacing,
	fontGrid,
} from '@ag.ds-next/core';
import { Box, BoxProps, focusStyles } from '@ag.ds-next/box';

export const Body = forwardRefWithAs<'div', BoxProps>(function Body(
	props,
	ref
) {
	return <Box ref={ref} css={bodyClass} {...props} />;
});

export const bodyClass = css({
	margin: 0,
	textSizeAdjust: '100%',

	// can we use themes here? ... do we need to?
	color: themeVars.foreground.text,

	// Font grid
	fontFamily: tokens.font.body,
	...fontGrid('sm', 'default'),
	h1: fontGrid('xxl', 'heading'),
	h2: fontGrid('xl', 'heading'),
	h3: fontGrid('lg', 'heading'),
	h4: fontGrid('md', 'heading'),
	h5: fontGrid('sm', 'heading'),
	h6: fontGrid('xs', 'heading'),

	a: {
		color: themeVars.foreground.action,
		textDecoration: 'underline',
		textDecorationSkipInk: 'auto',

		...focusStyles({ focus: true }),
	},

	/**
	 * Highlighting in-page sections that are in focus
	 */
	'[tabindex="0"]:focus, :target': {
		// @include AU-outline();
	},

	/**
	 * `mark` styling.
	 */
	mark: {
		color: themeVars.background.page,
		backgroundColor: themeVars.foreground.action,
	},

	/**
	 * Text selection styling
	 */
	'& ::selection': {
		color: themeVars.background.page,
		backgroundColor: themeVars.foreground.action,
		// Why RGBA 0.99? https://stackoverflow.com/a/7224621
	},

	img: {
		maxWidth: '100%',
	},

	// Decrease the opacity for certain elements
	'img::selection,video::selection,iframe::selection': {
		// TODO: verify this doesn't need to be a RGBA color
		// with 75% transparency
		backgroundColor: themeVars.foreground.action,
	},

	/**
	 * Vertical spacing of common text elements.
	 */
	p: {
		maxWidth: tokens.maxWidth.bodyText,
		margin: 0,
	},

	'* + p': {
		marginTop: mapSpacing(1.5),
	},

	'ul:not([class]),ol:not([class]),dl:not([class]),pre': {
		margin: 0, //reset defaults
	},

	'* + ul:not([class]), * + ol:not([class]), * + dl:not([class]), * + pre': {
		marginTop: mapSpacing(1.5),
	},

	'ul:not([class]), ol:not([class])': {
		'> li': {
			marginTop: mapSpacing(0.5),

			'> ul:not([class]), > ol:not([class])': {
				marginTop: mapSpacing(0.5),
			},
		},

		'> ul:not([class])': {
			listStyleType: 'disc',
		},
	},

	'dl:not([class])': {
		'> dd': {
			marginTop: mapSpacing(0.5),
			paddingLeft: mapSpacing(0.5),
			marginLeft: 0,
			borderLeft: 'solid 1px',
		},

		'> dt': {
			marginTop: mapSpacing(1.5),
			fontWeight: 'bold',

			'&:first-of-type': {
				marginTop: 0,
			},
		},
	},

	/**
	 * Emphasis and alt. voice/mood/diff. from prose text.
	 */
	'em,i': {
		fontStyle: 'italic',
	},

	/**
	 * Stong emphasis.
	 */
	'strong,b': {
		fontWeight: 'bold',
	},

	/**
	 * `small`: for less important information (not stylistic purposes).
	 */
	small: {
		// @include AU-fontgrid( xs );
	},

	/**
	 * `s`: represents contents no longer accurate/relevant.
	 * del` & `ins`: editorial markup.
	 */
	's,del': {
		textDecoration: 'line-through',
	},

	ins: {
		textDecorationLine: 'underline',
		textDecorationStyle: 'dashed', //Waiting on Chrome.
		textDecorationSkipInk: 'auto',
	},

	/**
	 * Defining definition of a term.
	 *
	 * The paragraph, description list group, or section that is the nearest
	 * ancestor of the `dfn` element must also contain the definition(s) for the term
	 * given by the `dfn` element.
	 *
	 * Note: `abbr` can be nested inside `dfn`.
	 */
	dfn: {
		fontStyle: 'normal',
	},

	/**
	 * Abbreviations/acronyms.
	 */
	'abbr,abbr[title]': {
		borderBottom: 'none',
		textDecoration: 'underline dotted',
	},

	'abbr[title]': {
		cursor: 'help',
	},

	'a abbr': {
		paddingBottom: 1,
	},

	/**
	 * Variables, eg. as used in mathematical expressions.
	 *
	 * We also provide semantic support for nested vars, and things like indices.
	 */
	var: {
		padding: '0 1px',
		fontStyle: 'italic',
		fontFamily: 'serif', //We want mathematical notation to use serif vars per convention.

		'sup,sub': {
			fontFamily: tokens.font.body,
			fontStyle: 'normal',
			padding: '0 1px',
		},
	},

	/**
	 * Prevent `sub` and `sup` elements from affecting the line height in
	 * all browsers.
	 * https://github.com/necolas/normalize.css/blob/master/normalize.css#L174
	 */
	'sub,sup': {
		// @include AU-fontgrid( xs, nospace ),
		position: 'relative',
		verticalAlign: 'baseline',
	},

	sub: {
		bottom: '-0.25em',
	},

	sup: {
		top: '-0.5em',
	},

	/**
	 * Keyboard strokes.
	 * Code snippets and code blocks.
	 */
	'kbd,code,samp': {
		...fontGrid('xs', 'default'),
		padding: mapSpacing(0.25),
		fontFamily: tokens.font.monospace,
		display: 'inline-block',
		borderRadius: tokens.borderRadius,
		// backgroundColor: themeVars.background.shade, // FIXME: This conflicts with the Live Code rending in the docs site.
		color: themeVars.foreground.text,
	},

	pre: {
		fontFamily: tokens.font.monospace,
	},

	'pre code': {
		// @include AU-space( padding, 1unit ),
		display: 'block',
		tabSize: 4,
	},

	/**
	 * Horizontal rule, used for paragraph-level thematic breaks.
	 */
	hr: {
		boxSizing: 'content-box',
		height: 0,
		overflow: 'visible',
		border: 'none',
		borderTop: `1px solid ${themeVars.border}`,
		marginBottom: mapSpacing(1.5),
	},

	'* + hr': {
		marginTop: mapSpacing(1.5),
	},

	/**
	 *  Body colour schemes
	 */
	'&.au-body--alt': {
		background: themeVars.background.pageAlt,

		'kbd,code,samp': {
			backgroundColor: themeVars.background.shadeAlt,
		},
	},

	'&.au-body--dark': {
		// background: themeVars.background.page,
		// color: $AU-colordark-foreground-text;

		'::selection': {
			// color: $AU-colordark-background;
			// backgroundColor: rgba( $AU-colordark-foreground-action, 0.99 );
			// Why RGBA 0.99? https://stackoverflow.com/a/7224621
		},

		// Decrease the opacity for certain elements
		'img::selection,video::selection,iframe::selection': {
			// backgroundColor: rgba( $AU-colordark-foreground-action, 0.75 );
		},

		a: {
			// color: $AU-colordark-foreground-action;

			'&:hover': {
				// color: $AU-colordark-foreground-text;
			},

			// @include AU-focus( 'dark' );
		},

		'[tabindex="0"]:focus, :target': {
			// @include AU-outline( 'dark' );
		},

		mark: {
			// backgroundColor: $AU-colordark-foreground-action;
			// color: $AU-colordark-background;
		},

		hr: {
			borderTopColor: themeVars.border,
		},

		'code, kbd,samp': {
			// color: $AU-colordark-foreground-text;
			// backgroundColor: $AU-colordark-background-shade;
		},
	},

	'&.au-body--dark.au-body--alt': {
		// background: $AU-colordark-background-alt;

		'code,kbd, samp': {
			// backgroundColor: $AU-colordark-background-alt-shade;
		},
	},
});

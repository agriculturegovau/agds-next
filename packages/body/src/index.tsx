import React from 'react';
import { css } from '@emotion/react';
import { forwardRefWithAs } from '@ag.ds-next/core';
import { Box, BoxProps } from '@ag.ds-next/box';

export const Body = forwardRefWithAs<'div', BoxProps>(function Body(
	props,
	ref
) {
	return <Box ref={ref} color="text" className={bodyClass} {...props} />;
});

export const bodyClass = css({
	// fontSize: tokens.rem,
	// lineHeight: tokens.lineHeight.default,
	margin: 0,
	textSizeAdjust: '100%',
	// fontFamily: tokens.font.body,

	// can we use themes here? ... do we need to?
	// color: vars.foreground.text,
	// backgroundColor: vars.background.page,
});

// globalStyle(`${body} a`, {
// 	color: vars.foreground.action,
// 	textDecoration: 'underline',
// 	textDecorationSkipInk: 'auto',
// });
// globalStyle(`${body} a:hover`, {
// 	color: vars.foreground.text,
// 	textDecoration: 'none',
// });
// globalStyle(`${body} a:focus`, {
// 	...outline,
// });
// // &::-moz-focus-inner { border: 0; } ?? - is this needed any more

// // /**
// //  * Highlighting in-page sections that are in focus
// //  */
// globalStyle(`${body} [tabindex="0"]:focus, :target`, {
// 	...outline,
// });

/**
 * `mark` styling.
 */
// globalStyle(`${body} mark`, {
// 	color: vars.background.page,
// 	backgroundColor: vars.foreground.action,
// });

// /**
//  * Text selection styling
//  */
// globalStyle(`${body} ::selection`, {
// 	color: vars.background.page,
// 	backgroundColor: vars.foreground.action,
// });

// NOTE: you can't do the
// Decrease the opacity for certain elements
// globalStyle('img::selection, video::selection, iframe::selection', {
// 	backgroundColor: rgba( vars.foreground.action, 0.75 );
// });

// /**
//  * Vertical spacing of common text elements.
//  */
// p {
// 	max-width: $AU-maxwidth;
// 	margin: 0;
// }

// * + p {
// 	@include AU-space( margin-top, 1.5unit );
// }

// ul:not([class]),
// ol:not([class]),
// dl:not([class]),
// pre {
// 	margin: 0; //reset defaults
// }

// * + ul:not([class]),
// * + ol:not([class]),
// * + dl:not([class]),
// * + pre {
// 	@include AU-space( margin-top, 1.5unit );
// }

// ul:not([class]),
// ol:not([class]) {
// 	> li {
// 		@include AU-space( margin-top, 0.5unit );

// 		> ul:not([class]),
// 		> ol:not([class]) {
// 			@include AU-space( margin-top, 0.5unit );
// 		}
// 	}

// 	> ul:not([class]) {
// 		list-style-type: disc;
// 	}
// }

// dl:not([class]) {
// 	> dd {
// 		@include AU-space( margin-top, 0.5unit );
// 		@include AU-space( padding-left, 0.5unit );
// 		margin-left: 0;
// 		border-left: solid 1px;
// 	}

// 	> dt {
// 		@include AU-space( margin-top, 1.5unit );
// 		font-weight: bold;

// 		&:first-of-type {
// 			margin-top: 0;
// 		}
// 	}
// }

// .written-by:after {
// 	content: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEiIHZpZXdCb3g9IjAgMCA2NTggMTgiPjx0ZXh0IHg9IjEzIiB5PSIxMyIgZm9udC1zaXplPSIxMyI+TWVzc3JzLCBEb20sIFBhZ2V5LCBUcmViLCBQYXQgYW5kIEtsZXBhcyBhcmUgcHJvdWQgdG8gcHJlc2VudCB0aGUgR09MRCBkZXNpZ24gc3lzdGVtLiAtIE1pc2NoaWVmIG1hbmFnZWQ8L3RleHQ+PC9zdmc+');
// 	color: #BADA55;
// }

// /**
//  * Emphasis and alt. voice/mood/diff. from prose text.
//  */
// em,
// i {
// 	font-style: italic;
// }

// /**
//  * Stong emphasis.
//  */
// strong,
// b {
// 	font-weight: bold;
// }

// /**
//  * `small`: for less important information (not stylistic purposes).
//  */
// small {
// 	@include AU-fontgrid( xs );
// }

// /**
//  * `s`: represents contents no longer accurate/relevant.
//  * del` & `ins`: editorial markup.
//  */
// s,
// del {
// 	text-decoration: line-through;
// }

// ins {
// 	text-decoration-line: underline;
// 	text-decoration-style: dashed; //Waiting on Chrome.
// 	text-decoration-skip-ink: auto;
// }

// /**
//  * Defining definition of a term.
//  *
//  * The paragraph, description list group, or section that is the nearest
//  * ancestor of the `dfn` element must also contain the definition(s) for the term
//  * given by the `dfn` element.
//  *
//  * Note: `abbr` can be nested inside `dfn`.
//  */
// dfn {
// 	font-style: normal;
// }

// /**
//  * Abbreviations/acronyms.
//  */
// abbr,
// abbr[title] {
// 	border-bottom: none;
// 	text-decoration: underline;
// 	text-decoration: underline dotted;
// }

// abbr[title] {
// 	cursor: help;
// }

// a abbr {
// 	padding-bottom: 1px;
// }

// /**
//  * Variables, eg. as used in mathematical expressions.
//  *
//  * We also provide semantic support for nested vars, and things like indices.
//  */
// var {
// 	padding: 0 1px;
// 	font-style: italic;
// 	font-family: serif; //We want mathematical notation to use serif vars per convention.

// 	sup,
// 	sub {
// 		font-family: $AU-font;
// 		font-style: normal;
// 		padding: 0 1px;
// 	}
// }

// /**
//  * Prevent `sub` and `sup` elements from affecting the line height in
//  * all browsers.
//  * https://github.com/necolas/normalize.css/blob/master/normalize.css#L174
//  */
// sub,
// sup {
// 	@include AU-fontgrid( xs, nospace );
// 	position: relative;
// 	vertical-align: baseline;
// }

// sub {
// 	bottom: -0.25em;
// }

// sup {
// 	top: -0.5em;
// }

// /**
//  * Keyboard strokes.
//  * Code snippets and code blocks.
//  */
// kbd,
// code,
// samp {
// 	@include AU-fontgrid( xs );
// 	@include AU-space( padding, 0.25unit );
// 	font-family: $AU-font-monospace;
// 	display: inline-block;
// 	border-radius: $AU-border-radius;
// 	background-color: $AU-color-background-shade;
// 	color: $AU-color-foreground-text;
// }

// pre {
// 	font-family: $AU-font-monospace;
// }

// pre code {
// 	@include AU-space( padding, 1unit );
// 	display:block;
// 	tab-size: 4;
// }

// /**
//  * Horizontal rule, used for paragraph-level thematic breaks.
//  */
// hr {
// 	box-sizing: content-box;
// 	height: 0;
// 	overflow: visible;
// 	border: none;
// 	border-top: 1px solid $AU-color-foreground-border;
// 	@include AU-space( margin-bottom, 1.5unit );
// }

// * + hr {
// 	@include AU-space( margin-top, 1.5unit );
// }

// /**
//  *  Body colour schemes
//  */
// &.au-body--alt {
// 	background: $AU-color-background-alt;

// 	kbd,
// 	code,
// 	samp {
// 		background-color: $AU-color-background-alt-shade;
// 	}
// }

// &.au-body--dark {
// 	background: $AU-colordark-background;
// 	color: $AU-colordark-foreground-text;

// 	::selection {
// 		color: $AU-colordark-background;
// 		background-color: rgba( $AU-colordark-foreground-action, 0.99 );
// 		// Why RGBA 0.99? https://stackoverflow.com/a/7224621
// 	}

// 	// Decrease the opacity for certain elements
// 	img::selection,
// 	video::selection,
// 	iframe::selection {
// 		background-color: rgba( $AU-colordark-foreground-action, 0.75 );
// 	}

// 	a {
// 		color: $AU-colordark-foreground-action;

// 		&:hover {
// 			color: $AU-colordark-foreground-text;
// 		}

// 		@include AU-focus( 'dark' );
// 	}

// 	[tabindex="0"]:focus,
// 	:target {
// 		@include AU-outline( 'dark' );
// 	}

// 	mark {
// 		background-color: $AU-colordark-foreground-action;
// 		color: $AU-colordark-background;
// 	}

// 	hr {
// 		border-top-color: $AU-colordark-foreground-border;
// 	}

// 	code,
// 	kbd,
// 	samp {
// 		color: $AU-colordark-foreground-text;
// 		background-color: $AU-colordark-background-shade;
// 	}
// }

// &.au-body--dark.au-body--alt {
// 	background: $AU-colordark-background-alt;

// 	code,
// 	kbd,
// 	samp {
// 		background-color: $AU-colordark-background-alt-shade;
// 	}
// }
// });

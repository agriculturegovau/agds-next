import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';
import { tokens } from './tokens';
import { vars } from './theme.css';

const responsiveProperties = defineProperties({
	conditions: Object.fromEntries(
		Object.entries(tokens.breakpoints).map(([key, width]) => [
			key,
			{
				'@media': `screen and (min-width: ${width}px)`,
			},
		])
	) as Record<keyof typeof tokens.breakpoints, { '@media': string }>,

	defaultCondition: 'xs',
	properties: {
		display: ['block', 'flex'],
		// Flex
		flexDirection: ['row', 'column'],
		flexWrap: ['nowrap', 'wrap', 'wrap-reverse'],
		justifyContent: [
			'flex-start',
			'flex-end',
			'center,',
			'space-between',
			'space-around',
			'space-evenly',
		],
		alignItems: ['stretch', 'flex-start', 'flex-end', 'center', 'baseline'],
		gap: tokens.spacing,
		// Spacing
		paddingTop: tokens.spacing,
		paddingBottom: tokens.spacing,
		paddingRight: tokens.spacing,
		paddingLeft: tokens.spacing,
		// Text
		textAlign: ['left', 'right', 'center'],
	},
	shorthands: {
		padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
		paddingX: ['paddingLeft', 'paddingRight'],
		paddingY: ['paddingTop', 'paddingBottom'],
	},
});

const colorProperties = defineProperties({
	properties: {
		color: vars.foreground,
		background: vars.background,
		borderColor: vars.border,
		fontWeight: tokens.fontWeight,
		fontFamily: tokens.font,
		fontSize: tokens.fontsize,
		lineHeight: tokens.lineHeight,
	},
});

export const sprinkles = createSprinkles(responsiveProperties, colorProperties);
export type Sprinkles = Parameters<typeof sprinkles>[0];

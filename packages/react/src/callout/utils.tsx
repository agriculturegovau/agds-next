import { InfoFilledIcon } from '@ag.ds-next/react/icon';

export const calloutToneMap = {
	neutral: {
		background: 'shade',
		border: 'border',
		icon: undefined,
	},
	info: {
		background: 'info',
		border: 'info',
		icon: (
			<InfoFilledIcon
				aria-hidden="false"
				aria-label="Information"
				color="info"
			/>
		),
	},
} as const;

export type CalloutTone = keyof typeof calloutToneMap;

export const calloutVariantMap = {
	regular: {
		gap: 1,
		padding: 1.5,
		titleSize: 'md',
	},
	compact: {
		gap: 0.5,
		padding: 1,
		titleSize: 'sm',
	},
} as const;

export type CalloutVariant = keyof typeof calloutVariantMap;

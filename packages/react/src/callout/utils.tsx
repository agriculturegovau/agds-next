import { InfoFilledIcon } from '../icon';

export const calloutToneMap = (variant: CalloutVariant) =>
	({
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
					size={calloutVariantMap[variant].iconSize}
				/>
			),
		},
	}) as const;

export type CalloutTone = keyof ReturnType<typeof calloutToneMap>;

export const calloutVariantMap = {
	compact: {
		textGap: 0.5,
		iconGap: 0.5,
		padding: 1,
		titleSize: 'sm',
		titlePaddingTop: '0.125rem', // 2px
		iconSize: 'md',
		flexDirection: 'row',
	},
	regular: {
		textGap: 1,
		iconGap: 0.5,
		padding: 1.5,
		titleSize: 'md',
		titlePaddingTop: undefined,
		iconSize: 'md',
		flexDirection: 'row',
	},
	feature: {
		textGap: 1,
		iconGap: 1,
		padding: 1.5,
		titleSize: 'xl',
		titlePaddingTop: undefined,
		iconSize: 'lg',
		flexDirection: 'column',
	},
} as const;

export type CalloutVariant = keyof typeof calloutVariantMap;

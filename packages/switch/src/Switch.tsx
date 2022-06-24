import { visuallyHiddenStyles } from '@ag.ds-next/a11y';
import { Text } from '@ag.ds-next/text';
import { Flex } from '@ag.ds-next/box';
import { boxPalette, packs } from '@ag.ds-next/core';
import {
	SwitchContainer,
	SwitchThumb,
	SwitchTrack,
	SwitchTrackProps,
} from './SwitchTrack';

export type SwitchProps = Omit<SwitchTrackProps, 'size'> & {
	size?: 'sm' | 'md';
	label: string;
	checked: boolean;
	onChange: (newValue: boolean) => void;
};

export const Switch = ({
	size = 'md',
	label,
	onChange,
	checked,
}: SwitchProps) => {
	return (
		<Flex
			as="label"
			gap={0.75}
			alignItems="center"
			css={{
				cursor: 'pointer',
				'&:hover': {
					'& > div > div:first-of-type': {
						borderColor: boxPalette.foregroundText,
						backgroundColor: checked
							? boxPalette.foregroundText
							: boxPalette.backgroundShadeAlt,
					},
					'& > div > div:last-of-type': {
						borderColor: boxPalette.foregroundText,
						'& svg': {
							stroke: checked ? boxPalette.foregroundText : undefined,
						},
					},
				},
			}}
		>
			<SwitchContainer size={size}>
				<input
					type="checkbox"
					checked={checked}
					onChange={() => onChange(!checked)}
					css={{
						...visuallyHiddenStyles,
						'&:focus ~ div:first-of-type': packs.outline,
					}}
				/>
				<SwitchTrack size={size} checked={checked} />
				<SwitchThumb size={size} checked={checked} />
			</SwitchContainer>
			<Text>{label}</Text>
		</Flex>
	);
};

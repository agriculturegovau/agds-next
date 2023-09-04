import { visuallyHiddenStyles } from '../a11y';
import { Text } from '../text';
import { Flex } from '../flex';
import { boxPalette, packs } from '../core';
import {
	SwitchContainer,
	SwitchThumb,
	SwitchTrack,
	SwitchSize,
} from './SwitchTrack';

export type SwitchProps = {
	/** The current checked state. */
	checked: boolean;
	/** Handle change events. */
	onChange: (newValue: boolean) => void;
	/** The size of the switch. */
	size?: SwitchSize;
	/** The associated label for the switch. */
	label: string;
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
					// Hover state for SwitchTrack
					'& input:not(:focus) ~ span:first-of-type': {
						borderColor: boxPalette.foregroundText,
						backgroundColor: checked
							? boxPalette.foregroundText
							: boxPalette.backgroundShadeAlt,
					},
					// Hover state for SwitchThumb
					'& input:not(:focus) ~ span:last-of-type': {
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
					role="switch"
					checked={checked}
					onChange={() => onChange(!checked)}
					css={{
						...visuallyHiddenStyles,
						// When this component is focused, outline the track
						'&:focus-visible ~ span:first-of-type': packs.outline,
					}}
				/>
				<SwitchTrack size={size} checked={checked} />
				<SwitchThumb size={size} checked={checked} />
			</SwitchContainer>
			<Text>{label}</Text>
		</Flex>
	);
};

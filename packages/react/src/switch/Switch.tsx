import { type AriaAttributes } from 'react';
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
	'aria-controls'?: AriaAttributes['aria-controls'];
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
	...props
}: SwitchProps) => {
	return (
		<Flex
			alignItems="center"
			as="label"
			css={{
				width: 'fit-content',
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
			gap={0.75}
		>
			<SwitchContainer size={size}>
				<input
					aria-checked={checked}
					aria-controls={props['aria-controls']}
					checked={checked}
					css={{
						...visuallyHiddenStyles,
						// When this component is focused, outline the track
						'&:focus-visible ~ span:first-of-type': packs.outline,
					}}
					onChange={() => onChange(!checked)}
					role="switch"
					type="checkbox"
				/>
				<SwitchTrack checked={checked} size={size} />
				<SwitchThumb checked={checked} size={size} />
			</SwitchContainer>
			<Text>{label}</Text>
		</Flex>
	);
};

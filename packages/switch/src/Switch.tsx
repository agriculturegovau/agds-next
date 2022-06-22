import { InputHTMLAttributes } from 'react';
import { visuallyHiddenStyles } from '@ag.ds-next/a11y';
import { Text } from '@ag.ds-next/text';
import { Flex } from '@ag.ds-next/box';
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
	onChange: InputHTMLAttributes<HTMLInputElement>['onChange'];
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
			}}
		>
			<SwitchContainer size={size}>
				<SwitchTrack size={size} checked={checked} />
				<SwitchThumb size={size} checked={checked} />
			</SwitchContainer>
			<input
				type="checkbox"
				checked={checked}
				onChange={onChange}
				css={visuallyHiddenStyles}
			/>
			<Text>{label}</Text>
		</Flex>
	);
};

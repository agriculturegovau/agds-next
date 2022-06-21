import { InputHTMLAttributes } from 'react';
import { visuallyHiddenStyles } from '@ag.ds-next/a11y';
import { Text } from '@ag.ds-next/text';
import { Flex } from '@ag.ds-next/box';
import { SwitchTrack, SwitchTrackProps } from './SwitchTrack';

export type SwitchProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'size' | 'onChange'
> &
	SwitchTrackProps & {
		label: string;
		checked: boolean;
		onChange: InputHTMLAttributes<HTMLInputElement>['onChange'];
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
			as="label"
			gap={0.75}
			alignItems="center"
			css={{
				cursor: 'pointer',
			}}
		>
			<SwitchTrack size={size} checked={checked} {...props} />
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

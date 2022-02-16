import {
	DetailedHTMLProps,
	InputHTMLAttributes,
	useState,
	useCallback,
	ChangeEvent,
} from 'react';
import { RadioIndicator } from './RadioIndicator';
import { ControlInput } from './ControlInput';
import { ControlContainer } from './ControlContainer';
import { ControlLabel } from './ControlLabel';
import { ControlSize } from './utils';

export type RadioProps = Omit<
	DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
	'size'
> & {
	invalid?: true;
	valid?: true;
	size?: ControlSize;
};

export const Radio = ({
	children,
	disabled,
	checked: checkedProp,
	onChange: onChangeProp,
	invalid,
	valid,
	size = 'md',
	...props
}: RadioProps) => {
	const [checkedState, setCheckedState] = useState(checkedProp ?? false);

	const onChange = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			setCheckedState(event.target.checked);
			if (typeof onChangeProp === 'function') onChangeProp(event);
		},
		[onChangeProp]
	);

	const checked = typeof checkedProp === 'boolean' ? checkedProp : checkedState;

	return (
		<ControlContainer disabled={disabled} valid={valid} invalid={invalid}>
			<ControlInput
				type="radio"
				checked={checked}
				onChange={onChange}
				disabled={disabled}
				{...props}
			/>
			<RadioIndicator
				checked={checked}
				disabled={disabled}
				invalid={invalid}
				size={size}
				valid={valid}
			/>
			<ControlLabel disabled={disabled}>{children}</ControlLabel>
		</ControlContainer>
	);
};

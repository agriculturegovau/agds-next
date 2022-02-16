import React, {
	DetailedHTMLProps,
	InputHTMLAttributes,
	useState,
	useCallback,
	ChangeEvent,
} from 'react';
import { CheckboxIndicator } from './CheckboxIndicator';
import { ControlInput } from './ControlInput';
import { ControlContainer } from './ControlContainer';
import { ControlLabel } from './ControlLabel';
import { ControlSize } from './utils';

export type CheckboxProps = Omit<
	DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
	'size'
> & {
	invalid?: true;
	valid?: true;
	size?: ControlSize;
};

export const Checkbox = ({
	children,
	disabled,
	checked: checkedProp,
	onChange: onChangeProp,
	invalid,
	valid,
	size = 'md',
	...props
}: CheckboxProps) => {
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
				type="checkbox"
				checked={checked}
				onChange={onChange}
				disabled={disabled}
				{...props}
			/>
			<CheckboxIndicator
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

import {
	forwardRef,
	PropsWithRef,
	DetailedHTMLProps,
	InputHTMLAttributes,
} from 'react';
import { RadioIndicator } from './RadioIndicator';
import { ControlInput } from './ControlInput';
import { ControlContainer } from './ControlContainer';
import { ControlLabel } from './ControlLabel';
import { ControlSize } from './utils';

export type RadioProps = PropsWithRef<
	Omit<
		DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
		'size'
	> & {
		invalid?: boolean;
		valid?: boolean;
		size?: ControlSize;
	}
>;

export const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
	{ children, disabled, invalid, valid, size = 'md', ...props },
	ref
) {
	return (
		<ControlContainer disabled={disabled} valid={valid} invalid={invalid}>
			<ControlInput ref={ref} type="radio" disabled={disabled} {...props} />
			<RadioIndicator
				disabled={disabled}
				invalid={invalid}
				size={size}
				valid={valid}
			/>
			<ControlLabel disabled={disabled}>{children}</ControlLabel>
		</ControlContainer>
	);
});

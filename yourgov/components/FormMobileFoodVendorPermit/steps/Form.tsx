import { FormEventHandler, ReactNode } from 'react';
import { Stack } from '@ag.ds-next/react/stack';
import { StepActions } from '../StepActions';

type FormProps = {
	children?: ReactNode;
	noValidate?: boolean;
	onSubmit: FormEventHandler<HTMLFormElement>;
	submitText?: string;
};

export const Form = ({
	children,
	noValidate = true,
	onSubmit,
	submitText,
}: FormProps) => {
	return (
		<Stack as="form" gap={3} noValidate={noValidate} onSubmit={onSubmit}>
			{children}

			<StepActions submitText={submitText} />
		</Stack>
	);
};

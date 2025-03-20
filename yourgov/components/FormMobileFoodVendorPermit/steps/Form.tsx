import { FormEventHandler, ReactNode } from 'react';
import { Stack } from '@ag.ds-next/react/stack';
import { StepActions } from '../StepActions';
import { useIsEditingFromReviewStep } from '../../../lib/useIsEditingFromReviewStep';

type FormProps = {
	children?: ReactNode;
	noValidate?: boolean;
	onEditCancel?: () => void;
	onSubmit: FormEventHandler<HTMLFormElement>;
	submitText?: string;
};

export const Form = ({
	children,
	noValidate = true,
	onEditCancel,
	onSubmit,
	submitText,
}: FormProps) => {
	const editingStep = useIsEditingFromReviewStep();

	return (
		<Stack as="form" gap={3} noValidate={noValidate} onSubmit={onSubmit}>
			{children}

			{editingStep?.match ? (
				<StepActions
					hasSaveAndExit={false}
					onCancel={onEditCancel}
					submitText="Save changes"
				/>
			) : (
				<StepActions submitText={submitText} />
			)}
		</Stack>
	);
};

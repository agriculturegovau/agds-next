import { FormEventHandler, ReactNode } from 'react';
import { Stack } from '@ag.ds-next/react/stack';
import { StepActions } from '../StepActions';
import { useIsEditingFromReviewStep } from '../../../lib/useIsEditingFromReviewStep';

type FormProps = {
	bypassWarnOnUnsavedChanges?: boolean;
	children?: ReactNode;
	editingCancel?: () => void;
	functionToCallWhenLeaving?: () => void;
	isSaving?: boolean;
	noValidate?: boolean;
	onSubmit: FormEventHandler<HTMLFormElement>;
	submitText?: string;
	warnOnUnsavedChanges?: boolean;
};

export const Form = ({
	bypassWarnOnUnsavedChanges,
	children,
	editingCancel,
	functionToCallWhenLeaving,
	noValidate = true,
	onSubmit,
	submitText,
	warnOnUnsavedChanges,
}: FormProps) => {
	const editingStep = useIsEditingFromReviewStep();
	console.log(`editingStep`, editingStep);

	return (
		<Stack as="form" gap={3} noValidate={noValidate} onSubmit={onSubmit}>
			{children}

			{editingStep?.match ? (
				<StepActions
					bypassWarnOnUnsavedChanges={bypassWarnOnUnsavedChanges}
					editingCancel={editingCancel}
					functionToCallWhenLeaving={functionToCallWhenLeaving}
					hasSaveAndExit={false}
					submitText="Save changes"
					warnOnUnsavedChanges={warnOnUnsavedChanges}
				/>
			) : (
				<StepActions
					bypassWarnOnUnsavedChanges={bypassWarnOnUnsavedChanges}
					functionToCallWhenLeaving={functionToCallWhenLeaving}
					submitText={submitText}
					warnOnUnsavedChanges={warnOnUnsavedChanges}
				/>
			)}
		</Stack>
	);
};

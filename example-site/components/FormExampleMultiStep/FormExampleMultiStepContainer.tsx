import { ReactElement } from 'react';
import { PageAlert } from '@ag.ds-next/page-alert';
import { Body } from '@ag.ds-next/body';
import { useFormExampleMultiStep } from './FormExampleMultiStep';

export const FormExampleMultiStepContainer = ({
	children,
}: {
	children: ReactElement;
}) => {
	const { hasCompletedPreviousSteps } = useFormExampleMultiStep();
	if (hasCompletedPreviousSteps) return children;
	return (
		<PageAlert
			tone="warning"
			title="This section of the form is not ready to be completed"
		>
			<Body>
				<p>
					Before starting this part of the form, you will need to go back and
					complete all of the previous sections.
				</p>
			</Body>
		</PageAlert>
	);
};

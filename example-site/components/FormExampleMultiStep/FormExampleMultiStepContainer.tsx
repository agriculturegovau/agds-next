import { ReactNode } from 'react';
import { Stack } from '@ag.ds-next/box';
import { H1 } from '@ag.ds-next/heading';
import { Text } from '@ag.ds-next/text';
import { PageAlert } from '@ag.ds-next/page-alert';
import { Body } from '@ag.ds-next/body';
import { useFormExampleMultiStep } from './FormExampleMultiStep';

export const FormExampleMultiStepContainer = ({
	children,
	title,
	subTitle,
}: {
	children: ReactNode;
	title: string;
	subTitle: string;
}) => {
	const { hasCompletedPreviousSteps } = useFormExampleMultiStep();
	return (
		<Stack gap={2}>
			<Stack gap={0.25}>
				<Text as="span" fontWeight="bold" fontSize="sm" color="muted">
					Title of multi page form
				</Text>
				<H1>{title}</H1>
				<Text as="p" fontSize="lg" color="muted">
					{subTitle}
				</Text>
			</Stack>
			{hasCompletedPreviousSteps ? (
				children
			) : (
				<PageAlert
					tone="warning"
					title="This section of the form is not ready to be completed"
				>
					<Body>
						<p>
							Before starting this part of the form, you will need to go back
							and complete all of the previous sections.
						</p>
					</Body>
				</PageAlert>
			)}
		</Stack>
	);
};

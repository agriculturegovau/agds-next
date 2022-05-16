import { ReactNode } from 'react';
import * as yup from 'yup';
import { Flex, Stack } from '@ag.ds-next/box';
import { H1 } from '@ag.ds-next/heading';
import { useFormExampleMultiStepProdiver } from './FormExampleMultiStep';
import { Body } from '@ag.ds-next/body';
import { PageAlert } from '@ag.ds-next/page-alert';
import { Text } from '@ag.ds-next/text';
import { DirectionButton } from '@ag.ds-next/direction-link';

export const FormExampleMultiStepContainer = ({
	children,
	title,
	subTitle,
}: {
	children: ReactNode;
	title: string;
	subTitle: string;
}) => {
	const { back } = useFormExampleMultiStepProdiver();
	return (
		<Stack gap={2}>
			<Stack gap={1} alignItems="flex-start">
				<DirectionButton direction="left" onClick={back}>
					Back
				</DirectionButton>
				<Stack gap={0.25}>
					<Stack>
						<Text as="span" fontWeight="bold" fontSize="sm" color="muted">
							Title of the form
						</Text>
						<H1>{title}</H1>
					</Stack>
					<Text as="p" fontSize="lg">
						{subTitle}
					</Text>
				</Stack>
			</Stack>
			{children}
			{/* {hasCompletedPreviousSteps ? (
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
			)} */}
		</Stack>
	);
};

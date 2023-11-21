import { PropsWithChildren, ReactNode } from 'react';
import { useRouter } from 'next/router';
import { Column, Columns } from '@ag.ds-next/react/columns';
import { ContentBleed } from '@ag.ds-next/react/content';
import { ProgressIndicator } from '@ag.ds-next/react/progress-indicator';
import { Stack } from '@ag.ds-next/react/stack';
import { DirectionButton } from '@ag.ds-next/react/direction-link';
import { useFormMobileFoodVendorPermit } from './Context';
import { FormContainer } from './FormContainer';

export const task1FormSteps = [
	{
		label: 'Owner details',
		href: '/app/licences-and-permits/apply/mobile-food-vendor-permit/form/task-1/step-1',
	},
	{
		label: 'Business details',
		href: '/app/licences-and-permits/apply/mobile-food-vendor-permit/form/task-1/step-2',
	},
	{
		label: 'Business address',
		href: '/app/licences-and-permits/apply/mobile-food-vendor-permit/form/task-1/step-3',
	},
	{
		label: 'Vehicle registration',
		href: '/app/licences-and-permits/apply/mobile-food-vendor-permit/form/task-1/step-4',
	},
	{
		label: 'Trading time',
		href: '/app/licences-and-permits/apply/mobile-food-vendor-permit/form/task-1/step-5',
	},
	{
		label: 'Food served',
		href: '/app/licences-and-permits/apply/mobile-food-vendor-permit/form/task-1/step-6',
	},
	{
		label: 'Confirm and submit',
		href: '/app/licences-and-permits/apply/mobile-food-vendor-permit/form/task-1/step-7',
	},
];

type FormTask1ContainerProps = PropsWithChildren<{
	formTitle: string;
	formIntroduction: string;
	formCallToAction?: ReactNode;
}>;

export function FormTask1Container({
	formTitle,
	formIntroduction,
	formCallToAction,
	children,
}: FormTask1ContainerProps) {
	const router = useRouter();
	const { isSideFlow } = useFormMobileFoodVendorPermit();

	function getStepStatus(stepIndex: number) {
		const step = task1FormSteps[stepIndex];
		if (step.href === router.asPath) return 'doing';
		return 'todo';
	}

	return (
		<Columns>
			{!isSideFlow && (
				<Column columnSpan={{ xs: 12, md: 4, lg: 3 }}>
					<ContentBleed visible={{ md: false }}>
						<ProgressIndicator
							items={task1FormSteps.map(({ label, href }, index) => ({
								label,
								href,
								status: getStepStatus(index),
							}))}
						/>
					</ContentBleed>
				</Column>
			)}
			<Column
				columnSpan={{ xs: 12, md: 8 }}
				columnStart={isSideFlow ? undefined : { lg: 5 }}
			>
				<Stack gap={3} alignItems="flex-start">
					<DirectionButton
						direction="left"
						// onClick={back}
					>
						Back
					</DirectionButton>
					<FormContainer
						task={1}
						title={formTitle}
						introduction={formIntroduction}
						callToAction={formCallToAction}
					>
						{children}
					</FormContainer>
				</Stack>
			</Column>
		</Columns>
	);
}

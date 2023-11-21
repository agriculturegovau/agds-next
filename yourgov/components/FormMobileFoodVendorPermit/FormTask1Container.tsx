import { PropsWithChildren } from 'react';
import { Column, Columns } from '@ag.ds-next/react/columns';
import { ContentBleed } from '@ag.ds-next/react/content';
import { ProgressIndicator } from '@ag.ds-next/react/progress-indicator';
import { Stack } from '@ag.ds-next/react/stack';
import { DirectionButton } from '@ag.ds-next/react/direction-link';
import { useFormMobileFoodVendorPermit } from './Context';

const FORM_STEPS = [
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

type FormTask1ContainerProps = PropsWithChildren<{}>;

export function FormTask1Container(props: FormTask1ContainerProps) {
	const { isSideFlow } = useFormMobileFoodVendorPermit();
	return (
		<Columns>
			{!isSideFlow && (
				<Column columnSpan={{ xs: 12, md: 4, lg: 3 }}>
					<ContentBleed visible={{ md: false }}>
						<ProgressIndicator
							items={FORM_STEPS.map(({ label, href }) => ({
								label,
								href,
								status: 'todo',
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
					{props.children}
				</Stack>
			</Column>
		</Columns>
	);
}

import { FormEvent } from 'react';
import { H2 } from '@ag.ds-next/react/heading';
import { PageAlert } from '@ag.ds-next/react/page-alert';
import { SectionAlert } from '@ag.ds-next/react/section-alert';
import { Stack } from '@ag.ds-next/react/stack';
import { Text } from '@ag.ds-next/react/text';
import { StepActions } from '../StepActions';
import { globalFormTasks } from '../globalFormTasks';
import { FormTask1Review } from '../task1/FormTask1Review';
import { FormTask2Review } from '../task2/FormTask2Review';
import { FormTask3Review } from '../task3/FormTask3Review';
import { FormTask4Container } from './FormTask4Container';

export function ValidationSectionAlert() {
	return (
		<SectionAlert
			title="Errors detected. Please edit your answers to this section."
			tone="error"
		/>
	);
}

export function NotAvailableAlert() {
	return (
		<PageAlert
			tone="warning"
			title="This section of the form is not ready to be completed"
		>
			<Text as="p">
				Before starting this part of the form, you will need to go back and
				complete all of the previous sections.
			</Text>
		</PageAlert>
	);
}

export function FormTask4Step1() {
	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		// next();
	};

	return (
		<FormTask4Container
			formTitle="Confirm and submit"
			formIntroduction="Check and confirm all details on this page."
		>
			{/** Provide business details */}
			<Stack gap={1.5}>
				<H2>{globalFormTasks[0].label}</H2>
				<FormTask1Review headingsLevel="h3" />
			</Stack>
			{/** Provide employee details */}
			<Stack gap={1.5}>
				<H2>{globalFormTasks[1].label}</H2>
				<FormTask2Review headingsLevel="h3" />
			</Stack>
			{/** Upload documents */}
			<Stack gap={1.5}>
				<H2>{globalFormTasks[2].label}</H2>
				<FormTask3Review />
			</Stack>
			<form onSubmit={onSubmit}>
				<StepActions />
			</form>
		</FormTask4Container>
	);
}

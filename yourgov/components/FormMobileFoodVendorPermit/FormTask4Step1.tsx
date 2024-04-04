import { FormEvent } from 'react';
import { H2 } from '@ag.ds-next/react/heading';
import { Stack } from '@ag.ds-next/react/stack';
import { globalFormTasks } from './globalFormTasks';
import { StepActions } from './StepActions';
import { FormTask4Container } from './FormTask4Container';
import { FormTask1Review } from './task1/FormTask1Review';

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
				<p>TODO</p>
			</Stack>
			{/** Upload documents */}
			<Stack gap={1.5}>
				<H2>{globalFormTasks[2].label}</H2>
				<p>TODO</p>
			</Stack>
			{/** Review and submit */}
			<Stack gap={1.5}>
				<H2>{globalFormTasks[3].label}</H2>
				<p>TODO</p>
			</Stack>
			<form onSubmit={onSubmit}>
				<StepActions />
			</form>
		</FormTask4Container>
	);
}

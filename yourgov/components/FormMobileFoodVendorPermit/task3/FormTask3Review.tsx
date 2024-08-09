import { ButtonLink } from '@ag.ds-next/react/button';
// import { H2, H3 } from '@ag.ds-next/react/heading';
import { Stack } from '@ag.ds-next/react/stack';
import { useGlobalForm } from '../GlobalFormProvider';
import { task3FormSteps } from './FormTask3Provider';
import { FileCollection, UploadsTable } from './UploadsTable';

// type FormTask3ReviewProps = {
// 	headingsLevel: 'h2' | 'h3';
// };

// const HEADINGS_MAP = {
// 	h2: H2,
// 	h3: H3,
// } as const;

export function FormTask3Review() {
	// { headingsLevel }: FormTask3ReviewProps
	const { formState } = useGlobalForm();
	// const HeadingComponent = HEADINGS_MAP[headingsLevel];

	const fileCollection = formState.task3?.step1?.fileCollection as
		| FileCollection
		| undefined;

	return (
		<Stack gap={3}>
			{/** Upload documents */}
			<Stack gap={1.5}>
				{/* <HeadingComponent>{task3FormSteps[0].label}</HeadingComponent> */}
				<UploadsTable fileCollection={fileCollection} readOnly />
				<div>
					<ButtonLink variant="text" href={task3FormSteps[0].href}>
						Change uploaded files
					</ButtonLink>
				</div>
			</Stack>
		</Stack>
	);
}

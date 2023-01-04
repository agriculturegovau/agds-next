import { Columns, Column } from '@ag.ds-next/react/columns';
import { H2 } from '@ag.ds-next/react/heading';
import { PageContent } from '@ag.ds-next/react/content';
import { Prose } from '@ag.ds-next/react/prose';
import { Stack } from '@ag.ds-next/react/box';
import { TaskList } from '@ag.ds-next/react/task-list';
import { Text } from '@ag.ds-next/react/text';
import { Breadcrumbs } from '@ag.ds-next/react/breadcrumbs';
import { AppLayout } from '../../../../components/AppLayout';
import { DocumentTitle } from '../../../../components/DocumentTitle';
import { FormHelpCallout } from '../../../../components/FormHelpCallout';
import { PageTitle } from '../../../../components/PageTitle';
import { useFormRegisterPet } from '../../../../components/FormRegisterPetContext';

const TASKS = [
	{
		label: 'Your personal details',
		message: 'Provide your personal and contact details',
		href: '/services/registrations/pet/task-1',
	},
	{
		label: 'Your pets details',
		message: 'Provide your pet’s details for registration',
		href: '/services/registrations/pet/task-2',
	},
];

export default function FormRegisterPetHomePage() {
	const { getTaskStatus } = useFormRegisterPet();
	return (
		<>
			<DocumentTitle title="Register a pet" />
			<AppLayout>
				<PageContent>
					<Columns>
						<Column columnSpan={{ xs: 12, md: 8 }}>
							<Stack gap={3}>
								<Breadcrumbs
									links={[
										{ href: '/', label: 'Home' },
										{ href: '/services', label: 'Services' },
										{ href: '/services/registrations', label: 'Registrations' },
										{ label: 'Register a pet' },
									]}
								/>
								<PageTitle
									title="Register a pet"
									introduction="Registering domestic animals is a requirement of pet ownership. Complete the following 2 tasks to register a pet."
									callToAction={
										<Text as="p" color="muted">
											Takes around 10 minutes.
										</Text>
									}
								/>
								<Stack gap={1.5}>
									<H2>Registration requirements</H2>
									<Prose>
										<p>
											To speed up the process of registering a pet you will need
											to provide:
										</p>
										<ul>
											<li>address details</li>
											<li>current vaccination certificate</li>
										</ul>
									</Prose>
								</Stack>
								<TaskList
									items={TASKS.map((task, idx) => ({
										...task,
										status: getTaskStatus(idx),
									}))}
								/>
								<FormHelpCallout />
							</Stack>
						</Column>
					</Columns>
				</PageContent>
			</AppLayout>
		</>
	);
}

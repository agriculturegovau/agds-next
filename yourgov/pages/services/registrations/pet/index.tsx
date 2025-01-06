import { Fragment, ReactElement } from 'react';
import { Columns, Column } from '@ag.ds-next/react/columns';
import { H2 } from '@ag.ds-next/react/heading';
import { PageContent } from '@ag.ds-next/react/content';
import { Prose } from '@ag.ds-next/react/prose';
import { Stack } from '@ag.ds-next/react/stack';
import { TaskList } from '@ag.ds-next/react/task-list';
import { Text } from '@ag.ds-next/react/text';
import { Breadcrumbs } from '@ag.ds-next/react/breadcrumbs';
import { SiteLayout } from '../../../../components/Layout/SiteLayout';
import { DocumentTitle } from '../../../../components/DocumentTitle';
import { FormHelpCallout } from '../../../../components/FormHelpCallout';
import { PageTitle } from '../../../../components/PageTitle';
import {
	FormRegisterPetContext,
	useFormRegisterPet,
} from '../../../../components/FormRegisterPetContext';
import type { NextPageWithLayout } from '../../../_app';

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

const Page: NextPageWithLayout = () => {
	const { getTaskStatus } = useFormRegisterPet();
	return (
		<Fragment>
			<DocumentTitle title="Register a pet" />
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
								callToAction={
									<Text as="p" color="muted">
										Takes around 10 minutes.
									</Text>
								}
								introduction="Registering domestic animals is a requirement of pet ownership. Complete the following 2 tasks to register a pet."
								title="Register a pet"
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
		</Fragment>
	);
};

export default Page;

Page.getLayout = function getLayout(page: ReactElement) {
	return (
		<SiteLayout focusMode>
			<FormRegisterPetContext>{page}</FormRegisterPetContext>
		</SiteLayout>
	);
};

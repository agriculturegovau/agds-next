import { PageContent } from '@ag.ds-next/react/content';
import { Columns, Column } from '@ag.ds-next/react/columns';
import { Prose } from '@ag.ds-next/react/prose';
import { Stack } from '@ag.ds-next/react/box';
import { H2 } from '@ag.ds-next/react/heading';
import { DirectionLink } from '@ag.ds-next/react/direction-link';
import { ButtonLink } from '@ag.ds-next/react/button';
import { AppLayout } from '../../../../../components/AppLayout';
import { DocumentTitle } from '../../../../../components/DocumentTitle';
import { FormHelpCallout } from '../../../../../components/FormHelpCallout';
import { PageTitle } from '../../../../../components/PageTitle';
import { FormDivider } from '../../../../../components/FormDivider';

export default function FormRegisterPetTask1HomePage() {
	return (
		<>
			<DocumentTitle title="Your personal details | Register a pet" />
			<AppLayout focusMode>
				<PageContent>
					<Columns>
						<Column columnSpan={{ xs: 12, md: 8 }}>
							<Stack gap={3}>
								<DirectionLink
									href="/services/registrations/pet"
									direction="left"
								>
									Back
								</DirectionLink>
								<PageTitle
									title="Your personal details"
									introduction="To complete this process you can check, update and confirm your current contact and address details."
								/>
								<Stack gap={1.5}>
									<H2>Registration requirements</H2>
									<Prose>
										<p>
											To speed up the process of registering a pet you will need
											to provide:
										</p>
										<ul>
											<li>Personal details</li>
											<li>Address details</li>
											<li>Contact details</li>
										</ul>
									</Prose>
								</Stack>
								<div>
									<ButtonLink href="/services/registrations/pet/task-1/form">
										Get started
									</ButtonLink>
								</div>
								<FormDivider />
								<FormHelpCallout />
							</Stack>
						</Column>
					</Columns>
				</PageContent>
			</AppLayout>
		</>
	);
}

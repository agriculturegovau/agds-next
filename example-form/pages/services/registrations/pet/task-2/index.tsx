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

export default function FormRegisterPetTask2HomePage() {
	return (
		<>
			<DocumentTitle title="Your pet's details | Register a pet" />
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
									title="Your pet's details"
									introduction="Under state regulation you are required to register any pet living with you in your domestic residence in an urban zone."
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
								<div>
									<ButtonLink href="/services/registrations/pet/task-2/form">
										Get started
									</ButtonLink>
								</div>
								<FormDivider />
								<Stack gap={1.5}>
									<H2>Information on pet registration rules and regulations</H2>
									<Prose>
										<h2></h2>
										<ul>
											<li>
												<a href="#">State pet registration rules</a>
											</li>
											<li>
												<a href="#">
													National pet registration legislative framework
												</a>
											</li>
											<li>
												<a href="#">
													Meaningful link label that shows link purpose
												</a>
											</li>
										</ul>
									</Prose>
								</Stack>
								<FormHelpCallout />
							</Stack>
						</Column>
					</Columns>
				</PageContent>
			</AppLayout>
		</>
	);
}

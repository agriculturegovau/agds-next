import { PageContent } from '@ag.ds-next/content';
import { Columns, Column } from '@ag.ds-next/columns';
import { ButtonLink } from '@ag.ds-next/button';
import { Prose } from '@ag.ds-next/prose';
import { Box, Stack } from '@ag.ds-next/box';
import { H2 } from '@ag.ds-next/heading';
import { Text } from '@ag.ds-next/text';
import { DirectionLink } from '@ag.ds-next/direction-link';
import { AppLayout } from '../../../../components/AppLayout';
import { DocumentTitle } from '../../../../components/DocumentTitle';
import { FormHelpCallout } from '../../../../components/FormHelpCallout';
import { PageTitle } from '../../../../components/PageTitle';
import { FormDivider } from '../../../../components/FormDivider';

export default function FormMultiPageHomePage() {
	return (
		<>
			<DocumentTitle title="Multi-page form example" />
			<AppLayout focusMode>
				<PageContent>
					<Columns>
						<Column columnSpan={{ xs: 12, md: 8 }}>
							<Stack gap={3}>
								<DirectionLink href="/services/registrations" direction="left">
									Back
								</DirectionLink>
								<Stack gap={1.5}>
									<PageTitle
										title="Register your pet"
										introduction="Registering domestic animals is a requirement of pet ownership. Complete the following 3 tasks to register your pet."
									/>
									<Text as="p" color="muted">
										Takes around 10 minutes
									</Text>
								</Stack>
								<Stack gap={1.5}>
									<H2>Registration requirements</H2>
									<Prose>
										<p>
											To speed up the process of registering you pet you will
											need to provide:
										</p>

										<ul>
											<li>Address details</li>
											<li>current vaccination certificate</li>
										</ul>
									</Prose>
								</Stack>
								<Box>TODO</Box>
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

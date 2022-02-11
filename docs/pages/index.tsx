import { Columns, Column } from '@ag.ds-next/columns';
import { Content } from '@ag.ds-next/content';
import { Heading } from '@ag.ds-next/heading';
import { Stack } from '@ag.ds-next/box';
import { Text } from '@ag.ds-next/text';
import { tokens } from '@ag.ds-next/core';
import { Body } from '@ag.ds-next/body';
import { AppLayout } from '../components/AppLayout';
import { PictogramCard } from '../components/PictogramCard';
import { DocumentTitle } from '../components/DocumentTitle';

export default function Homepage() {
	return (
		<>
			<DocumentTitle />
			<AppLayout>
				<Content background="bodyAlt">
					<Stack maxWidth={tokens.maxWidth.bodyText} gap={1.5}>
						<Heading type="h1" fontSize={['xxl', 'xxxl']}>
							Welcome to the Agriculture Design System (AgDS)
						</Heading>
						<Text fontSize="lg" fontWeight="normal" lineHeight="heading">
							AgDS provides a framework and a set of tools to help designers and
							developers build the steel threads of the Export Service quickly,
							efficiently and consistently.
						</Text>
					</Stack>
				</Content>
				<Content>
					<Stack gap={3}>
						<Body>
							<p>
								AgDS is based on the{' '}
								<a
									href="https://gold.designsystemau.org/"
									target="_blank"
									rel="noreferrer"
								>
									GOLD Design System
								</a>{' '}
								which incorporates the highest usability and accessibility
								standards, helping us to deliver a consistent experience for all
								users, in line with the{' '}
								<a
									href="https://www.dta.gov.au/help-and-advice/about-digital-service-standard"
									target="_blank"
									rel="noreferrer"
								>
									Digital Service Standard
								</a>
								.
							</p>
							<p>
								The system is in early development right now. Feel free to look
								around and leave feedback or suggestions if you like but please
								do not depend on these components just yet. We&apos;re working
								hard to get a stable release out as soon as we can.
							</p>
						</Body>
						<Columns gap={1} as="ul">
							<Column
								as="li"
								columnSpan={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 3 }}
							>
								<PictogramCard
									title="Packages"
									pictogram="packages"
									slug="/packages"
								/>
							</Column>
							<Column
								as="li"
								columnSpan={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 3 }}
							>
								<PictogramCard
									title="Guides"
									pictogram="guides"
									slug="/guides"
								/>
							</Column>
							<Column
								as="li"
								columnSpan={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 3 }}
							>
								<PictogramCard
									title="Starter kit"
									pictogram="starter"
									slug="/guides/getting-started"
								/>
							</Column>
						</Columns>
					</Stack>
				</Content>
			</AppLayout>
		</>
	);
}

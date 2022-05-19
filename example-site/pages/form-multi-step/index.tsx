import type { NextPage } from 'next';
import { Content } from '@ag.ds-next/content';
import { Columns, Column } from '@ag.ds-next/columns';
import { ButtonLink } from '@ag.ds-next/button';
import { ExternalLinkIcon } from '@ag.ds-next/icon';
import { AppLayout } from '../../components/AppLayout';
import { DocumentTitle } from '../../components/DocumentTitle';
import { FormExampleMultiStepCallout } from '../../components/FormExampleMultiStep/FormExampleMultiStepCallout';
import { Body } from '@ag.ds-next/body';
import { Flex, Stack } from '@ag.ds-next/box';
import { H1 } from '@ag.ds-next/heading';
import { Text } from '@ag.ds-next/text';

const FormMultiStepPage: NextPage = () => {
	return (
		<>
			<DocumentTitle title="Multi step form example" />
			<AppLayout
				template={{ name: '"Multi-step form', slug: 'multi-step-form' }}
			>
				<Content>
					<Columns>
						<Column columnSpan={{ xs: 12, md: 8 }}>
							<Stack gap={3}>
								<Stack gap={1}>
									<H1>Multipage form title (H1)</H1>
									<Text as="p" fontSize="lg">
										The introductory paragraph provides context about the entire
										multipage form. Use a short paragraph to reduce cognitive
										load.
									</Text>
								</Stack>
								<Body>
									<h2>Multipage form subheading (H2)</h2>
									<p>Multipage form subheading content</p>
									<hr aria-hidden="true" />
									<ButtonLink href="/form-multi-step/form">
										Start form
									</ButtonLink>
									<h2>More information section heading (H2)</h2>
									<h3>More information link list heading (H3)</h3>
									<ul>
										<li>
											<a href="#">
												<Flex alignItems="center" gap={0.25}>
													Meaningful link label that shows link purpose
													<ExternalLinkIcon size="sm" />
												</Flex>
											</a>
										</li>
										<li>
											<a href="#">
												<Flex alignItems="center" gap={0.25}>
													Meaningful link label that shows link purpose
													<ExternalLinkIcon size="sm" />
												</Flex>
											</a>
										</li>
										<li>
											<a href="#">
												<Flex alignItems="center" gap={0.25}>
													Meaningful link label that shows link purpose
													<ExternalLinkIcon size="sm" />
												</Flex>
											</a>
										</li>
									</ul>
									<h3>More information link list heading (H3)</h3>
									<ul>
										<li>
											<a href="#">
												<Flex alignItems="center" gap={0.25}>
													Meaningful link label that shows link purpose
													<ExternalLinkIcon size="sm" />
												</Flex>
											</a>
										</li>
										<li>
											<a href="#">
												<Flex alignItems="center" gap={0.25}>
													Meaningful link label that shows link purpose
													<ExternalLinkIcon size="sm" />
												</Flex>
											</a>
										</li>
										<li>
											<a href="#">
												<Flex alignItems="center" gap={0.25}>
													Meaningful link label that shows link purpose
													<ExternalLinkIcon size="sm" />
												</Flex>
											</a>
										</li>
									</ul>
								</Body>
								<FormExampleMultiStepCallout />
							</Stack>
						</Column>
					</Columns>
				</Content>
			</AppLayout>
		</>
	);
};

export default FormMultiStepPage;

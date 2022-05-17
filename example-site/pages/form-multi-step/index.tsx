import type { NextPage } from 'next';
import { Content } from '@ag.ds-next/content';
import { Columns, Column } from '@ag.ds-next/columns';
import { LinkList } from '@ag.ds-next/link-list';
import { ButtonLink } from '@ag.ds-next/button';
import { Body } from '@ag.ds-next/body';
import { ExternalLinkIcon } from '@ag.ds-next/icon';
import { Flex, Stack } from '@ag.ds-next/box';
import { AppLayout } from '../../components/AppLayout';
import { DocumentTitle } from '../../components/DocumentTitle';
import { H1, H2, H3 } from '@ag.ds-next/heading';
import { Text } from '@ag.ds-next/text';
import { boxPalette } from '@ag.ds-next/core';
import { FormExampleMultiStepCallout } from '../../components/FormExampleMultiStep/FormExampleMultiStepCallout';

const FormMultiStepPage: NextPage = () => {
	return (
		<>
			<DocumentTitle title="Multi step form example" />
			<AppLayout>
				<Content>
					<Columns>
						<Column columnSpan={{ xs: 12, md: 8 }}>
							<Stack gap={3}>
								<Stack gap={1}>
									<H1>Multipage form title (H1)</H1>
									<Text as="p" fontSize="lg" color="muted">
										The introductory paragraph provides context about the entire
										multipage form. Use a short paragraph to reduce cognitive
										load.
									</Text>
								</Stack>
								<Stack gap={1}>
									<H2>Multipage form subheading (H2)</H2>
									<Text as="p">Multipage form subheading content</Text>
								</Stack>
								<hr
									aria-hidden="true"
									css={{
										boxSizing: 'content-box',
										height: 0,
										margin: 0,
										overflow: 'visible',
										border: 'none',
										borderTopWidth: 1,
										borderTopStyle: 'solid',
										borderColor: boxPalette.borderMuted,
										width: '100%',
									}}
								/>
								<div>
									<ButtonLink href="/form-multi-step/form">
										Start form
									</ButtonLink>
								</div>
								<H2>More information section heading (H2)</H2>
								<Stack gap={1}>
									<H3>More information link list heading (H3)</H3>
									<LinkList
										links={[
											{
												href: '#',
												label: (
													<Flex as="span" alignItems="center" gap={0.25}>
														Meaningful link label that shows link purpose
														<ExternalLinkIcon size="sm" />
													</Flex>
												),
											},
											{
												href: '#',
												label: (
													<Flex as="span" alignItems="center" gap={0.25}>
														Meaningful link label that shows link purpose
														<ExternalLinkIcon size="sm" />
													</Flex>
												),
											},
											{
												href: '#',
												label: (
													<Flex as="span" alignItems="center" gap={0.25}>
														Meaningful link label that shows link purpose
														<ExternalLinkIcon size="sm" />
													</Flex>
												),
											},
										]}
									/>
								</Stack>
								<Stack gap={1}>
									<H3>More information link list heading (H3)</H3>
									<LinkList
										links={[
											{
												href: '#',
												label: (
													<Flex as="span" alignItems="center" gap={0.25}>
														Meaningful link label that shows link purpose
														<ExternalLinkIcon size="sm" />
													</Flex>
												),
											},
											{
												href: '#',
												label: (
													<Flex as="span" alignItems="center" gap={0.25}>
														Meaningful link label that shows link purpose
														<ExternalLinkIcon size="sm" />
													</Flex>
												),
											},
											{
												href: '#',
												label: (
													<Flex as="span" alignItems="center" gap={0.25}>
														Meaningful link label that shows link purpose
														<ExternalLinkIcon size="sm" />
													</Flex>
												),
											},
										]}
									/>
								</Stack>
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

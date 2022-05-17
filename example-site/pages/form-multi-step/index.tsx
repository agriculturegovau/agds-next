import type { NextPage } from 'next';
import { Content } from '@ag.ds-next/content';
import { Columns, Column } from '@ag.ds-next/columns';
import { LinkList } from '@ag.ds-next/link-list';
import { ButtonLink } from '@ag.ds-next/button';
import { Body } from '@ag.ds-next/body';
import { AppLayout } from '../../components/AppLayout';
import { DocumentTitle } from '../../components/DocumentTitle';

const FormMultiStepPage: NextPage = () => {
	return (
		<>
			<DocumentTitle title="Multi step form example" />
			<AppLayout>
				<Content>
					<Columns>
						<Column columnSpan={{ xs: 12, md: 8 }}>
							<Body>
								<h1>Multipage form title (H1)</h1>
								<p>
									The introductory paragraph provides context about the entire
									multipage form. Use a short paragraph to reduce cognitive
									load.
								</p>
								<h2>Multipage form subheading (H2)</h2>
								<p>Multipage form subheading content</p>
								<hr />
								<ButtonLink href="/form-multi-step/form">Start form</ButtonLink>
								<h2>More information section heading (H2)</h2>
								<h3>More information link list heading (H3)</h3>
								<LinkList
									links={[
										{
											href: '#',
											label: 'Meaningful link label that shows link purpose',
										},
										{
											href: '#',
											label: 'Meaningful link label that shows link purpose',
										},
										{
											href: '#',
											label: 'Meaningful link label that shows link purpose',
										},
									]}
								/>
								<h3>More information link list heading (H3)</h3>
								<LinkList
									links={[
										{
											href: '#',
											label: 'Meaningful link label that shows link purpose',
										},
										{
											href: '#',
											label: 'Meaningful link label that shows link purpose',
										},
										{
											href: '#',
											label: 'Meaningful link label that shows link purpose',
										},
									]}
								/>
							</Body>
						</Column>
					</Columns>
				</Content>
			</AppLayout>
		</>
	);
};

export default FormMultiStepPage;

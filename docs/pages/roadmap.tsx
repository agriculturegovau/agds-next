import { Prose } from '@ag.ds-next/react/prose';
import { TextLink } from '@ag.ds-next/react/text-link';
import { AppLayout } from '../components/AppLayout';
import { DocumentTitle } from '../components/DocumentTitle';
import { PageLayout } from '../components/PageLayout';
import { PageTitle } from '../components/PageTitle';

export default function RoadmapPage() {
	return (
		<>
			<DocumentTitle title="AgDS Roadmap" />
			<AppLayout applyMainElement={false}>
				<PageLayout
					breadcrumbs={[
						{
							href: '/',
							label: 'Home',
						},
						{
							label: 'Roadmap',
						},
					]}
				>
					<PageTitle
						pretext="Last updated March 3rd 2023."
						title="Roadmap"
						introduction="Our roadmap is always evolving with the needs of our product teams."
					/>
					<Prose>
						<p>
							This page should be used as a general guide to see the big pieces
							of work we are currently looking at, or almost ready to start.
						</p>

						<h2>Work in progress</h2>
						<p>We are currently working on the following features:</p>

						<ul>
							<li>Table filtering and sort patterns</li>
							<li>Multi-select patterns</li>
							<li>DatePicker and DateRangePicker improvements</li>
							<li>Application shell for Export Service authenticated space</li>
							<li>Improving SideNav design</li>
						</ul>

						<h2>Coming up soon</h2>
						<p>These features are in the pipeline for the coming weeks:</p>
						<ul>
							<li>DateInput component</li>
							<li>Content guidance on the AgDS Website</li>
							<li>New LinkList</li>
						</ul>

						<h2>Recently shipped</h2>
						<p>
							These features have been recently shipped and are available in the
							most recent releases:
						</p>
						<ul>
							<li><TextLink href="/components/avatar">Avatar</TextLink></li>
							<li><TextLink href="/components/file-input">File input</TextLink></li>
							<li><TextLink href="/updates/2023-01-09-beta">Our Beta release</TextLink></li>
						</ul>

						<p>
							For more detailed release notes, see{' '}
							<TextLink href="/updates">Updates</TextLink>
						</p>
					</Prose>
				</PageLayout>
			</AppLayout>
		</>
	);
}

import { Prose } from '@ag.ds-next/react/prose';
import { TextLink } from '@ag.ds-next/react/text-link';
import { SiteLayout } from '../components/SiteLayout';
import { DocumentTitle } from '../components/DocumentTitle';
import { PageLayout } from '../components/PageLayout';
import { PageTitle } from '../components/PageTitle';

export default function RoadmapPage() {
	return (
		<>
			<DocumentTitle title="AgDS Roadmap" />
			<SiteLayout applyMainElement={false}>
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
					editPath="/docs/pages/roadmap.tsx"
				>
					<PageTitle
						title="Roadmap"
						introduction="Our roadmap is always evolving with the needs of our product teams. This page should be used as a general guide to see the big pieces
						of work we are currently looking at, or almost ready to start."
					/>
					<Prose>
						<h2>Work in progress</h2>
						<p>We are currently working on the following features:</p>

						<ul>
							<li>Table filtering and sort patterns</li>
							<li>DatePicker and DateRangePicker improvements</li>
							<li>Application shell for Export Service authenticated space</li>
						</ul>

						<h2>Coming up soon</h2>
						<p>These features are in the pipeline for the near future:</p>
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
							<li>
								<TextLink href="/updates/2023-01-09-beta">
									Beta release
								</TextLink>
							</li>
							<li>
								<TextLink href="/components/avatar">Avatar</TextLink>
							</li>
							<li>
								<TextLink href="/components/file-input">File input</TextLink>
							</li>
							<li>
								<TextLink href="/patterns/selecting-multiple-options">
									Multi-select pattern
								</TextLink>
							</li>
							<li>
								<TextLink href="/components/side-nav">
									Updated Side nav design
								</TextLink>
							</li>
						</ul>
						<p>
							For more detailed release notes,{' '}
							<TextLink href="/updates">view updates</TextLink>.
						</p>
						<p>Last updated April 19th 2023.</p>
					</Prose>
				</PageLayout>
			</SiteLayout>
		</>
	);
}

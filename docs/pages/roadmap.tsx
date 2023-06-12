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
					breadcrumbs={[{ href: '/', label: 'Home' }, { label: 'Roadmap' }]}
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
							<li>Content guidance on the AgDS Website</li>
							<li>Messaging patterns</li>
						</ul>

						<h2>Coming up soon</h2>
						<p>These features are in the pipeline for the near future:</p>
						<ul>
							<li>New Link list</li>
							<li>New Date input component</li>
						</ul>

						<h2>Recently shipped</h2>
						<p>
							These features have been recently shipped and are available in the
							most recent releases:
						</p>
						<ul>
							<li>
								<TextLink href="/updates/2023-01-09-beta">
									AgDS Beta release
								</TextLink>
							</li>
							<li>
								New{' '}
								<TextLink href="/components/app-layout">
									App layout component
								</TextLink>{' '}
								for Export Service authenticated space
							</li>
							<li>
								Improvements to{' '}
								<TextLink href="/components/date-picker">Date picker</TextLink>{' '}
								and{' '}
								<TextLink href="/components/date-range-picker">
									Date range picker
								</TextLink>{' '}
							</li>
							<li>
								New <TextLink href="/components/avatar">Avatar</TextLink>{' '}
								component
							</li>
							<li>
								New{' '}
								<TextLink href="/components/file-input">File input</TextLink>{' '}
								component
							</li>
							<li>
								Updated{' '}
								<TextLink href="/components/side-nav">Side nav</TextLink>{' '}
								component design{' '}
							</li>
							<li>
								New{' '}
								<TextLink href="/patterns/selecting-multiple-options">
									Selecting multiple options
								</TextLink>{' '}
								patterns
							</li>
							<li>
								New{' '}
								<TextLink href="/patterns/conditional-reveal">
									Conditionally revealed questions
								</TextLink>{' '}
								pattern
							</li>
						</ul>
						<p>
							For more detailed release notes,{' '}
							<TextLink href="/updates">view updates</TextLink>.
						</p>
						<p>Last updated 12th June 2023.</p>
					</Prose>
				</PageLayout>
			</SiteLayout>
		</>
	);
}

import { PageContent } from '@ag.ds-next/react/content';
import { Prose } from '@ag.ds-next/react/prose';
import { AppLayout } from '../components/AppLayout';
import { DocumentTitle } from '../components/DocumentTitle';

export default function AboutPage() {
	return (
		<>
			<DocumentTitle title="AgDS Roadmap" />
			<AppLayout>
				<PageContent
					as="main"
					id="main-content"
					tabIndex={-1}
					css={{ '&:focus': { outline: 'none' } }}
				>
					<Prose>
						<h1>Roadmap</h1>
						<p>
							Our roadmap is always evolving with the needs of our product
							teams. This page should be used as a general guide to see the big
							pieces of work we are currently looking at, or almost ready to
							start.
						</p>

						<p>Last updated March 3rd 2023.</p>

						<h2>Work in progress</h2>
						<p>We are currently working on the following features:</p>

						<ul>
							<li>Table filtering and sort patterns</li>
							<li>Multi-select patterns</li>
							<li>DatePicker and DateRangePicker improvements</li>
							<li>Application shell for Export Service authenticated space</li>
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
							<li>Avatar</li>
							<li>FileInput</li>
							<li>Our Beta release</li>
						</ul>

						<p>
							For more detailed release notes, see{' '}
							<a href="/updates">Updates</a>
						</p>
					</Prose>
				</PageContent>
			</AppLayout>
		</>
	);
}

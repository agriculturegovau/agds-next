import { Prose } from '@ag.ds-next/react/prose';
import { TextLink } from '@ag.ds-next/react/text-link';
import { AppLayout } from '../components/AppLayout';
import { DocumentTitle } from '../components/DocumentTitle';
import { PageLayout } from '../components/PageLayout';
import { PageTitle } from '../components/PageTitle';

export default function AboutPage() {
	return (
		<>
			<DocumentTitle title="About AgDS" />
			<AppLayout applyMainElement={false}>
				<PageLayout
					breadcrumbs={[
						{
							href: '/',
							label: 'Home',
						},
						{
							label: 'About',
						},
					]}
				>
					<PageTitle
						title="About AgDS"
						introduction="The Agriculture Design System (AgDS) is the Design System built
					for the Australian Government Department of Agriculture, Fisheries
					and Forestry (DAFF)."
					/>
					<Prose>
						<p>
							It is a suite of guidelines and tools for designers and developers
							who build interactive experiences on the web. It enables
							consistent, intuitive and accessible applications with efficiency
							and scale - while also promoting collaboration between product
							teams.
						</p>

						<p>
							Its primary purpose is for building the Export Service, however is
							also in use in other areas of the Department such as NEXDOC and
							BioSecurity.
						</p>

						<p>The toolkit includes...</p>

						<ul>
							<li>
								<TextLink href="/components">
									A React component library
								</TextLink>
							</li>
							<li>
								<TextLink href="/guides/figma">
									A library of Figma components
								</TextLink>
							</li>
							<li>
								A suite of <TextLink href="/templates">page templates</TextLink>{' '}
								and interaction patterns
							</li>
							<li>Comprehensive documentation</li>
							<li>A collaborative community of designers and developers</li>
						</ul>

						<h2>Accessibility from the start</h2>

						<p>
							AgDS is based on the{' '}
							<a href="https://gold.designsystemau.org/">GOLD Design System</a>{' '}
							which incorporates the highest usability and accessibility
							standards, helping us to deliver a consistent experience for all
							users, in line with the{' '}
							<a href="https://www.dta.gov.au/help-and-advice/about-digital-service-standard">
								Digital Service Standard
							</a>
							.
						</p>

						<p>
							The Agriculture Design System is the best way to ensure we meet
							our legal obligations to ensure accessibility. Under the
							Disability Discrimination Act 1992, Australian Government agencies
							are required to ensure information and services are provided in a
							non-discriminatory accessible manner. That is why AgDS&apos;s
							suite of components, templates and guides are designed with
							accessibility built-in.
						</p>

						<h2>Connect with us</h2>
						<p>
							Department of Agriculture Fisheries and Forestry staff can connect
							with us in the &rdquo;Design System&rdquo; chat in Microsoft
							Teams. Otherwise you are welcome to submit pull requests to{' '}
							<a href="httsps://github.com/steelthreads/agds-next">GitHub</a>.
						</p>

						<p>
							If you&apos;re wondering what is next, please see our{' '}
							<TextLink href="/roadmap">roadmap</TextLink>.
						</p>
					</Prose>
				</PageLayout>
			</AppLayout>
		</>
	);
}

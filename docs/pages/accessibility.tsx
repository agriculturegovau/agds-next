import { PageContent } from '@ag.ds-next/content';
import { Stack } from '@ag.ds-next/box';
import { Columns, Column } from '@ag.ds-next/columns';
import { Prose } from '@ag.ds-next/prose';
import { AppLayout } from '../components/AppLayout';
import { DocumentTitle } from '../components/DocumentTitle';
import { PageTitle } from '../components/PageTitle';

export default function AccessibilityStatement() {
	return (
		<>
			<DocumentTitle title="Accessibility statement" />
			<AppLayout>
				<PageContent as="main" id="main-content">
					<Columns>
						<Column columnSpan={{ xs: 12, md: 7 }}>
							<Stack gap={3}>
								<PageTitle
									title="Accessibility statement"
									introduction="This is an accessibility statement from the Department of Agriculture, Fisheries and Forestry."
								/>
								<Prose>
									<h2>Measures to support accessibility</h2>
									<p>
										The Department of Agriculture, Fisheries and Forestry takes
										the following measures to ensure accessibility of the
										Agriculture Design System:
									</p>
									<ul>
										<li>
											Includes accessibility as part of our mission statement
										</li>
										<li>
											Includes accessibility throughout our internal policies
										</li>
										<li>
											Integrates accessibility into our procurement practices
										</li>
										<li>
											Assigns clear accessibility goals and responsibilities
										</li>
										<li>
											Employs formal accessibility quality assurance methods
										</li>
									</ul>
									<h2>Conformance status</h2>
									<p>
										The{' '}
										<a href="https://www.w3.org/WAI/standards-guidelines/wcag/">
											Web Content Accessibility Guidelines (WCAG)
										</a>{' '}
										defines requirements for designers and developers to improve
										accessibility for people with disabilities. It defines three
										levels of conformance: Level A, Level AA, and Level AAA. The
										Agriculture Design System is partially conformant with WCAG
										2.1 level AA. Partially conformant means that some parts of
										the content do not fully conform to the accessibility
										standard.
									</p>
									<h2>Compatibility with browsers and assistive technology</h2>
									<p>
										The Agriculture Design System is designed to be compatible
										with assistive technologies and the last two versions of
										major browsers.
									</p>
									<p>
										The Agriculture Design System does not support older
										browsers or Internet Explorer 11 and below.
									</p>
									<h2>Technical specifications</h2>
									<p>
										Accessibility of the Agriculture Design System relies on the
										following technologies to work with the particular
										combination of web browser and any assistive technologies or
										plugins installed on your computer:
									</p>
									<ul>
										<li>HTML</li>
										<li>WAI-ARIA</li>
										<li>CSS</li>
										<li>SVG</li>
										<li>JavaScript</li>
									</ul>
									<p>
										These technologies are relied upon for conformance with the
										accessibility standards used.
									</p>
									<h2>Assessment approach</h2>
									<p>
										The Department of Agriculture, Fisheries and Forestry
										assessed the accessibility of the Agriculture Design System
										by the following approaches:
									</p>
									<ul>
										<li>Self-evaluation</li>
										<li>External evaluation</li>
									</ul>
									<hr />
									<h2>Date</h2>
									<p>
										This statement was created on 21 October 2022 using the{' '}
										<a href="https://www.w3.org/WAI/planning/statements/">
											W3C Accessibility Statement Generator Tool
										</a>
										.
									</p>
								</Prose>
							</Stack>
						</Column>
					</Columns>
				</PageContent>
			</AppLayout>
		</>
	);
}

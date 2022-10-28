import { Prose, proseBlockClassname } from '@ag.ds-next/react/prose';
import {
	SummaryList,
	SummaryListItem,
	SummaryListItemDescription,
	SummaryListItemTerm,
} from '@ag.ds-next/react/summary-list';
import { DocumentTitle } from '../../components/DocumentTitle';
import { TokenLayout } from '../../components/TokenLayout';
import { SpacingChart } from '../../components/TokenCharts';

export default function TokensSpacingPage() {
	return (
		<>
			<DocumentTitle title="Spacing tokens" />
			<TokenLayout
				title="Spacing tokens"
				description="Space is the distance between interface elements. It can affect grouping, visual hierarchy, and aesthetics."
				editPath="/docs/pages/tokens/spacing.tsx"
			>
				<Prose>
					<p>
						Use the following guidelines when making decisions about spacing:
					</p>
					<ul>
						<li>
							The amount of spacing between elements should depend on how
							closely related they are.
						</li>
						<li>
							Elements spaced closer together appear to be grouped and are
							assumed to be related.
						</li>
						<li>Placing more space between elements helps separate them.</li>
						<li>
							Placing more space around elements can help make them more
							prominent.
						</li>
						<li>
							Ensure there’s sufficient space between elements to help users
							distinguish between them.
						</li>
					</ul>
					<h2>Spacing tokens</h2>
					<p>
						All spacing between interface elements should use the following
						predefined spacing options to help ensure consistency and speed up
						design and development time.
					</p>
					<p>
						Spacing options are based on increments of 8px in order to align to
						an 8px grid.
					</p>
					<SpacingChart />
					<h2>How to use spacing tokens</h2>
					<p>
						In order to improve consistency, each spacing token is used for a
						specific purpose. More closely related elements have less spacing
						between them.
					</p>
					<div className={proseBlockClassname}>
						<SummaryList>
							<SummaryListItem>
								<SummaryListItemTerm>0.5rem (8px)</SummaryListItemTerm>
								<SummaryListItemDescription>
									<ul>
										<li>Spacing between icons and text.</li>
										<li>Spacing between labels/hints and input fields.</li>
									</ul>
								</SummaryListItemDescription>
							</SummaryListItem>

							<SummaryListItem>
								<SummaryListItemTerm>1rem (16px)</SummaryListItemTerm>
								<SummaryListItemDescription>
									<ul>
										<li>
											Used in medium sized components, like callouts, for the
											space between typography.
										</li>
										<li>
											Used for the padding in small sized components like
											accordions.
										</li>
									</ul>
								</SummaryListItemDescription>
							</SummaryListItem>
							<SummaryListItem>
								<SummaryListItemTerm>1.5rem (24px)</SummaryListItemTerm>
								<SummaryListItemDescription>
									<ul>
										<li>Used for the gutter between layout columns.</li>
										<li>
											Used for the padding inside medium sized components, like
											callouts, cards, and page alerts.
										</li>
										<li>
											Used as a top margin for paragraphs in prose body text.
										</li>
									</ul>
								</SummaryListItemDescription>
							</SummaryListItem>
							<SummaryListItem>
								<SummaryListItemTerm>2rem (32px)</SummaryListItemTerm>
								<SummaryListItemDescription>
									<ul>
										<li>
											Used in SectionStack as the gap between components and
											text content.
										</li>
										<li>Used in FormStack as the gap between fields.</li>
									</ul>
								</SummaryListItemDescription>
							</SummaryListItem>
							<SummaryListItem>
								<SummaryListItemTerm>3rem (48px)</SummaryListItemTerm>
								<SummaryListItemDescription>
									<ul>
										<li>
											Used in SectionContent as the gap between component
											blocks.
										</li>
										<li>
											Used in forms as the gap between fieldsets and input
											groups.
										</li>
									</ul>
								</SummaryListItemDescription>
							</SummaryListItem>
							<SummaryListItem>
								<SummaryListItemTerm>4rem (64px)</SummaryListItemTerm>
								<SummaryListItemDescription>
									<ul>
										<li>Used for the bottom padding in PageContent.</li>
										<li>Used for top and bottom padding in SectionContent.</li>
									</ul>
								</SummaryListItemDescription>
							</SummaryListItem>
						</SummaryList>
					</div>
				</Prose>
			</TokenLayout>
		</>
	);
}

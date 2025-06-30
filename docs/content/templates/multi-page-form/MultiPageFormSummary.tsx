import { FormStack } from '@ag.ds-next/react/form-stack';
import { Prose } from '@ag.ds-next/react/prose';
import { Stack } from '@ag.ds-next/react/stack';
import { Checkbox } from '@ag.ds-next/react/checkbox';
import { ControlGroup } from '@ag.ds-next/react/control-group';
import { H2 } from '@ag.ds-next/react/heading';
import { Button, ButtonGroup, ButtonLink } from '@ag.ds-next/react/button';
import {
	SummaryList,
	SummaryListItem,
	SummaryListItemDescription,
	SummaryListItemTerm,
} from '@ag.ds-next/react/summary-list';
import { ContentBleed, PageContent } from '@ag.ds-next/react/content';
import { Column, Columns } from '@ag.ds-next/react/columns';
import { ProgressIndicator } from '@ag.ds-next/react/progress-indicator';
import { DirectionButton } from '@ag.ds-next/react/direction-link';
import { Divider } from '@ag.ds-next/react/divider';
import { PageTitle } from '../../../components/PageTitle';

export function MultiPageFormSummary() {
	return (
		<PageContent>
			<Columns>
				<Column columnSpan={{ xs: 12, md: 4, lg: 3 }}>
					<ContentBleed visible={{ md: false }}>
						<ProgressIndicator
							activePath="#3"
							items={[
								{ label: 'Step 1', status: 'done', href: '#1' },
								{ label: 'Step 2', status: 'done', href: '#2' },
								{ label: 'Step 3', status: 'started', href: '#3' },
							]}
						/>
					</ContentBleed>
				</Column>
				<Column columnSpan={{ xs: 12, md: 8 }} columnStart={{ lg: 5 }}>
					<Stack gap={3}>
						<DirectionButton direction="left">Back</DirectionButton>
						<PageTitle
							title="Review and submit (H1)"
							introduction="The introductory paragraph provides context about this page of
							the form. Use a short paragraph to reduce cognitive load."
						/>
						{/** Summary: Step 1 */}
						<Stack gap={1.5} alignItems="flex-start">
							<H2>Step 1 summary</H2>
							<SummaryList>
								<SummaryListItem>
									<SummaryListItemTerm>Fieldset question</SummaryListItemTerm>
									<SummaryListItemDescription>
										Answer
									</SummaryListItemDescription>
								</SummaryListItem>
							</SummaryList>
							<ButtonLink variant="text" href="#">
								Change
							</ButtonLink>
						</Stack>
						{/** Summary: Step 2 */}
						<Stack gap={1.5} alignItems="flex-start">
							<H2>Step 2 summary</H2>
							<SummaryList>
								<SummaryListItem>
									<SummaryListItemTerm>Fieldset question</SummaryListItemTerm>
									<SummaryListItemDescription>
										Answer
									</SummaryListItemDescription>
								</SummaryListItem>
								<SummaryListItem>
									<SummaryListItemTerm>Second question</SummaryListItemTerm>
									<SummaryListItemDescription>
										Second answer
									</SummaryListItemDescription>
								</SummaryListItem>
							</SummaryList>
							<ButtonLink variant="text" href="#">
								Change
							</ButtonLink>
						</Stack>
						{/** Declaration form */}
						<Stack as="form" gap={3} noValidate>
							<FormStack>
								<Prose>
									<h2>Declaration</h2>
									<p>I declare that:</p>
									<ul>
										<li>
											The information I have provided on behalf of the applicant
											is true and accurate
										</li>
										<li>I have read and understood the terms and conditions</li>
									</ul>
								</Prose>
								<ControlGroup label="Declaration agreement" block required>
									<Checkbox>
										I confirm that I have read and agree with the above
										declaration
									</Checkbox>
								</ControlGroup>
							</FormStack>
							<Divider />
							<ButtonGroup>
								<Button type="submit" variant="primary">
									Submit form
								</Button>
								<Button type="button" variant="secondary">
									Save and exit
								</Button>
								<Button type="button" variant="tertiary">
									Cancel
								</Button>
							</ButtonGroup>
						</Stack>
					</Stack>
				</Column>
			</Columns>
		</PageContent>
	);
}

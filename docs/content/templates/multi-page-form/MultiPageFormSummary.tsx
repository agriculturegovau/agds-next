import { FormStack } from '@ag.ds-next/react/form-stack';
import { Prose } from '@ag.ds-next/react/prose';
import { Stack } from '@ag.ds-next/react/stack';
import { Checkbox } from '@ag.ds-next/react/checkbox';
import { ControlGroup } from '@ag.ds-next/react/control-group';
import { H1, H2 } from '@ag.ds-next/react/heading';
import { Text } from '@ag.ds-next/react/text';
import { ButtonLink } from '@ag.ds-next/react/button';
import {
	SummaryList,
	SummaryListItem,
	SummaryListItemDescription,
	SummaryListItemTerm,
} from '@ag.ds-next/react/summary-list';
import { PageContent } from '@ag.ds-next/react/content';
import { Column, Columns } from '@ag.ds-next/react/columns';
import { ContentBleed } from '@ag.ds-next/react/content';
import { ProgressIndicator } from '@ag.ds-next/react/progress-indicator';
import { DirectionButton } from '@ag.ds-next/react/direction-link';
import { Divider } from '@ag.ds-next/react/divider';
import { Button, ButtonGroup } from '@ag.ds-next/react/button';

export const MultiPageFormSummary = () => {
	return (
		<PageContent>
			<Columns>
				<Column columnSpan={{ xs: 12, md: 4, lg: 3 }}>
					<ContentBleed visible={{ md: false }}>
						<ProgressIndicator
							items={[
								{ label: 'Step 1', status: 'done', href: '#' },
								{ label: 'Step 2', status: 'done', href: '#' },
								{ label: 'Step 3', status: 'doing', href: '#' },
							]}
						/>
					</ContentBleed>
				</Column>
				<Column columnSpan={{ xs: 12, md: 8 }} columnStart={{ lg: 5 }}>
					<Stack gap={3} alignItems="flex-start">
						<DirectionButton direction="left">Back</DirectionButton>

						<Stack gap={3}>
							<Stack>
								<Text
									display="block"
									fontSize="sm"
									color="muted"
									fontWeight="bold"
									lineHeight="heading"
								>
									Title of multi-page form
								</Text>
								<H1>Confirm and submit (H1)</H1>
								<Text as="p" fontSize="md" color="muted">
									The introductory paragraph provides context about this page of
									the form. Use a short paragraph to reduce cognitive load.
								</Text>
							</Stack>

							<Stack gap={1.5} alignItems="flex-start">
								<H2>Summary from the first form page</H2>
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
												The information I have provided on behalf of the
												applicant is true and accurate
											</li>
											<li>
												I have read and understood the terms and conditions
											</li>
										</ul>
									</Prose>
									<ControlGroup label="Declaration agreement" block required>
										<Checkbox>
											I confirm that I have read and agree with the above
											declaration
										</Checkbox>
									</ControlGroup>
								</FormStack>
								<Stack gap={3}>
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
						</Stack>
					</Stack>
				</Column>
			</Columns>
		</PageContent>
	);
};

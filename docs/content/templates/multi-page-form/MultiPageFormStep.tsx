import { Stack } from '@ag.ds-next/react/stack';
import { PageContent } from '@ag.ds-next/react/content';
import { Column, Columns } from '@ag.ds-next/react/columns';
import { ContentBleed } from '@ag.ds-next/react/content';
import { ProgressIndicator } from '@ag.ds-next/react/progress-indicator';
import { DirectionButton } from '@ag.ds-next/react/direction-link';
import { Divider } from '@ag.ds-next/react/divider';
import { Button, ButtonGroup } from '@ag.ds-next/react/button';
import { Text } from '@ag.ds-next/react/text';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { Textarea } from '@ag.ds-next/react/textarea';
import { PageTitle } from '../../../components/PageTitle';

export const MultiPageFormStep = () => (
	<PageContent>
		<Columns>
			<Column columnSpan={{ xs: 12, md: 4, lg: 3 }}>
				<ContentBleed visible={{ md: false }}>
					<ProgressIndicator
						items={[
							{ label: 'Step 1', status: 'done', href: '#' },
							{ label: 'Step 2', status: 'doing', href: '#' },
							{ label: 'Step 3', status: 'blocked', href: '#' },
						]}
					/>
				</ContentBleed>
			</Column>
			<Column columnSpan={{ xs: 12, md: 8 }} columnStart={{ lg: 5 }}>
				<Stack gap={3} alignItems="flex-start">
					<DirectionButton direction="left">Back</DirectionButton>
					<PageTitle
						pretext="Title of multi-page form"
						title="Form step title (H1)"
						introduction="The introductory paragraph provides context about this page of the
						form. Use a short paragraph to reduce cognitive load."
						callToAction={
							<Text as="p" fontSize="xs" color="muted">
								All fields are required unless marked optional.
							</Text>
						}
					/>
					<Stack as="form" gap={3} noValidate>
						<FormStack>
							<Textarea
								label="Text area field label"
								hint="Hint text"
								id="description"
								required
								block
							/>
						</FormStack>
						<Divider />
						<ButtonGroup>
							<Button type="submit" variant="primary">
								Save and continue
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

import { format } from 'date-fns';
import { Button, ButtonGroup } from '@ag.ds-next/react/button';
import { Modal } from '@ag.ds-next/react/modal';
import { Stack } from '@ag.ds-next/react/stack';
import { Text } from '@ag.ds-next/react/text';
import { useTernaryState } from '@ag.ds-next/react/core';
import { DeleteIcon } from '@ag.ds-next/react/icon';
import { StatusBadge } from '@ag.ds-next/react/status-badge';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
	TableWrapper,
} from '@ag.ds-next/react/table';
import { H2 } from '@ag.ds-next/react/heading';
import { TextLink } from '@ag.ds-next/react/text-link';
import { mockApplicationHistory } from '../../data/mockLicencesAndPermits';
import { useGlobalForm } from './GlobalFormProvider';
import { FormState } from './FormState';

type MockApplicationHistoryItem = (typeof mockApplicationHistory)[number];
type Application = MockApplicationHistoryItem | FormState;

function isMockApplicationHistoryItem(
	application: Application
): application is MockApplicationHistoryItem {
	return (application as MockApplicationHistoryItem).status !== undefined;
}

export function ApplicationHistory() {
	const [isModalOpen, openModal, closeModal] = useTernaryState(false);

	const { formState } = useGlobalForm();

	const hasNewApplication = !!formState?.id;

	const applications: Application[] = [
		hasNewApplication ? formState : undefined,
		...mockApplicationHistory,
	].filter((app): app is Application => Boolean(app));

	return (
		<Stack gap={1.5}>
			<H2 id="current-approvals-heading">Application history</H2>
			<TableWrapper>
				<Table aria-labelledby="current-approvals-heading">
					<TableHead>
						<TableRow>
							<TableHeader scope="col" width="18%">
								Reference number
							</TableHeader>
							<TableHeader scope="col" width="27%">
								Type
							</TableHeader>
							<TableHeader scope="col" width="25%">
								Status
							</TableHeader>
							<TableHeader scope="col" width="20%">
								Last updated
							</TableHeader>
							<TableHeader scope="col" width="10%">
								Actions
							</TableHeader>
						</TableRow>
					</TableHead>
					<TableBody>
						{applications.map((application) =>
							application ? (
								<TableRow key={application.id}>
									<TableCell as="th" fontWeight="bold" scope="row">
										<TextLink
											href={`/app/licences-and-permits/${application.id}`}
											id={`ref-${application.id}`}
										>
											{application.id}
										</TextLink>
									</TableCell>
									<TableCell>{application.type}</TableCell>
									<TableCell>
										{isMockApplicationHistoryItem(application) ? (
											<StatusBadge
												appearance="subtle"
												{...application.status}
											/>
										) : application?.completed ? (
											<StatusBadge
												appearance="subtle"
												tone="successMedium"
												label="Submitted"
											/>
										) : (
											<StatusBadge
												appearance="subtle"
												tone="inProgressLow"
												label="In progress"
											/>
										)}
									</TableCell>
									<TableCell>
										{format(application.lastUpdated, 'dd MMM yyyy')}
									</TableCell>
									<TableCell>
										<Button
											aria-describedby={`ref-${application.id}`}
											iconBefore={DeleteIcon}
											onClick={openModal}
											size="sm"
											variant="text"
										>
											Remove
										</Button>
									</TableCell>
								</TableRow>
							) : null
						)}
					</TableBody>
				</Table>
			</TableWrapper>
			<Modal
				isOpen={isModalOpen}
				onClose={closeModal}
				title="Are you sure you want to remove this application?"
				actions={
					<ButtonGroup>
						<Button onClick={closeModal}>Yes, remove</Button>
						<Button variant="secondary" onClick={closeModal}>
							No
						</Button>
					</ButtonGroup>
				}
			>
				<Text as="p">
					Note: this is for demonstration purposes only and does not function.
				</Text>
			</Modal>
		</Stack>
	);
}

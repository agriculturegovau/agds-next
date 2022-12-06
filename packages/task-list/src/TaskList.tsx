import { Stack } from '@ag.ds-next/box';
import { H2 } from '@ag.ds-next/heading';
import { Text } from '@ag.ds-next/text';
import { TaskListContainer } from './TaskListContainer';
import {
	TaskListItemButton,
	TaskListItemButtonProps,
	TaskListItemLink,
	TaskListItemLinkProps,
} from './TaskListItem';

type TaskListItem = (TaskListItemButtonProps | TaskListItemLinkProps) & {
	label: string;
	message?: string;
};

export type TaskListProps = {
	items: TaskListItem[];
	ordered?: boolean;
};

export const TaskList = ({ items, ordered }: TaskListProps) => {
	const stepsCompleted = items.filter((item) => item.status === 'done').length;
	const totalSteps = items.length;
	const subHeading = `${stepsCompleted} of ${totalSteps} steps completed`;

	return (
		<Stack gap={1.5}>
			<Stack gap={1}>
				<H2>Task list</H2>
				<Text fontSize="sm" color="muted">
					{subHeading}
				</Text>
			</Stack>
			<TaskListContainer as={ordered ? 'ol' : 'ul'}>
				{items.map(({ label, ...props }, index) => {
					if (isItemLink(props)) {
						return (
							<TaskListItemLink key={index} ordered={ordered} {...props}>
								{label}
							</TaskListItemLink>
						);
					}
					return (
						<TaskListItemButton key={index} ordered={ordered} {...props}>
							{label}
						</TaskListItemButton>
					);
				})}
			</TaskListContainer>
		</Stack>
	);
};
const isItemLink = (
	item: Omit<TaskListItem, 'label'>
): item is TaskListItemLinkProps => 'href' in item;

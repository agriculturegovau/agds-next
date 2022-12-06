import { TaskListContainer } from './TaskListContainer';
import { TaskListHeading } from './TaskListHeading';
import { TaskListItemsContainer } from './TaskListItemsContainer';
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
	return (
		<TaskListContainer>
			<TaskListHeading
				stepsCompleted={stepsCompleted}
				totalSteps={totalSteps}
			/>
			<TaskListItemsContainer as={ordered ? 'ol' : 'ul'}>
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
			</TaskListItemsContainer>
		</TaskListContainer>
	);
};
const isItemLink = (
	item: Omit<TaskListItem, 'label'>
): item is TaskListItemLinkProps => 'href' in item;

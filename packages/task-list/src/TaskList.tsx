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

export const TaskList = ({ items, ordered = true }: TaskListProps) => (
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
);

const isItemLink = (
	item: Omit<TaskListItem, 'label'>
): item is TaskListItemLinkProps => 'href' in item;

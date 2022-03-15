import { TaskListContainer } from './TaskListContainer';
import {
	TaskListItemButton,
	TaskListItemButtonProps,
	TaskListItemLink,
	TaskListItemLinkProps,
} from './TaskListItem';

type TaskListItem = (
	| Omit<TaskListItemButtonProps, 'children'>
	| Omit<TaskListItemLinkProps, 'children'>
) & {
	label: string;
};

export type TaskListProps = {
	items: TaskListItem[];
};

export const TaskList = ({ items }: TaskListProps) => (
	<TaskListContainer>
		{items.map(({ label, ...props }, index) => {
			if (isItemLink(props)) {
				return (
					<TaskListItemLink key={index} {...props}>
						{label}
					</TaskListItemLink>
				);
			}
			return (
				<TaskListItemButton key={index} {...props}>
					{label}
				</TaskListItemButton>
			);
		})}
	</TaskListContainer>
);

const isItemLink = (
	item: Omit<TaskListItem, 'label'>
): item is TaskListItemLinkProps => 'href' in item;

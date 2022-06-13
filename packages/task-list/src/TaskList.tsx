import { BaseButton } from '@ag.ds-next/button';
import { useLinkComponent } from '@ag.ds-next/core';
import { TaskListContainer } from './TaskListContainer';
import { TaskListItem, TaskListItemProps } from './TaskListItem';

export type TaskListProps = {
	items: (Omit<TaskListItemProps, 'children'> & {
		label: string;
		message?: string;
	})[];
	ordered?: boolean;
};

export const TaskList = ({ items, ordered = true }: TaskListProps) => {
	const Link = useLinkComponent();
	return (
		<TaskListContainer as={ordered ? 'ol' : 'ul'}>
			{items.map(({ label, ...props }, index) => (
				<TaskListItem
					key={index}
					as={'href' in props ? Link : BaseButton}
					ordered={ordered}
					{...props}
				>
					{label}
				</TaskListItem>
			))}
		</TaskListContainer>
	);
};

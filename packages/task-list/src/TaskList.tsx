import { ButtonHTMLAttributes, MouseEventHandler } from 'react';
import { BaseButton } from '@ag.ds-next/button';
import { LinkProps, useLinkComponent } from '@ag.ds-next/core';
import { TaskListContainer } from './TaskListContainer';
import { TaskListItem, TaskListItemProps } from './TaskListItem';

type ButtonAttributes = Omit<
	ButtonHTMLAttributes<HTMLButtonElement>,
	'children'
> & {
	onClick: MouseEventHandler<HTMLButtonElement>;
};

type AnchorAttributes = Omit<LinkProps, 'children'> & {
	href: NonNullable<LinkProps['href']>;
};

export type TaskListProps = {
	items: ((ButtonAttributes | AnchorAttributes) &
		Pick<TaskListItemProps, 'status'> & {
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

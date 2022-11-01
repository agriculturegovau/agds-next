import { ReactNode } from 'react';
import { Box } from '@ag.ds-next/box';
import { TagsContainer } from './TagsContainer';
import { Tag, TagProps } from './Tag';
import { TagsList } from './TagsList';

export type TagsProps = {
	heading?: ReactNode;
	items: Omit<TagProps, 'children'> & { label: ReactNode }[];
};

export const Tags = ({ items, heading }: TagsProps) => (
	<TagsContainer>
		{heading}
		<TagsList>
			{items.map(({ label, ...props }, index) => (
				<Box as="li" key={index}>
					<Tag {...props}>{label}</Tag>
				</Box>
			))}
		</TagsList>
	</TagsContainer>
);

import { ReactNode } from 'react';
import { Box } from '../box';
import { TagsContainer } from './TagsContainer';
import { Tag, TagProps } from './Tag';
import { TagsList } from './TagsList';

export type TagsProps = {
	heading?: ReactNode;
	items: (Omit<TagProps, 'children'> & { label: string })[];
};

export const Tags = ({ items, heading }: TagsProps) => (
	<TagsContainer>
		{heading}
		<TagsList>
			{items.map((props, index) => (
				<Box as="li" key={index}>
					<Tag {...props} />
				</Box>
			))}
		</TagsList>
	</TagsContainer>
);

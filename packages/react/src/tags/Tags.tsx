import { forwardRef, ReactNode, useRef } from 'react';
import { Box } from '../box';
import { mergeRefs } from '../core';
import { Tag, TagProps } from './Tag';
import { TagsContainer } from './TagsContainer';
import { TagsList } from './TagsList';

export type TagsProps = {
	heading?: ReactNode;
	items: Omit<TagProps, 'children'> & { label: string }[];
};

export const Tags = forwardRef<HTMLDivElement, TagsProps>(function Tags(
	{ heading, items },
	forwardedRef
) {
	const ref = useRef<HTMLDivElement>(null);
	const listRef = mergeRefs([ref, forwardedRef]);
	const focusOnRemove = (index: number) => {
		const nextButtonToFocus =
			listRef?.current &&
			listRef.current.querySelectorAll('button')[Math.max(0, index - 1)];
		nextButtonToFocus?.focus();
	};
	return (
		<TagsContainer ref={listRef}>
			{heading}
			<TagsList>
				{items.map(({ label, ...props }, index) => (
					<Box as="li" key={index}>
						<Tag {...props} focusOnRemove={focusOnRemove} index={index}>
							{label}
						</Tag>
					</Box>
				))}
			</TagsList>
		</TagsContainer>
	);
});

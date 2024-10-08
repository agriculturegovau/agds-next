import { forwardRef, ReactNode, useRef } from 'react';
import { Box } from '../box';
import { mergeRefs } from '../core';
import { Tag, TagProps } from './Tag';
import { TagsContainer } from './TagsContainer';
import { TagsList } from './TagsList';

export type TagsProps = {
	heading?: ReactNode;
	items: Omit<TagProps, 'children' | 'focusOnRemove'> & { label: string }[];
};

export const Tags = forwardRef<HTMLDivElement, TagsProps>(function Tags(
	{ heading, items },
	forwardedRef
) {
	const ref = useRef<HTMLDivElement>(null);
	const focusOnRemove = (index: number) => {
		const nextButtonToFocus =
			ref?.current &&
			ref.current.querySelectorAll('button')[Math.max(0, index - 1)];
		nextButtonToFocus?.focus();
	};

	return (
		<TagsContainer ref={mergeRefs([ref, forwardedRef])}>
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

import { forwardRef, HTMLAttributes, MouseEvent } from 'react';
import { Flex } from '../../box';
import { boxPalette, mapSpacing } from '../../core';
import { CloseIcon } from '../../icon';

export type TagProps = Omit<
	HTMLAttributes<HTMLSpanElement>,
	'children' | 'color'
> & {
	children: string;
	onRemove: () => void;
};

export const Tag = forwardRef<HTMLSpanElement, TagProps>(function Tag(
	{ children, onRemove, ...props },
	ref
) {
	return (
		<Flex
			ref={ref}
			as="span"
			inline
			alignItems="center"
			border
			rounded
			paddingLeft={0.5}
			paddingRight={0.25}
			gap={0.25}
			fontSize="sm"
			color="text"
			focus
			css={{ cursor: 'pointer' }}
			{...props}
		>
			{children}
			<Flex
				as="span"
				height={mapSpacing(1.5)}
				width={mapSpacing(1.5)}
				alignItems="center"
				justifyContent="center"
				onClick={(event: MouseEvent<HTMLSpanElement>) => {
					event.stopPropagation();
					onRemove();
				}}
				focus
				css={{
					cursor: 'pointer',
					svg: {
						display: 'block',
						color: boxPalette.foregroundAction,
					},
					'&:hover': {
						svg: {
							color: boxPalette.foregroundText,
						},
					},
				}}
			>
				<CloseIcon size="sm" />
			</Flex>
		</Flex>
	);
});

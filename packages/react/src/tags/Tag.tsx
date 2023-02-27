import { forwardRef, MouseEventHandler, RefObject } from 'react';
import { Box, Flex } from '../box';
import { TextLink } from '../text-link';
import { boxPalette, LinkProps, mapSpacing } from '../core';
import { CloseIcon } from '../icon';
import { BaseButton } from '../button';

export type TagProps = Omit<LinkProps, 'children'> & {
	children: string;
	onRemove?: MouseEventHandler<HTMLButtonElement>;
	removeButtonRef?: RefObject<HTMLButtonElement>;
};

export const Tag = forwardRef<HTMLSpanElement, TagProps>(function Tag(
	{ children, onRemove, removeButtonRef, ...linkProps },
	ref
) {
	const { href } = linkProps;
	return (
		<Flex
			ref={ref}
			as="span"
			inline
			alignItems="center"
			border
			rounded
			paddingLeft={0.5}
			paddingRight={onRemove ? 0.25 : 0.5}
			gap={0.25}
			fontSize="sm"
			color={href ? 'action' : 'text'}
		>
			<Box as={href ? TextLink : 'span'} {...linkProps}>
				{children}
			</Box>
			{onRemove ? (
				<TagRemoveButton
					ref={removeButtonRef}
					onClick={onRemove}
					aria-label={`Remove ${children}`}
				/>
			) : null}
		</Flex>
	);
});

const TagRemoveButton = forwardRef<
	HTMLButtonElement,
	{
		['aria-label']: string;
		onClick: MouseEventHandler<HTMLButtonElement>;
	}
>(function TagRemoveButton({ onClick, 'aria-label': ariaLabel }, ref) {
	return (
		<Flex
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			ref={ref}
			as={BaseButton}
			height={mapSpacing(1.5)}
			width={mapSpacing(1.5)}
			alignItems="center"
			justifyContent="center"
			onClick={onClick}
			aria-label={ariaLabel}
			focus
			css={{
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
	);
});

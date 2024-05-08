import { MouseEventHandler } from 'react';
import { Box } from '../box';
import { Flex } from '../flex';
import { TextLink } from '../text-link';
import { boxPalette, LinkProps, mapSpacing } from '../core';
import { CloseIcon } from '../icon';
import { BaseButton } from '../button';

export type TagProps = Omit<LinkProps, 'children'> & {
	children: string;
	onRemove?: MouseEventHandler<HTMLButtonElement>;
};

export const Tag = ({ children, onRemove, ...props }: TagProps) => {
	const { href } = props;
	return (
		<Flex
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
			<Box as={href ? TextLink : 'span'} {...props}>
				{children}
			</Box>
			{onRemove && (
				<TagRemoveButton onClick={onRemove} aria-label={`Remove ${children}`} />
			)}
		</Flex>
	);
};

const TagRemoveButton = ({
	'aria-label': ariaLabel,
	onClick,
}: {
	['aria-label']: string;
	onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
	return (
		<Flex
			as={BaseButton}
			height={mapSpacing(1.5)}
			width={mapSpacing(1.5)}
			alignItems="center"
			justifyContent="center"
			onClick={onClick}
			aria-label={ariaLabel}
			focusFor="keyboard"
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
};

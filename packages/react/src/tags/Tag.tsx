import { type MouseEventHandler } from 'react';
import { Box } from '../box';
import { Flex } from '../flex';
import { TextLink } from '../text-link';
import { boxPalette, type LinkProps } from '../core';
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
			alignItems="center"
			as="span"
			border
			color={href ? 'action' : 'text'}
			css={{
				borderRadius: 999,
				paddingBottom: '0.0625rem',
				paddingTop: '0.0625rem',
			}}
			fontSize="xs"
			gap={0.25}
			inline
			paddingX={0.5}
		>
			<Box as={href ? TextLink : 'span'} {...props}>
				{children}
			</Box>
			{onRemove && (
				<TagRemoveButton aria-label={`Remove ${children}`} onClick={onRemove} />
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
			alignItems="center"
			aria-label={ariaLabel}
			as={BaseButton}
			css={{
				marginBottom: `-0.125rem`,
				marginLeft: '-0.25rem',
				marginRight: '-0.25rem',
				marginTop: `-0.125rem`,
				svg: {
					color: boxPalette.foregroundAction,
					display: 'block',
				},
				'&:hover': {
					svg: {
						color: boxPalette.foregroundText,
					},
				},
			}}
			focusRingFor="keyboard"
			height="1.5rem"
			justifyContent="center"
			onClick={onClick}
			width="1.5rem"
		>
			<CloseIcon size="sm" />
		</Flex>
	);
};

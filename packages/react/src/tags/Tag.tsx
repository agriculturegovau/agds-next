import { type MouseEventHandler } from 'react';
import { Box } from '../box';
import { BaseButton } from '../button';
import { boxPalette, type LinkProps } from '../core';
import { Flex } from '../flex';
import { CloseIcon } from '../icon';
import { scaleIconOnHover } from '../icon/Icon';
import { TextLink } from '../text-link';

export type TagProps = Omit<LinkProps, 'children'> & {
	children: string;
	/* A private function to handle the focusing of Tags when removed. */
	focusOnRemove?: (index: number) => void;
	/* A private number which is passed as an arg to focusOnRemove. */
	index?: number;
	onRemove?: MouseEventHandler<HTMLButtonElement>;
};

export const Tag = ({
	children,
	focusOnRemove,
	index,
	onRemove,
	...props
}: TagProps) => {
	const { href } = props;
	return (
		<Flex
			alignItems="center"
			as="span"
			background="body"
			border
			color={href ? 'action' : 'text'}
			css={{
				borderRadius: '0.75rem',
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
				<TagRemoveButton
					aria-label={`Remove ${children}`}
					onClick={(event) => {
						// We call this first so consumers can manage focus separately in their onRemove
						if (index && focusOnRemove) {
							focusOnRemove(index);
						}
						onRemove(event);
					}}
				/>
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
	const scaleIconCSS = scaleIconOnHover('sm');
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
					transition: scaleIconCSS.transition,
				},
				'&:hover': {
					svg: {
						color: boxPalette.foregroundText,
						transform: scaleIconCSS.transform,
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

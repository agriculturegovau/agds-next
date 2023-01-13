import { Box, Flex } from '../box';
import { TextLink } from '../text-link';
import { boxPalette, LinkProps, mapSpacing } from '../core';
import { CloseIcon } from '../icon';
import { BaseButton } from '../button';

export type TagProps = LinkProps & {
	children: string;
	onRemove?: () => void;
};

export const Tag = (props: TagProps) => {
	const { children, href, onRemove } = props;

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
			{onRemove && <TagRemoveButton onClick={onRemove} label={children} />}
		</Flex>
	);
};

const TagRemoveButton = ({
	onClick,
	label,
}: {
	onClick: () => void;
	label: string;
}) => {
	return (
		<Flex
			as={BaseButton}
			height={mapSpacing(1.5)}
			width={mapSpacing(1.5)}
			alignItems="center"
			justifyContent="center"
			onClick={onClick}
			aria-label={`Remove ${label}`}
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

import { ReactNode } from 'react';
import { LinkProps, packs, useId } from '../core';
import { TextLink, TextLinkExternal } from '../text-link';
import { Box, linkStyles } from '../box';
import { Flex } from '../flex';
import { Stack } from '../stack';
import { Text } from '../text';
import { ArrowRightIcon } from '../icon';
import { FeatureLinkListBackground, hoverColorMap } from './utils';

export function useLinkDescriptionId(idProp?: string) {
	const autoId = useId(idProp);
	const sanitizeId = autoId?.replace(/[^a-zA-Z0-9-_]/g, '_'); //sanitize id to have valid html test pass
	return `link-desc-${sanitizeId}`;
}

export type FeatureLinkListItemProps = LinkProps & {
	label: ReactNode;
	description?: ReactNode;
	background?: FeatureLinkListBackground;
};

export const FeatureLinkListItem = ({
	label,
	description,
	background = 'body',
	...props
}: FeatureLinkListItemProps) => {
	const TextComponent = props.target == '_blank' ? TextLinkExternal : TextLink;
	const descriptionId = useLinkDescriptionId(props.id);

	return (
		<Box
			as="li"
			borderBottom
			background={background}
			css={{
				...linkStyles,
				textDecoration: 'none',
				'&:hover': {
					backgroundColor: hoverColorMap[background],
				},
			}}
		>
			<Flex
				gap={1.5}
				paddingY={1.5}
				css={{
					position: 'relative',
					':has(:focus-visible)': packs.outline,
					// If the browser does not support :has, use `:focus-within`
					'@supports not selector(:has(*))': {
						':focus-within': packs.outline,
					},
				}}
				justifyContent="space-between"
				alignItems="flex-start"
			>
				<Stack gap={0.5}>
					<Text fontSize="md" fontWeight="bold">
						<TextComponent
							{...props}
							css={{
								'&:focus, &:focus-visible': { outline: 'none' },
								'&::after': {
									content: '""',
									position: 'absolute',
									top: 0,
									right: 0,
									bottom: 0,
									left: 0,
								},
							}}
							aria-describedby={description ? descriptionId : undefined}
						>
							{label}
						</TextComponent>
					</Text>
					{description && (
						<Text as="p" id={descriptionId}>
							{description}
						</Text>
					)}
				</Stack>
				<ArrowRightIcon size="md" weight="regular" />
			</Flex>
		</Box>
	);
};

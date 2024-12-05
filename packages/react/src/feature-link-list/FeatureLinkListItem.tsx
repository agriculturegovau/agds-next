import { ReactNode } from 'react';
import { LinkProps, packs, useId } from '../core';
import { TextLink, TextLinkExternal } from '../text-link';
import { Box, linkStyles } from '../box';
import { Flex } from '../flex';
import { Stack } from '../stack';
import { Text } from '../text';
import { ArrowRightIcon } from '../icon';
import { FeatureLinkListBackground, hoverColorMap } from './utils';

export type FeatureLinkListItemProps = LinkProps & {
	background?: FeatureLinkListBackground;
	description?: ReactNode;
	label: ReactNode;
};

export const FeatureLinkListItem = ({
	background = 'body',
	description,
	label,
	...props
}: FeatureLinkListItemProps) => {
	const LinkComponent = props.target == '_blank' ? TextLinkExternal : TextLink;
	const descriptionId = useDescriptionId(props.id);

	return (
		<Box
			as="li"
			background={background}
			borderBottom
			css={[
				linkStyles,
				{
					textDecoration: 'none',
					'&:hover': {
						backgroundColor: hoverColorMap[background],
					},
				},
			]}
		>
			<Flex
				alignItems="flex-start"
				css={{
					position: 'relative',
					':has(:focus-visible)': packs.outline,
					// If the browser does not support :has, use `:focus-within`
					'@supports not selector(:has(*))': {
						':focus-within': packs.outline,
					},
				}}
				gap={1.5}
				justifyContent="space-between"
				paddingY={1.5}
			>
				<Stack gap={0.5}>
					<Text fontSize="md" fontWeight="bold">
						<LinkComponent
							{...props}
							aria-describedby={description ? descriptionId : undefined}
							css={{
								'&:focus, &:focus-visible': { outline: 'none' },
								'&::after': {
									bottom: 0,
									content: '""',
									left: 0,
									position: 'absolute',
									right: 0,
									top: 0,
								},
							}}
						>
							{label}
						</LinkComponent>
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

function useDescriptionId(idProp?: string) {
	const autoId = useId(idProp);
	return `feature-link-list-description-${autoId}`;
}

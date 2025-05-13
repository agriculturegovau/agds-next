import { type ReactNode } from 'react';
import { Box, linkStyles } from '../box';
import { packs, type LinkProps, useId } from '../core';
import { Flex } from '../flex';
import { ArrowRightIcon } from '../icon';
import { scaleIconOnHover } from '../icon/Icon';
import { Stack } from '../stack';
import { Text } from '../text';
import { TextLink, TextLinkExternal } from '../text-link';
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
	const scaleIconCSS = scaleIconOnHover();

	return (
		<Box
			as="li"
			background={background}
			borderBottom
			css={[
				linkStyles,
				{
					textDecoration: 'none',
					'> div > svg': {
						transition: scaleIconCSS.transition,
					},
					':hover': {
						backgroundColor: hoverColorMap[background],
						'> div > svg': {
							transform: scaleIconCSS.transform,
						},
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
				<ArrowRightIcon />
			</Flex>
		</Box>
	);
};

function useDescriptionId(idProp?: string) {
	const autoId = useId(idProp);
	return `feature-link-list-description-${autoId}`;
}

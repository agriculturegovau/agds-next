import { PropsWithChildren, ReactNode } from 'react';
import { Box, Stack } from '@ag.ds-next/box';
import { Content } from '@ag.ds-next/content';
import { boxPalette, mq, tokens } from '@ag.ds-next/core';
import { Heading } from '@ag.ds-next/heading';
import { Text } from '@ag.ds-next/text';

export type HeroBannerProps = PropsWithChildren<{
	backgroundImageSrc?: string;
	mobileImage?: ReactNode;
	variant?: HeroBannerVariant;
	title?: string;
	subTitle?: string;
}>;

export const HeroBanner = ({
	backgroundImageSrc,
	mobileImage,
	variant = 'lightAlt',
	children,
	title,
	subTitle,
}: HeroBannerProps) => {
	const { palette, background, backgroundVar } = variantMap[variant];
	return (
		<Box as="section" palette={palette} background={background}>
			{mobileImage ? (
				<Box display={['block', 'none']}>{mobileImage}</Box>
			) : null}
			<Box
				width="100%"
				height="100%"
				css={
					backgroundImageSrc
						? mq({
								background: [
									null,
									`linear-gradient(90deg, ${boxPalette[backgroundVar]} 0%, ${boxPalette[backgroundVar]} 60%, transparent 100%), no-repeat center right url(${backgroundImageSrc});`,
								],
								backgroundSize: [null, 'auto 100%'],
						  })
						: undefined
				}
			>
				<Content as="div" spacing="sm">
					<Box
						width="100%"
						maxWidth={[null, '66%', '66%', tokens.maxWidth.bodyText]}
						padding={{ xs: 1, lg: 2 }}
					>
						<Stack gap={[1.5, 2]}>
							{title || subTitle ? (
								<Stack gap={[0.5, 1]}>
									<Heading type="h1" fontSize="xxxl">
										{title}
									</Heading>
									<Text as="p" fontSize="md">
										{subTitle}
									</Text>
								</Stack>
							) : null}
							{children}
						</Stack>
					</Box>
				</Content>
			</Box>
		</Box>
	);
};

export const variantMap = {
	light: {
		palette: 'light',
		background: 'body',
		backgroundVar: 'backgroundBody',
	},
	lightAlt: {
		palette: 'light',
		background: 'bodyAlt',
		backgroundVar: 'backgroundBodyAlt',
	},
	dark: {
		palette: 'dark',
		background: 'body',
		backgroundVar: 'backgroundBody',
	},
	darkAlt: {
		palette: 'dark',
		background: 'bodyAlt',
		backgroundVar: 'backgroundBodyAlt',
	},
} as const;

type HeroBannerVariant = keyof typeof variantMap;

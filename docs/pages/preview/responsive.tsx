import { Fragment, useCallback, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Box } from '@ag.ds-next/react/box';
import { ControlGroup } from '@ag.ds-next/react/control-group';
import { Flex } from '@ag.ds-next/react/flex';
import { Heading } from '@ag.ds-next/react/heading';
import { ArrowLeftIcon } from '@ag.ds-next/react/icon';
import { Radio } from '@ag.ds-next/react/radio';
import { ButtonLink } from '@ag.ds-next/react/button';
import { DocumentTitle } from '../../components/DocumentTitle';
import { responsivePreviewQueryKeys } from '../../components/Code';
import { boxPalette } from '@ag.ds-next/react/core';

const sizes = {
	mobile: {
		label: 'Mobile',
		width: 375,
	},
	tablet: {
		label: 'Tablet',
		width: 768,
	},
	desktop: {
		label: 'Desktop',
		width: 1280,
	},
	xlDesktop: {
		label: 'XL Desktop',
		width: 1920,
	},
};
type Sizes = keyof typeof sizes;

export default function ResponsivePage() {
	const [frameSize, setFrameSize] = useState<Sizes>('mobile');
	const searchParams = useSearchParams();
	const returnLink =
		searchParams.get(responsivePreviewQueryKeys.returnLink) || '/';
	const title =
		searchParams.get(responsivePreviewQueryKeys.title) || 'Responsive preview';
	const disablePadding = Boolean(
		searchParams.get(responsivePreviewQueryKeys.disablePadding)
	);
	console.log(searchParams.get(responsivePreviewQueryKeys.disablePadding));

	const frameSrc = searchParams.get(responsivePreviewQueryKeys.frameSrc);
	const playroomSrc = searchParams.get(responsivePreviewQueryKeys.playroomSrc);
	const iFrameSrc = frameSrc || playroomSrc;

	const handlerForKey = useCallback(
		(key: Sizes) => () => setFrameSize(key),
		[]
	);
	const isChecked = (key: Sizes) => key === frameSize;

	return (
		<Fragment>
			<DocumentTitle title={title} />
			<div
				css={{
					display: 'flex',
					flexDirection: 'column',
					height: ['100vh', '100dvh'],
					width: '100%',
				}}
			>
				<Flex
					alignItems={{ xs: 'flex-start', md: 'center' }}
					as="header"
					background="shade"
					flexDirection={{ xs: 'column', md: 'row' }}
					gap={1}
					justifyContent="space-between"
					paddingX={1.5}
					paddingY={1}
				>
					<Flex
						alignItems={{ xs: 'start', xl: 'center' }}
						display="flex"
						flexDirection={{
							xs: 'column',
							xl: 'row',
						}}
						gap={1}
					>
						<ButtonLink
							href={returnLink}
							iconBefore={ArrowLeftIcon}
							variant="text"
						>
							Back
						</ButtonLink>
						<Heading as="h1" fontSize="md">
							{title}
						</Heading>
					</Flex>
					<ControlGroup label="Preview size" required>
						{(Object.keys(sizes) as Array<Sizes>).map((key) => {
							const { label } = sizes[key];
							return (
								<Radio
									checked={isChecked(key)}
									key={key}
									onChange={handlerForKey(key)}
									size="sm"
								>
									{label}
								</Radio>
							);
						})}
					</ControlGroup>
				</Flex>
				<Box as="main" background="bodyAlt" flexGrow={1}>
					<div
						css={{
							height: '100%',
							margin: '0 min(auto, 0.75rem)',
							overflowX: 'auto',
						}}
					>
						<div
							css={{
								backgroundColor: boxPalette.backgroundBody,
								display: 'block',
								height: 'calc(100% - 1rem)',
								margin: '0 auto',
								padding: disablePadding ? 0 : '1rem 1rem 0 1rem',
								width: 'fit-content',
							}}
						>
							{iFrameSrc ? (
								<iframe
									css={{
										border: 0,
										// display: 'block',
										height: '100%',
										// margin: '0 auto',
										width: sizes[frameSize].width,
									}}
									src={iFrameSrc}
									title={`Framed content, ${title}`}
								></iframe>
							) : (
								<p>FAIL CASE ERROR</p>
							)}
						</div>
					</div>
				</Box>
			</div>
		</Fragment>
	);
}

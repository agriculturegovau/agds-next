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
	const searchParams = useSearchParams();
	const backUrl = searchParams.get('back-url') || '/';
	const frameUrl = searchParams.get('frame-url');
	const playroomUrl = searchParams.get('playroom-url');
	const title = searchParams.get('title') || 'Responsive preview';

	const [frameSize, setFrameSize] = useState<Sizes>('mobile');
	const handlerForKey = useCallback(
		(key: Sizes) => () => setFrameSize(key),
		[]
	);
	const isChecked = (key: Sizes) => key === frameSize;

	const iFrameSrc = frameUrl || playroomUrl;
	return (
		<Fragment>
			<DocumentTitle title={title} />
			<div
				css={{
					display: 'flex',
					flexDirection: 'column',
					height: ['100vh', '100svh'],
					width: '100%',
				}}
			>
				<Flex
					alignItems={{ xs: 'flex-start', md: 'center' }}
					background="shade"
					dark
					flexDirection={{ xs: 'column', md: 'row' }}
					gap={1}
					justifyContent="space-between"
					paddingX={1.5}
					paddingY={1}
				>
					<Flex
						alignItems={{ xs: 'start', xl: 'center' }}
						dark
						display="flex"
						flexDirection={{
							xs: 'column',
							xl: 'row',
						}}
						gap={1}
					>
						<ButtonLink
							href={backUrl}
							iconBefore={ArrowLeftIcon}
							variant="text"
						>
							Back to documentation
						</ButtonLink>
						<Heading as="h1" fontSize="xl">
							{title}
						</Heading>
					</Flex>
					<ControlGroup label="Preview" required>
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
				<Box background="bodyAlt" flexGrow={1}>
					<div css={{ overflowX: 'auto', height: '100%', margin: '0 0.75rem' }}>
						{iFrameSrc && (
							<iframe
								css={{
									border: 0,
									display: 'block',
									height: '100%',
									margin: '0 auto',
									width: sizes[frameSize].width,
								}}
								src={iFrameSrc}
							></iframe>
						)}
					</div>
				</Box>
			</div>
		</Fragment>
	);
}

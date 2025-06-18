import { Fragment, type RefObject, useEffect, useRef, useState } from 'react';
import { css, Global } from '@emotion/react';
import Head from 'next/head';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Box } from '@ag.ds-next/react/box';
import { ButtonLink } from '@ag.ds-next/react/button';
import { PageContent } from '@ag.ds-next/react/content';
import { ControlGroup } from '@ag.ds-next/react/control-group';
import {
	boxPalette,
	mapSpacing,
	tokens,
	useWindowSize,
} from '@ag.ds-next/react/core';
import { Flex } from '@ag.ds-next/react/flex';
import { Heading } from '@ag.ds-next/react/heading';
import { AlertFilledIcon, ArrowLeftIcon } from '@ag.ds-next/react/icon';
import { Radio as AgDSRadio } from '@ag.ds-next/react/radio';
import { Select as AgDSSelect } from '@ag.ds-next/react/select';
import { Stack } from '@ag.ds-next/react/stack';
import { Text } from '@ag.ds-next/react/text';
import { DocumentTitle } from '../../components/DocumentTitle';
import { responsivePreviewQueryKeys } from '../../components/code/ResponsivePreviewLink';
import { useGetScrollbarSizes } from '../../lib/hooks/useGetScrollbarSizes';
import { useIsIos } from '../../../packages/react/src/combobox/utils';

const isLocal =
	!process.env.NEXT_PUBLIC_BASE_PATH && process.env.NODE_ENV !== 'production';
const trustedUrls = [
	process.env.NEXT_PUBLIC_SITE_URL,
	process.env.NEXT_PUBLIC_PLAYROOM_URL?.startsWith('/')
		? undefined
		: process.env.NEXT_PUBLIC_PLAYROOM_URL,
].filter(Boolean);

const screenSizes = {
	xs: {
		label: '320px (xs)',
		width: 320,
	},
	sm: {
		label: `${tokens.breakpoint.sm}px (sm)`,
		width: tokens.breakpoint.sm,
	},
	md: {
		label: `${tokens.breakpoint.md}px (md)`,
		width: tokens.breakpoint.md,
	},
	lg: {
		label: `${tokens.breakpoint.lg}px (lg)`,
		width: tokens.breakpoint.lg,
	},
	xl: {
		label: `${tokens.breakpoint.xl}px (xl)`,
		width: tokens.breakpoint.xl,
	},
	xxl: {
		label: `${tokens.breakpoint.xxl}px (xxl)`,
		width: tokens.breakpoint.xxl,
	},
};
type Sizes = keyof typeof screenSizes;

const constructRadioId = (size: Sizes) => `radio-id-${size}`;

type UnmountTargets = 'radio' | 'select';

export default function ResponsivePage() {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const [frameSize, setFrameSize] = useState<Sizes>('xs');
	const [iframeSrc, setIframeSrc] = useState<undefined | null | string>(
		undefined
	);
	const iframeRef = useRef<HTMLIFrameElement>(null);
	const selectRef = useRef<HTMLSelectElement>(null);
	const scrollbarSizes = useGetScrollbarSizes();
	const isIos = useIsIos();

	useEffect(() => {
		const initQueryParams = new URLSearchParams(window.location.search);
		const defaultSize = initQueryParams.get(
			responsivePreviewQueryKeys.previewSize
		);

		if (defaultSize && defaultSize in screenSizes) {
			setFrameSize(defaultSize as Sizes);
		}
	}, [setFrameSize]);

	useEffect(() => {
		const initQueryParams = new URLSearchParams(window.location.search);
		const iframeSrc = initQueryParams.get(responsivePreviewQueryKeys.frameSrc);

		// Verify address is from AgDS
		if (iframeSrc) {
			try {
				const encodedUrl = encodeURI(iframeSrc);

				// If URL is AgDS, allow through
				if (encodedUrl.startsWith('/')) {
					setIframeSrc(encodedUrl);
					return;
				}

				const parsedUrl = new URL(encodedUrl);
				const isValidSrc = trustedUrls.some(
					(domain) => domain && parsedUrl.hostname === new URL(domain).hostname
				);
				if (isValidSrc) {
					setIframeSrc(encodedUrl);
					return;
				}
			} catch {
				setIframeSrc(null);
				return;
			}
		}

		// Invalid url or no url found, set as null
		setIframeSrc(null);
	}, [setIframeSrc]);

	const referrerLink =
		searchParams.get(responsivePreviewQueryKeys.referrerLink) || '/';
	const referrerLabel =
		searchParams.get(responsivePreviewQueryKeys.referrerLabel) ||
		'Back to documentation';
	const title =
		searchParams.get(responsivePreviewQueryKeys.title) || 'Responsive preview';
	const disablePadding = Boolean(
		searchParams.get(responsivePreviewQueryKeys.padding) === 'false'
	);

	const { windowWidth = 0 } = useWindowSize();
	const radioVisible = windowWidth > tokens.breakpoint.xl;

	const handleOnUnmount = (target: UnmountTargets) => {
		// focus on select
		if (target === 'select') {
			if (selectRef) selectRef.current?.focus();
			return;
		}

		// focus on current radio
		const radioId = constructRadioId(frameSize);
		const radioElement = document.getElementById(radioId);
		if (radioElement) radioElement.focus();
	};

	const handleSetFrameSize = (size: Sizes) => {
		setFrameSize(size);

		// Set frame size to URL
		const newQueryParams = new URLSearchParams(searchParams.toString());
		newQueryParams.set(responsivePreviewQueryKeys.previewSize, size);
		router.replace(`${pathname}?${newQueryParams}`);
	};
	const isChecked = (key: Sizes) => key === frameSize;

	const horizontalSpacing =
		screenSizes[frameSize].width < screenSizes.md.width
			? mapSpacing(0.75)
			: mapSpacing(2);
	const topSpacing = mapSpacing(1.5);

	return (
		<Fragment>
			{!isLocal && (
				<Head>
					<meta
						// Restrict iframe to AgDS and Figma
						// This policy does unmount but will still be enforced until refresh
						content="frame-src 'self' https://www.figma.com/; child-src 'self' https://www.figma.com/;"
						http-equiv="Content-Security-Policy"
					/>
				</Head>
			)}
			<Global
				styles={css`
					html {
						overflow: hidden;
						scrollbar-gutter: auto;
					}
				`}
			/>
			<DocumentTitle title={title} />
			<Flex
				css={{
					// IOS can't handle `dvh` when the browser has the address bar at the top, use `svh` instead
					height: ['100vh', isIos ? '100svh' : '100dvh'],
				}}
				flexDirection="column"
				width="100%"
			>
				<Flex
					alignItems={{ xs: 'flex-start', md: 'center' }}
					as="header"
					background="shade"
					borderBottom
					flexDirection={{ xs: 'column', md: 'row' }}
					gap={{ xs: 1, md: 1.5 }}
					justifyContent="space-between"
					paddingX={{ xs: 0.75, md: 2 }}
					paddingY={1}
				>
					<Flex
						alignItems="start"
						display="flex"
						flexDirection="column"
						gap={1}
						height="100%"
						justifyContent="space-between"
					>
						<ButtonLink
							href={referrerLink}
							iconBefore={ArrowLeftIcon}
							variant="text"
						>
							{referrerLabel}
						</ButtonLink>
						<Heading as="h1" fontSize="md">
							{title}
						</Heading>
					</Flex>
					<div css={{ marginTop: 'auto' }}>
						{radioVisible ? (
							<Flex gap={1} width="max-content">
								<ControlGroup label="Preview size" required>
									{(Object.keys(screenSizes) as Array<Sizes>).map((size) => (
										<Radio
											checked={isChecked(size)}
											key={size}
											onChange={handleSetFrameSize}
											onUnmount={handleOnUnmount}
											size={size}
										/>
									))}
								</ControlGroup>
							</Flex>
						) : (
							<Box
								minWidth={tokens.maxWidth.field.md}
								width={{ xs: '100%', md: 'auto' }}
							>
								<Select
									currentSize={frameSize}
									onChange={handleSetFrameSize}
									onUnmount={handleOnUnmount}
									selectRef={selectRef}
								/>
							</Box>
						)}
					</div>
				</Flex>

				{iframeSrc === null ? (
					<PageContent as="main">
						<Stack alignItems="flex-start" gap={2} role="alert">
							<Stack gap={1}>
								<AlertFilledIcon color="error" size="lg" />
								<Heading fontSize="lg" type="h2">
									Failed to load
								</Heading>
								<Text>There was an error loading the preview.</Text>
							</Stack>
							<ButtonLink href={referrerLink}>{referrerLabel}</ButtonLink>
						</Stack>
					</PageContent>
				) : (
					<Box as="main" background="bodyAlt" flexGrow={1}>
						<div
							css={{
								height: '100%',
								overflowX: 'auto',
								overscrollBehavior: 'contain',
							}}
						>
							<div
								css={{
									backgroundColor: boxPalette.backgroundBody,
									height: '100%',
									margin: 'auto',
									width: 'fit-content',
								}}
							>
								<iframe
									css={{
										border: 0,
										height: '100%',
										verticalAlign: 'bottom',
										...(!disablePadding && {
											height: `calc(100% - ${topSpacing})`,
											marginLeft: `max(${horizontalSpacing}, ${scrollbarSizes.width}px)`,
											// Clamp to prevent negative margin
											marginRight: `clamp(0px, calc(${horizontalSpacing} - ${scrollbarSizes.width}px), ${horizontalSpacing})`,
											marginTop: topSpacing,
										}),
									}}
									ref={iframeRef}
									src={iframeSrc}
									title={`Framed content, ${title}`}
									width={screenSizes[frameSize].width}
								></iframe>
							</div>
						</div>
					</Box>
				)}
			</Flex>
		</Fragment>
	);
}

const Radio = ({
	checked,
	onChange,
	onUnmount,
	size: screenSize,
}: {
	checked: boolean;
	onChange: (size: Sizes) => void;
	onUnmount: (target: UnmountTargets) => void;
	size: Sizes;
}) => {
	const radioRef = useRef<HTMLInputElement>(null);
	const [isFocused, setIsFocused] = useState(false);
	const { label } = screenSizes[screenSize];

	useEffect(() => {
		return () => {
			// We want to purposely check the most recent state to check if it has unmounted
			// eslint-disable-next-line react-hooks/exhaustive-deps
			if (!radioRef.current && isFocused) {
				onUnmount('select');
			}
		};
	}, [isFocused, onUnmount]);

	return (
		<AgDSRadio
			checked={checked}
			id={constructRadioId(screenSize)}
			onBlur={() => setIsFocused(false)}
			onChange={() => onChange(screenSize)}
			onFocus={() => setIsFocused(true)}
			ref={radioRef}
			size="sm"
		>
			{label}
		</AgDSRadio>
	);
};

const Select = ({
	currentSize,
	onChange,
	onUnmount,
	selectRef,
}: {
	currentSize: Sizes;
	onChange: (value: Sizes) => void;
	onUnmount: (target: UnmountTargets) => void;
	selectRef: RefObject<HTMLSelectElement>;
}) => {
	const [isFocused, setIsFocused] = useState(false);

	useEffect(() => {
		return () => {
			// We want to purposely check the most recent state to check if it has unmounted
			// eslint-disable-next-line react-hooks/exhaustive-deps
			if (selectRef && !selectRef.current && isFocused) {
				onUnmount('radio');
			}
		};
	}, [isFocused, onUnmount, selectRef]);

	const options = Object.keys(screenSizes).map((size) => {
		const { label } = screenSizes[size as Sizes];
		return {
			value: size,
			label: label,
		};
	});

	return (
		<AgDSSelect
			block
			hideOptionalLabel
			label="Preview size"
			onBlur={() => setIsFocused(false)}
			onChange={(event) => onChange(event?.target.value as Sizes)}
			onFocus={() => setIsFocused(true)}
			options={options}
			ref={selectRef}
			value={currentSize}
		/>
	);
};

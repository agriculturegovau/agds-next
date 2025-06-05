import {
	Fragment,
	type Ref,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react';
import { useSearchParams } from 'next/navigation';
import { ButtonLink } from '@ag.ds-next/react/button';
import { Box } from '@ag.ds-next/react/box';
import {
	boxPalette,
	mapSpacing,
	tokens,
	useWindowSize,
} from '@ag.ds-next/react/core';
import { ControlGroup } from '@ag.ds-next/react/control-group';
import { Flex } from '@ag.ds-next/react/flex';
import { Heading } from '@ag.ds-next/react/heading';
import { ArrowLeftIcon } from '@ag.ds-next/react/icon';
import { Radio } from '@ag.ds-next/react/radio';
import { Select } from '@ag.ds-next/react/select';
import { DocumentTitle } from '../../components/DocumentTitle';
import { responsivePreviewQueryKeys } from '../../components/code/ResponsivePreviewLink';
import useGetScrollbarWidth from '../../lib/hooks/useGetScrollbarWidth';

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
	const iframeRef = useRef<HTMLIFrameElement>(null);
	const selectRef = useRef<HTMLSelectElement>(null);
	const [frameSize, setFrameSize] = useState<Sizes>('xs');
	const scrollbarWidth = useGetScrollbarWidth();

	const searchParams = useSearchParams();
	const returnLink =
		searchParams.get(responsivePreviewQueryKeys.returnLink) || '/';
	const title =
		searchParams.get(responsivePreviewQueryKeys.title) || 'Responsive preview';
	const disablePadding = Boolean(
		searchParams.get(responsivePreviewQueryKeys.disablePadding) === 'true'
	);

	const frameSrc = searchParams.get(responsivePreviewQueryKeys.frameSrc);
	const playroomSrc = searchParams.get(responsivePreviewQueryKeys.playroomSrc);
	const iFrameSrc = frameSrc || playroomSrc;

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

	const handlerForKey = useCallback((key: Sizes) => setFrameSize(key), []);
	const isChecked = (key: Sizes) => key === frameSize;

	if (!iFrameSrc) return null;

	const horizontalSpacing =
		screenSizes[frameSize].width < screenSizes.md.width
			? mapSpacing(0.75)
			: mapSpacing(2);
	const topSpacing = mapSpacing(1.5);

	return (
		<Fragment>
			<DocumentTitle title={title} />
			<Flex
				css={{
					height: ['100vh', '100dvh'],
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
					gap={1}
					justifyContent="space-between"
					paddingX={1.5}
					paddingY={1}
				>
					<Flex
						alignItems="start"
						display="flex"
						flexDirection="column"
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

					{radioVisible ? (
						<ControlGroup label="Preview size" required>
							{(Object.keys(screenSizes) as Array<Sizes>).map((size) => (
								<RadioButton
									checked={isChecked(size)}
									key={size}
									onChange={handlerForKey}
									onUnmount={handleOnUnmount}
									size={size}
								/>
							))}
						</ControlGroup>
					) : (
						<Box width={{ xs: '100%', md: 'auto' }}>
							<SelectWrapper
								currentSize={frameSize}
								onChange={handlerForKey}
								onUnmount={handleOnUnmount}
								selectRef={selectRef}
							/>
						</Box>
					)}
				</Flex>
				<Box as="main" background="bodyAlt" flexGrow={1}>
					<div
						css={{
							height: '100%',
							overflowX: 'auto',
							lineHeight: 0, // Weird 3px line on bottom w/o this
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
									...(!disablePadding && {
										height: `calc(100% - ${topSpacing})`,
										marginLeft: `max(${horizontalSpacing}, ${scrollbarWidth}px)`,
										// Clamp to prevent negative margin
										marginRight: `clamp(0px, calc(${horizontalSpacing} - ${scrollbarWidth}px), ${horizontalSpacing})`,
										marginTop: topSpacing,
									}),
								}}
								ref={iframeRef}
								src={iFrameSrc}
								title={`Framed content, ${title}`}
								width={screenSizes[frameSize].width}
							></iframe>
						</div>
					</div>
				</Box>
			</Flex>
		</Fragment>
	);
}

const RadioButton = ({
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
	const { label } = screenSizes[screenSize];
	const radioRef = useRef<HTMLInputElement>(null);
	const [isFocused, setIsFocused] = useState(false);

	useEffect(() => {
		return () => {
			// We want to purposely check the current, as it would have unmounted
			// eslint-disable-next-line react-hooks/exhaustive-deps
			if (!radioRef.current && isFocused) {
				onUnmount('select');
			}
		};
	}, [isFocused, onUnmount]);

	return (
		<Radio
			checked={checked}
			id={constructRadioId(screenSize)}
			onBlur={() => setIsFocused(false)}
			onChange={() => onChange(screenSize)}
			onFocus={() => setIsFocused(true)}
			ref={radioRef}
			size="sm"
		>
			{label}
		</Radio>
	);
};

const SelectWrapper = ({
	currentSize,
	onChange,
	onUnmount,
	selectRef,
}: {
	currentSize: Sizes;
	onChange: (value: Sizes) => void;
	onUnmount: (target: UnmountTargets) => void;
	selectRef: Ref<HTMLSelectElement>;
}) => {
	const [isFocused, setIsFocused] = useState(false);

	useEffect(() => {
		return () => {
			// We want to purposely check the current, as it would have unmounted
			// @ts-expect-error: TODO fix `select.Ref.current` issue
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
		<Select
			block
			label="Preview size"
			onBlur={() => setIsFocused(false)}
			onChange={(event) => onChange(event?.target.value as Sizes)}
			onFocus={() => setIsFocused(true)}
			options={options}
			ref={selectRef}
			required
			value={currentSize}
		/>
	);
};

import { Global } from '@emotion/react';
import FocusLock from 'react-focus-lock';
import copy from 'clipboard-copy';
import { createPreviewUrl, createUrl } from 'playroom/utils';
import { Highlight, Prism } from 'prism-react-renderer';
import React, {
	Fragment,
	type KeyboardEvent,
	type ReactNode,
	useCallback,
	useContext,
	useEffect,
	useRef,
	useState,
} from 'react';
import { createPortal } from 'react-dom';
import { LiveContext, LiveEditor, LivePreview, LiveProvider } from 'react-live';
import { ExternalLinkCallout } from '@ag.ds-next/react/a11y';
import { Box } from '@ag.ds-next/react/box';
import { Button, ButtonLink } from '@ag.ds-next/react/button';
import { CardHeader } from '@ag.ds-next/react/card';
import { ControlGroup } from '@ag.ds-next/react/control-group';
import {
	canUseDOM,
	globalPalette,
	mapSpacing,
	packs,
	tokens,
	useId,
	useToggleState,
} from '@ag.ds-next/react/core';
import { Flex } from '@ag.ds-next/react/flex';
import { H3, Heading } from '@ag.ds-next/react/heading';
import {
	ArrowLeftIcon,
	ChevronDownIcon,
	ChevronUpIcon,
	CopyIcon,
} from '@ag.ds-next/react/icon';
import {
	proseBlockClassname,
	unsetProseStylesClassname,
} from '@ag.ds-next/react/prose';
import { Radio } from '@ag.ds-next/react/radio';
import { withBasePath } from '../lib/img';
import * as designSystemComponents from './designSystemComponents';
import { prismTheme } from './prism-theme';

// Find multi-line comments at start `/** ... */`
const multiLineCommentRegex = /^\/\*[\s\S]*?\*\//gi;

// Add support for diff language support
// https://github.com/FormidableLabs/prism-react-renderer#custom-language-support
(typeof global !== 'undefined' ? global : window).Prism = Prism;
require('prismjs/components/prism-diff');

export const PlaceholderImage = () => (
	<img
		alt="Grey placeholder"
		css={{ width: '100%' }}
		src={withBasePath('/img/placeholder/600X260.png')}
	/>
);

export const PlaceholderPictogram = () => (
	<svg
		fill="none"
		height="64"
		stroke="#00558B"
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth="2"
		viewBox="0 0 64 64"
		width="64"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M31 36H17" />
		<path d="M47 59C53.6274 59 59 53.6274 59 47C59 40.3726 53.6274 35 47 35C40.3726 35 35 40.3726 35 47C35 53.6274 40.3726 59 47 59Z" />
		<path d="M51 43C49.8647 44.8542 45.5972 50.9964 45.5972 50.9964L43 49" />
		<path d="M27 46H17" />
		<path d="M41 26H17" />
		<path d="M32.9989 59H10.9989C9.89459 59 8.99925 58.1049 8.99897 57.0006C8.99475 40.3336 8.99555 23.6666 8.99894 6.99957C8.99916 5.89517 9.89462 5 10.999 5V5H42.0763C42.6601 5 43.2147 5.25505 43.5946 5.69823L54.5173 18.4382C54.8281 18.8007 54.9989 19.2625 54.9989 19.74V31" />
		<path d="M43.0003 6L43 17C43 18.1045 43.8955 19 45 19H54" />
	</svg>
);

function LiveCode({
	showCode = false,
	enableProse = false,
	exampleContentHeading,
	exampleContentHeadingType,
	responsivePreviewHeading = 'Responsive preview',
}: {
	showCode?: boolean;
	enableProse?: boolean;
	exampleContentHeading?: string;
	exampleContentHeadingType?: 'h2' | 'h3' | 'h4';
	responsivePreviewHeading?: string;
}) {
	const liveEditorRef = useRef<HTMLDivElement>(null);
	const liveCodeToggleButton = useRef<HTMLButtonElement>(null);
	const live = useContext(LiveContext);

	const liveOnChange = live.onChange;
	const [localCopy, setLocalCopy] = useState<string>(live.code);
	const [isCodeVisible, toggleIsCodeVisible] = useToggleState(
		showCode,
		!showCode
	);
	const [isResponsivePreviewVisible, setIsResponsivePreviewVisible] =
		useToggleState(false, true);

	const copyLiveCode = useCallback(() => {
		copy(localCopy);
	}, [localCopy]);

	const handleChange = useCallback(
		(code: string) => {
			liveOnChange(code);
			setLocalCopy(code);
		},
		[liveOnChange]
	);

	const codeUrl = useCallback(() => {
		// Wrap `/* ... */` comments with brackets `{ .. }`
		let code = live.code.replaceAll(multiLineCommentRegex, '{$&}');
		// No formatting required for JSX only
		if (code.startsWith('<') || code.endsWith('>')) return code;

		// Remove `;` from the end of `() => {};`
		if (code.endsWith(';')) {
			code = code.slice(0, -1);
		}

		const formattedCode = code.split('\n').join('\n    ');
		return `<Render>\n    {${formattedCode}}\n</Render>`;
	}, [live.code]);

	const playroomUrl = createUrl({
		baseUrl: process.env.NEXT_PUBLIC_PLAYROOM_URL,
		code: codeUrl(),
	});
	const playroomPreviewUrl = createPreviewUrl({
		baseUrl: process.env.NEXT_PUBLIC_PLAYROOM_URL,
		code: codeUrl(),
	});

	const id = useId();
	const codeId = `live-code-${id}`;

	const onLiveEditorContainerKeyDown = useCallback(
		(event: KeyboardEvent<HTMLDivElement>) => {
			if (event.code === 'Escape') {
				toggleIsCodeVisible();
				liveCodeToggleButton.current?.focus();
			}
		},
		[toggleIsCodeVisible]
	);

	// LiveEditor doesn't support aria-label, so we have to do it the DOM way
	useEffect(() => {
		const pre = liveEditorRef.current?.querySelector('pre');
		if (pre) {
			pre.ariaLabel = `Live code editor ${id}`;
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore Property 'role' does not exist on type 'HTMLPreElement'
			pre.role = 'region';
		}
	}, [id]);

	// Using `Box` here instead of Code snippets with popovers (date picker, combobox, dropdown menu etc) need overflow
	return (
		<Box border borderColor="muted" className={proseBlockClassname} rounded>
			{exampleContentHeadingType && (
				<CardHeader>
					<Heading type={exampleContentHeadingType}>
						{exampleContentHeading}
					</Heading>
				</CardHeader>
			)}
			<LivePreview
				aria-label={`Rendered code snippet example ${id}`}
				// Prevents prose styles from being inherited in live code examples (except for the prose example)
				className={enableProse ? undefined : unsetProseStylesClassname}
				css={{
					// The mdx codeblock transform wraps the code component in a pre which
					// applies some weirdness here. This resets back to normal things
					whiteSpace: 'normal', // other wise text content will not wrap and long lines can break the layout
					fontFamily: tokens.font.body, // because pre applies gets monospace font.
					padding: mapSpacing(1.5),
				}}
				role="region"
			/>
			<Flex
				borderColor="muted"
				borderTop
				css={packs.print.hidden}
				flexWrap="wrap"
				gap={0.5}
				padding={0.5}
			>
				<Button
					aria-controls={codeId}
					aria-expanded={isCodeVisible}
					iconAfter={isCodeVisible ? ChevronUpIcon : ChevronDownIcon}
					onClick={toggleIsCodeVisible}
					ref={liveCodeToggleButton}
					size="sm"
					variant="tertiary"
				>
					{isCodeVisible ? 'Hide live code' : 'Show live code'}
				</Button>
				<Button
					iconAfter={CopyIcon}
					onClick={copyLiveCode}
					size="sm"
					variant="tertiary"
				>
					Copy code
				</Button>
				<ButtonLink href={playroomUrl} size="sm" variant="tertiary">
					Open in Playroom
					<ExternalLinkCallout />
				</ButtonLink>
				<Button
					onClick={setIsResponsivePreviewVisible}
					size="sm"
					variant="tertiary"
				>
					Preview responsive component
				</Button>
			</Flex>
			<Box
				css={packs.print.visible}
				display={isCodeVisible ? 'block' : 'none'}
				id={codeId}
				onKeyDown={onLiveEditorContainerKeyDown}
				palette="dark"
				ref={liveEditorRef}
			>
				<LiveEditor
					code={live.code}
					css={{
						'&:focus-within': packs.outline,
						'textarea, pre': {
							padding: `${mapSpacing(1.5)} !important`,
							tabSize: `4 !important`,
						},
						'& ::selection': {
							color: globalPalette.darkBackgroundBody,
							backgroundColor: globalPalette.darkForegroundAction,
						},
					}}
					disabled={live.disabled}
					language={live.language}
					onChange={handleChange}
					tabMode="focus"
					theme={prismTheme}
				/>
			</Box>
			{live.error ? (
				<Box
					background="shade"
					color="error"
					fontFamily="monospace"
					fontSize="xs"
					padding={1}
				>
					{live.error}
				</Box>
			) : null}
			<PreviewResponsiveComponent
				onClose={setIsResponsivePreviewVisible}
				playroomPreviewUrl={playroomPreviewUrl}
				responsivePreviewHeading={responsivePreviewHeading}
				visible={isResponsivePreviewVisible}
			/>
		</Box>
	);
}

const StaticCode = ({
	code,
	language = '', // By default render as plain text (ie. no language)
}: {
	code: string;
	language?: string;
}) => {
	return (
		<Box
			border
			borderColor="muted"
			css={{
				marginTop: mapSpacing(1.5),

				pre: {
					padding: `${mapSpacing(1.5)} !important`,
					tabSize: `4 !important`,
					overflowX: 'auto',
				},

				'& ::selection': {
					color: globalPalette.darkBackgroundBody,
					backgroundColor: globalPalette.darkForegroundAction,
				},
			}}
			rounded
		>
			<Box dark>
				<Highlight code={code} language={language} theme={prismTheme}>
					{({ className, style, tokens, getLineProps, getTokenProps }) => (
						<pre
							className={[className, unsetProseStylesClassname].join(' ')}
							style={style}
						>
							<code>
								{tokens.map((line, lineKey) => (
									<div key={lineKey} {...getLineProps({ line, key: lineKey })}>
										{line.map((token, tokenKey) => (
											<span
												key={tokenKey}
												{...getTokenProps({ token, key: tokenKey })}
											/>
										))}
									</div>
								))}
							</code>
						</pre>
					)}
				</Highlight>
			</Box>
			<Flex padding={0.5}>
				<Button
					aria-label="Copy code snippet to clipboard"
					iconAfter={CopyIcon}
					onClick={() => copy(code)}
					size="sm"
					variant="tertiary"
				>
					Copy code
				</Button>
			</Flex>
		</Box>
	);
};

const LIVE_SCOPE = {
	...designSystemComponents,
	PlaceholderImage,
	PlaceholderPictogram,
	useState,
	Fragment,
	React,
};

type CodeProps = {
	children?: ReactNode;
	className?: string;
	live?: boolean;
	showCode?: boolean;
	enableProse?: boolean;
	exampleContentHeading?: string;
	exampleContentHeadingType?: 'h2' | 'h3' | 'h4';
	responsivePreviewHeading?: string;
};

export function Code({
	children,
	live,
	showCode,
	enableProse,
	className,
	exampleContentHeading = 'Example',
	exampleContentHeadingType,
	responsivePreviewHeading,
}: CodeProps) {
	const childrenAsString = children?.toString().trim();
	const language = className?.replace(/language-/, '');

	if (!childrenAsString) return null;

	if (live) {
		return (
			<LiveProvider
				code={childrenAsString}
				language={language}
				scope={LIVE_SCOPE}
			>
				<LiveCode
					enableProse={enableProse}
					exampleContentHeading={exampleContentHeading}
					exampleContentHeadingType={exampleContentHeadingType}
					responsivePreviewHeading={responsivePreviewHeading}
					showCode={showCode}
				/>
			</LiveProvider>
		);
	}

	return <StaticCode code={childrenAsString} language={language} />;
}

const sizes = {
	mobile: {
		label: 'Mobile',
		width: 375,
		height: 667,
	},
	tablet: {
		label: 'Tablet',
		width: 768,
		height: 1024,
	},
	desktop: {
		label: 'Desktop',
		width: 1280,
		height: 720,
	},
	xlDesktop: {
		label: 'XL Desktop',
		width: 1920,
		height: 1080,
	},
};
type Sizes = keyof typeof sizes;

const PreviewResponsiveComponent = ({
	onClose,
	playroomPreviewUrl,
	responsivePreviewHeading,
	visible,
}: {
	onClose: () => void;
	playroomPreviewUrl: string;
	responsivePreviewHeading: string;
	visible: boolean;
}) => {
	const [frameSize, setFrameSize] = useState<Sizes>('mobile');
	const handlerForKey = useCallback(
		(key: Sizes) => () => setFrameSize(key),
		[]
	);
	const isChecked = (key: Sizes) => key === frameSize;

	if (!visible) return null;

	// Since react portals can not be rendered on the server and this component is always closed by default
	// This component doesn't need to be server side rendered
	if (!canUseDOM()) return null;

	return createPortal(
		<FocusLock returnFocus>
			<LockScroll />
			<div
				css={{
					display: 'flex',
					flexDirection: 'column',
					height: '100vh',
					left: 0,
					position: 'fixed',
					top: 0,
					width: '100%',
					zIndex: tokens.zIndex.popover,
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
						dark
						display="flex"
						flexDirection={{
							xs: 'column',
							sm: 'column',
							md: 'column',
							lg: 'row',
						}}
						gap={1}
					>
						<Button
							iconBefore={ArrowLeftIcon}
							onClick={() => onClose()}
							size="sm"
							variant="tertiary"
						>
							Back to documentation
						</Button>
						<H3>{responsivePreviewHeading}</H3>
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
						<iframe
							css={{
								border: 0,
								display: 'block',
								height: '100%',
								margin: '0 auto',
								width: sizes[frameSize].width,
							}}
							src={playroomPreviewUrl}
						></iframe>
					</div>
				</Box>
			</div>
		</FocusLock>,
		document.body
	);
};

const LockScroll = () => <Global styles={{ body: { overflow: 'hidden' } }} />;

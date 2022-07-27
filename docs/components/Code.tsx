import React, {
	ReactNode,
	useState,
	useCallback,
	Fragment,
	useEffect,
} from 'react';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import weakMemoize from '@emotion/weak-memoize';
import Frame, { FrameContextConsumer } from 'react-frame-component';
import {
	LiveProvider,
	LiveEditor,
	LivePreview,
	Editor as StaticEditor,
	withLive,
} from 'react-live';
import { createUrl } from 'playroom/utils';
import { Language } from 'prism-react-renderer';
import copy from 'clipboard-copy';
import { useId } from '@reach/auto-id';
import { theme } from '@ag.ds-next/ag-branding';
import { ExternalLinkCallout } from '@ag.ds-next/a11y';
import {
	Core,
	globalPalette,
	mapSpacing,
	packs,
	useToggleState,
} from '@ag.ds-next/core';
import { Box, Flex } from '@ag.ds-next/box';
import { Button, ButtonLink } from '@ag.ds-next/button';
import { CopyIcon, ChevronDownIcon, ChevronUpIcon } from '@ag.ds-next/icon';
import { proseBlockClassname } from '@ag.ds-next/prose';
import * as designSystemComponents from './designSystemComponents';
import { prismTheme } from './prism-theme';

const PlaceholderImage = () => (
	<img
		src="/agds-next/img/placeholder/600X260.png"
		alt="Grey placeholder image"
		css={{ width: '100%' }}
	/>
);

const LiveCode = withLive(function LiveCode(props: unknown) {
	// The types on `withLive` are kind of useless.
	const { live } = props as {
		live: {
			code: string;
			error: string | undefined;
			language: Language;
			disabled: boolean;
			onChange: (code: string) => void;
		};
	};

	const liveOnChange = live.onChange;
	const [localCopy, setLocalCopy] = useState<string>(live.code);
	const [isCodeVisible, toggleIsCodeVisible] = useToggleState(false, true);

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

	const playroomUrl = createUrl({
		baseUrl: 'https://steelthreads.github.io/agds-next/playroom',
		code: live.code,
	});

	const id = useId();
	const codeId = `live-code-${id}`;

	return (
		<Box border rounded borderColor="muted" className={proseBlockClassname}>
			<LiveCodeIFrame>
				<LivePreview />
			</LiveCodeIFrame>
			<Flex
				flexWrap="wrap"
				padding={0.5}
				gap={0.5}
				borderTop
				borderColor="muted"
				css={packs.print.hidden}
			>
				<Button
					size="sm"
					variant="tertiary"
					onClick={toggleIsCodeVisible}
					iconAfter={isCodeVisible ? ChevronUpIcon : ChevronDownIcon}
					aria-expanded={isCodeVisible}
					aria-label={isCodeVisible ? 'Hide code snippet' : 'Show code snippet'}
					aria-controls={codeId}
				>
					{isCodeVisible ? 'Hide live code' : 'Show live code'}
				</Button>
				<Button
					size="sm"
					variant="tertiary"
					onClick={copyLiveCode}
					iconAfter={CopyIcon}
					aria-label="Copy code snippet to clipboard"
				>
					Copy code
				</Button>
				<ButtonLink
					href={playroomUrl}
					size="sm"
					variant="tertiary"
					aria-label="Open code snippet in Playroom"
				>
					Open in Playroom
					<ExternalLinkCallout />
				</ButtonLink>
			</Flex>
			<Box
				id={codeId}
				display={isCodeVisible ? 'block' : 'none'}
				css={packs.print.visible}
			>
				<LiveEditor
					theme={prismTheme}
					code={live.code}
					language={live.language}
					disabled={live.disabled}
					onChange={handleChange}
					css={{
						'textarea, pre': {
							padding: `${mapSpacing(1.5)} !important`,
						},
						'& ::selection': {
							color: globalPalette.darkBackgroundBody,
							backgroundColor: globalPalette.darkForegroundAction,
						},
					}}
				/>
			</Box>
			{live.error ? (
				<Box
					fontFamily="monospace"
					fontSize="xs"
					padding={1}
					color="error"
					background="shade"
				>
					{live.error}
				</Box>
			) : null}
		</Box>
	);
});

const StaticCode = ({
	code,
	language,
}: {
	code: string;
	language: Language;
}) => {
	return (
		<Box
			border
			rounded
			borderColor="muted"
			css={{
				overflow: 'hidden',
				marginTop: mapSpacing(1.5),

				'textarea, pre': {
					padding: `${mapSpacing(1.5)} !important`,
				},

				'& ::selection': {
					color: globalPalette.darkBackgroundBody,
					backgroundColor: globalPalette.darkForegroundAction,
				},
			}}
		>
			<StaticEditor
				code={code}
				theme={prismTheme}
				language={language}
				disabled
			/>
			<Flex padding={0.5}>
				<Button
					size="sm"
					variant="tertiary"
					onClick={() => copy(code)}
					iconAfter={CopyIcon}
					aria-label="Copy code snippet to clipboard"
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
	useState,
	Fragment,
	React,
};

type CodeProps = {
	children?: ReactNode;
	className?: string;
	live?: boolean;
};

export function Code({ children, live, className }: CodeProps) {
	const childrenAsString = children?.toString().trim();
	const language = className?.replace(/language-/, '') as Language;

	if (!childrenAsString) return null;

	if (live) {
		return (
			<LiveProvider
				code={childrenAsString}
				scope={LIVE_SCOPE}
				language={language}
			>
				<LiveCode />
			</LiveProvider>
		);
	}

	return <StaticCode language={language} code={childrenAsString} />;
}

function LiveCodeIFrame({ children }: { children: ReactNode }) {
	const [mounted, setMounted] = useState(false);
	const [frameRef, setFrameRef] = useState<HTMLIFrameElement>();
	const [frameHeight, setFrameHeight] = useState(0);

	const contentDidMount = useCallback(() => {
		const frameEl =
			frameRef?.contentWindow?.document.documentElement.querySelector(
				'.frame-content'
			);
		if (!frameEl) return;

		const observer = new ResizeObserver(function () {
			setFrameHeight(frameEl.scrollHeight);
		});

		observer.observe(frameEl);
	}, [frameRef]);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<Frame
			title="code example"
			frameBorder={0}
			width="100%"
			height={frameHeight}
			contentDidMount={contentDidMount}
			css={{ display: 'block' }}
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			ref={setFrameRef}
		>
			<LiveCodeFrameProvider>{children}</LiveCodeFrameProvider>
		</Frame>
	);
}

// https://emotion.sh/docs/@emotion/cache#createcache
const memoizedCreateCacheWithContainer = weakMemoize((container: HTMLElement) =>
	createCache({
		key: 'live-code-preview',
		container,
		stylisPlugins: [prefixer],
	})
);

export function LiveCodeFrameProvider({ children }: { children: ReactNode }) {
	return (
		<FrameContextConsumer>
			{({ document }) => {
				if (!document?.head) return null;
				return (
					<CacheProvider
						value={memoizedCreateCacheWithContainer(document.head)}
					>
						<Core theme={theme}>
							<Box padding={1.5}>{children}</Box>
						</Core>
					</CacheProvider>
				);
			}}
		</FrameContextConsumer>
	);
}

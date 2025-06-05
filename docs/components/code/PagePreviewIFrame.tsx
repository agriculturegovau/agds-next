import { createPreviewUrl, createUrl } from 'playroom';
import { Box } from '@ag.ds-next/react/box';
import { Button } from '@ag.ds-next/react/button';
import { packs, useId, useToggleState } from '@ag.ds-next/react/core';
import { ChevronDownIcon, ChevronUpIcon } from '@ag.ds-next/react/icon';
import useGetScrollbarWidth from '../../lib/hooks/useGetScrollbarWidth';
import {
	CopyCodeButton,
	OpenInPlayroomButton,
	PreviewActionContainer,
	ResponsivePreviewButton,
} from './PreviewComponents';
import { StaticCode } from './StaticCode';
import { checkAndModifyCode } from './utils';

export function PagePreviewIFrame({
	code,
	language,
	showCode = false,
	title,
	disablePadding,
}: {
	code: string;
	language?: string;
	showCode?: boolean;
	title: string;
	disablePadding?: boolean;
}) {
	const scrollbarWidth = useGetScrollbarWidth();
	const [isCodeVisible, toggleIsCodeVisible] = useToggleState(
		showCode,
		!showCode
	);

	const id = useId();
	const codeId = `live-code-${id}`;

	const playroomUrl = createUrl({
		baseUrl: process.env.NEXT_PUBLIC_PLAYROOM_URL,
		code: checkAndModifyCode(code),
	});
	const playroomPreviewUrl = createPreviewUrl({
		baseUrl: process.env.NEXT_PUBLIC_PLAYROOM_URL,
		code: checkAndModifyCode(code),
	});

	return (
		<Box border borderColor="muted">
			<div
				css={{
					margin: '1rem',
					marginRight: `calc(1rem - ${scrollbarWidth}px)`,
					marginBottom: 0,
				}}
			>
				<iframe
					css={{
						width: '100%',
						height: '36rem',
						border: 0,
					}}
					src={playroomPreviewUrl}
					title={title}
				></iframe>
			</div>
			<PreviewActionContainer>
				<Button
					aria-controls={codeId}
					aria-expanded={isCodeVisible}
					iconAfter={isCodeVisible ? ChevronUpIcon : ChevronDownIcon}
					onClick={toggleIsCodeVisible}
					size="sm"
					variant="tertiary"
				>
					{isCodeVisible ? 'Hide code' : 'Show code'}
				</Button>
				<CopyCodeButton code={code} />
				<OpenInPlayroomButton playroomUrl={playroomUrl} />
				<ResponsivePreviewButton
					code={code}
					disablePadding={disablePadding}
					title={title}
				/>
			</PreviewActionContainer>
			<Box
				css={packs.print.visible}
				display={isCodeVisible ? 'block' : 'none'}
				id={codeId}
				palette="dark"
			>
				<StaticCode code={code} inline language={language} />
			</Box>
		</Box>
	);
}

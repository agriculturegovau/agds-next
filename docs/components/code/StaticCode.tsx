import copy from 'clipboard-copy';
import { Highlight, Prism } from 'prism-react-renderer';
import { Box } from '@ag.ds-next/react/box';
import { Button } from '@ag.ds-next/react/button';
import { globalPalette, mapSpacing } from '@ag.ds-next/react/core';
import { Flex } from '@ag.ds-next/react/flex';
import { CopyIcon } from '@ag.ds-next/react/icon';
import { unsetProseStylesClassname } from '@ag.ds-next/react/prose';
import { prismTheme } from './prism-theme';

// Add support for diff language support
// https://github.com/FormidableLabs/prism-react-renderer#custom-language-support
(typeof global !== 'undefined' ? global : window).Prism = Prism;
require('prismjs/components/prism-diff');

export const StaticCode = ({
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
					overflowX: 'auto',
					padding: `${mapSpacing(1.5)} !important`,
					tabSize: `4 !important`,
				},

				'& ::selection': {
					backgroundColor: globalPalette.darkForegroundAction,
					color: globalPalette.darkBackgroundBody,
				},
			}}
			rounded
		>
			<Box dark>
				<Highlight code={code} language={language} theme={prismTheme}>
					{({ className, getLineProps, getTokenProps, style, tokens }) => (
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

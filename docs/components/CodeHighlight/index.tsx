import PrismHighlight, { Language, Prism } from 'prism-react-renderer';
import rangeParser from 'parse-numeric-range';

import { theme } from '../prism-theme';
import * as styles from './styles.css';

function getShouldHighlightLine(meta?: string) {
	const pattern = /{([\d,-]+)}/;
	const result = meta && pattern.exec(meta);

	if (result) {
		const lineNumbers = rangeParser(result[1]);
		return (index: number) => lineNumbers.includes(index + 1);
	} else {
		return () => false;
	}
}

export function CodeHighlight({
	code,
	language,
	metastring,
}: {
	code: string;
	language: string;
	metastring?: string;
}) {
	const shouldHighlightLine = getShouldHighlightLine(metastring);

	return (
		<PrismHighlight
			Prism={Prism}
			theme={theme}
			code={code}
			language={language as Language}
		>
			{({ tokens, getLineProps, getTokenProps }) => (
				<code className={styles.code}>
					{tokens.map((line, i) => {
						return (
							<div
								key={i}
								{...getLineProps({
									line,
									key: i,
								})}
								style={{
									backgroundColor: shouldHighlightLine(i)
										? 'rgba(0,0,0,0.05)'
										: undefined,
								}}
							>
								{line.map((token, key) => (
									<span key={key} {...getTokenProps({ token, key })} />
								))}
							</div>
						);
					})}
				</code>
			)}
		</PrismHighlight>
	);
}

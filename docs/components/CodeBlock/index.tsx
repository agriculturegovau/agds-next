import { CodeHighlight } from '../CodeHighlight';
import { ReactLive } from '../ReactLive';

import styles from './styles.module.css';

type CodeBlockProps = {
	className: string;
	code: string;
	demo?: boolean;
	initialCompiledResult: string;
	live: boolean;
	metastring?: string;
	scope: any;
};

export function CodeBlock({
	className,
	code,
	demo,
	initialCompiledResult,
	live,
	metastring,
	scope,
}: CodeBlockProps) {
	const language = className?.replace(/language-/, '');

	if (live) {
		return (
			<ReactLive
				code={code}
				demo={demo}
				initialCompiledResult={initialCompiledResult}
				scope={scope}
			/>
		);
	}

	return (
		<pre className={styles.pre}>
			<CodeHighlight metastring={metastring} code={code} language={language} />
		</pre>
	);
}

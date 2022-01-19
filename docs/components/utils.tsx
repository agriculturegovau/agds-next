import React, { useState, Fragment } from 'react';

import { contentComponents } from './mdx';
import { designSystemComponents } from './design-system-components';

import { CodeBlock } from './CodeBlock';
type CodeProps = {
	children: string;
	className: string;
	initialCompiledResult: string;
	live: boolean;
};

function Code({ children, initialCompiledResult, live, className }: CodeProps) {
	return (
		<CodeBlock
			code={children.trim()}
			initialCompiledResult={initialCompiledResult}
			scope={{
				...designSystemComponents,
				useState,
				Fragment,
				React,
			}}
			live={live}
			className={className}
		/>
	);
}
export const mdxComponents = {
	...contentComponents,
	code: Code,
	Fragment,
	...designSystemComponents,
};

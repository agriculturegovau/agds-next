import React, { useState, Fragment } from 'react';
import { CodeBlock } from './CodeBlock';

import { Button } from '@ag.ds-next/button';
import { Box } from '@ag.ds-next/box';
import { Flex } from '@ag.ds-next/flex';
import { Body } from '@ag.ds-next/body';
import { Text } from '@ag.ds-next/text';
import { Heading } from '@ag.ds-next/heading';

import { NextLink } from './mdx/NextLink';
import { Paragraph } from './mdx/Paragraph';
import { Blockquote } from './mdx/Blockquote';
import { ListItem } from './mdx/ListItem';
import { H1, H2, H3, H4, H5, H6 } from './mdx/Headings';
import { InlineCode } from './mdx/InlineCode';

const packages = {
	Button,
	Box,
	Flex,
	Body,
	Text,
	Heading,

	// Core
	// DarkModeBtn
	// Emoji
	// Cli
	// Copy
	// Lab
	// Roadmap
	// Shield
	// Loading
	// Modal
	// Stack
	// Type
	Fragment,
};

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
				...packages,
				useState,
				React,
			}}
			live={live}
			className={className}
		/>
	);
}
export const mdxComponents = {
	a: NextLink,
	p: Paragraph,
	blockquote: Blockquote,
	li: ListItem,
	h1: H1,
	h2: H2,
	h3: H3,
	h4: H4,
	h5: H5,
	h6: H6,
	inlineCode: InlineCode,
	code: Code,
	...packages,
};

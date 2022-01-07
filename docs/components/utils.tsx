import React, { useState, Fragment } from 'react';
import { CodeBlock } from './CodeBlock';

import { Button } from '@ag.ds-next/button';
import { Box, Flex, Stack } from '@ag.ds-next/box';
import { Body } from '@ag.ds-next/body';
import { Text } from '@ag.ds-next/text';
import { Heading, H1, H2, H3, H4, H5, H6 } from '@ag.ds-next/heading';
import { LinkList } from '@ag.ds-next/link-list';
import { Header, HeaderBrand, HeaderContainer } from '@ag.ds-next/header';
import { Footer } from '@ag.ds-next/footer';

import { contentComponents } from './mdx';

// TODO: This feels hacky, importing every component so we can do jsx live.
const packages = {
	Button,
	Box,
	Flex,
	Stack,
	Body,
	Text,
	Heading,
	H1,
	H2,
	H3,
	H4,
	H5,
	H6,
	LinkList,
	Footer,
	Header,
	HeaderBrand,
	HeaderContainer,

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
	...contentComponents,
	code: Code,
	...packages,
};

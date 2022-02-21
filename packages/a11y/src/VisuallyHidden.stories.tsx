import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { TextLink } from '@ag.ds-next/text/src/Text';
import { VisuallyHidden, visuallyHiddenStyles } from './VisuallyHidden';

export default {
	title: 'foundations/A11y/VisuallyHidden',
	component: VisuallyHidden,
} as ComponentMeta<typeof VisuallyHidden>;

export const Basic = () => (
	<TextLink href="#">
		Read more
		<VisuallyHidden> about how to visually hide content</VisuallyHidden>
	</TextLink>
);

export const Styles = () => (
	<TextLink href="#">
		Read more
		<span css={visuallyHiddenStyles}>about how to visually hide content</span>
	</TextLink>
);

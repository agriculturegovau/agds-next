import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useEffect, useRef } from 'react';
import { TextLink } from './TextLink';

export default {
	title: 'navigation/TextLink',
	component: TextLink,
} as ComponentMeta<typeof TextLink>;

const Template: ComponentStory<typeof TextLink> = (args) => {
	const ref = useRef();
	useEffect(() => console.log(ref));
	return <TextLink ref={ref} {...args} />;
};

export const Basic = Template.bind({});
Basic.args = { children: 'Internal link', href: '#' };

export const AsButton = Template.bind({});
AsButton.args = { as: 'button', children: 'Button', onClick: console.log };

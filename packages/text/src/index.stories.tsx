import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { fontGrid } from '@ag.ds-next/core';
import { Text } from './index';

export default {
	title: 'primitive/Text',
	component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => {
	return <Text {...args}>This is some text</Text>;
};

export const Basic = Template.bind({});
Basic.args = {};

export const Sizes = (args) => (
	<div>
		<Text as="p" {...args} fontSize="xs">
			This is some text - xs.
		</Text>
		<Text as="p" {...args} fontSize="sm">
			This is some text - sm.
		</Text>
		<Text as="p" {...args} fontSize="md">
			This is some text - md.
		</Text>
		<Text as="p" {...args} fontSize="lg">
			This is some text - lg.
		</Text>
		<Text as="p" {...args} fontSize="xl">
			This is some text - xl.
		</Text>
		<Text as="p" {...args} fontSize="xxl">
			This is some text - xxl.
		</Text>
		<Text as="p" {...args} fontSize="xxxl">
			This is some text - xxxl.
		</Text>
	</div>
);

export const Paragraph = (args) => (
	<Text as="p" lineHeight="default" {...args}>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis,
		felis eget imperdiet dapibus, sapien enim maximus urna, at iaculis est risus
		a felis. Vivamus euismod est nisl, vestibulum ullamcorper nulla faucibus ac.
		Nam consectetur luctus auctor. Sed id purus urna. Phasellus ut est urna.
		Vivamus ut finibus ipsum. Duis commodo suscipit nibh, dapibus consectetur
		ante dignissim vitae. Pellentesque luctus quam lectus, at eleifend turpis
		congue et. Mauris turpis lectus, mollis a nisi id, faucibus commodo dui.
		Cras mollis neque vel elit convallis dapibus. Nam pellentesque enim orci,
		nec sollicitudin felis semper at.
	</Text>
);

export const FontGrid = (args) => {
	return (
		<Text
			as="p"
			lineHeight="default"
			style={{
				...fontGrid(3.21, 'default'),
				backgroundImage:
					'url("https://gold.designsystemau.org/assets/img/spacing-example-grid.png")',
			}}
			{...args}
		>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis,
			felis eget imperdiet dapibus, sapien enim maximus urna, at iaculis est
			risus a felis. Vivamus euismod est nisl, vestibulum ullamcorper nulla
			faucibus ac. Nam consectetur luctus auctor. Sed id purus urna. Phasellus
			ut est urna. Vivamus ut finibus ipsum. Duis commodo suscipit nibh, dapibus
			consectetur ante dignissim vitae. Pellentesque luctus quam lectus, at
			eleifend turpis congue et. Mauris turpis lectus, mollis a nisi id,
			faucibus commodo dui. Cras mollis neque vel elit convallis dapibus. Nam
			pellentesque enim orci, nec sollicitudin felis semper at.
		</Text>
	);
};

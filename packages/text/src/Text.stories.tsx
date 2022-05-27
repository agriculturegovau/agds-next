import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { fontGrid } from '@ag.ds-next/core';
import { Text } from './Text';

export default {
	title: 'foundations/Text/Text',
	component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => {
	return <Text {...args}>This is some text</Text>;
};

export const Basic = Template.bind({});
Basic.args = {};

export const Sizes: ComponentStory<typeof Text> = (args) => (
	<div>
		<Text as="p" {...args} fontSize="xs">
			This is some text (xs)
		</Text>
		<Text as="p" {...args} fontSize="sm">
			This is some text (sm)
		</Text>
		<Text as="p" {...args} fontSize="md">
			This is some text (md)
		</Text>
		<Text as="p" {...args} fontSize="lg">
			This is some text (lg)
		</Text>
		<Text as="p" {...args} fontSize="xl">
			This is some text (xl)
		</Text>
		<Text as="p" {...args} fontSize="xxl">
			This is some text (xxl)
		</Text>
		<Text as="p" {...args} fontSize="xxxl">
			This is some text (xxxl)
		</Text>
	</div>
);

export const Paragraph: ComponentStory<typeof Text> = (args) => (
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

export const FontGrid: ComponentStory<typeof Text> = (args) => {
	return (
		<Text
			as="p"
			lineHeight="default"
			style={{
				...fontGrid(3.21, 'default'),
				backgroundImage:
					'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAECAYAAABP2FU6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjBCMzIyNkY5MEUwRDExRThCMjRDQjE2OTQ1RUM2NTM0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjBCMzIyNkZBMEUwRDExRThCMjRDQjE2OTQ1RUM2NTM0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MEIzMjI2RjcwRTBEMTFFOEIyNENCMTY5NDVFQzY1MzQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MEIzMjI2RjgwRTBEMTFFOEIyNENCMTY5NDVFQzY1MzQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4Il4ptAAAAGElEQVR42mL4//8/AxMDEEAJRgZfgAADADZqA1Kf0oZtAAAAAElFTkSuQmCC)',
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

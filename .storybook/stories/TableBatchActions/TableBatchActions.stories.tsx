import { Meta } from '@storybook/react';
import { TableBatchActions } from './TableBatchActions';

const meta: Meta = {
	title: 'content/Table/Batch actions',
	parameters: {
		layout: 'fullscreen',
	},
};

export default meta;

export function BodyBackground() {
	return <TableBatchActions background="body" />;
}

export function BodyAltBackground() {
	return <TableBatchActions background="bodyAlt" />;
}

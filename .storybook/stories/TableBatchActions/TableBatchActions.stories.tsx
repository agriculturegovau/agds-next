import { Meta } from '@storybook/react';
import { TableBatchActionsBar } from './TableBatchActionsBar';

const meta: Meta = {
	title: 'content/Table/Batch actions',
	parameters: {
		layout: 'fullscreen',
	},
};

export default meta;

export function BodyBackground() {
	return <TableBatchActionsBar background="body" />;
}

export function BodyAltBackground() {
	return <TableBatchActionsBar background="bodyAlt" />;
}

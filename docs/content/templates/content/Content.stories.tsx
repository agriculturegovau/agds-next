import React from 'react';
import { Content } from './Content';
import { ContentWithSideNav } from './ContentWithSideNav';

export default {
	title: 'Templates/Content page',
	parameters: {
		layout: 'fullscreen',
	},
};

export function Basic() {
	return <Content />;
}

export function WithSideNav() {
	return <ContentWithSideNav />;
}

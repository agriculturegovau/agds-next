import '@testing-library/jest-dom';
import 'html-validate/jest';
import { render, cleanup } from '../../../../test-utils';
import { Tab } from './Tab';
import { TabList } from './TabList';
import { TabPanel } from './TabPanel';
import { TabPanels } from './TabPanels';
import { Tabs } from './Tabs';

afterEach(cleanup);

function renderTabs() {
	return render(
		<Tabs>
			<TabList>
				<Tab>Tab 1</Tab>
				<Tab>Tab 2</Tab>
				<Tab>Tab 3</Tab>
			</TabList>
			<TabPanels>
				<TabPanel>Tab panel 1.</TabPanel>
				<TabPanel>Tab panel 2.</TabPanel>
				<TabPanel>Tab panel 3.</TabPanel>
			</TabPanels>
		</Tabs>
	);
}

describe('Tabs', () => {
	it('renders correctly', () => {
		const { container } = renderTabs();
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { container } = renderTabs();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
			rules: {
				// react 18s `useId` break this rule
				'valid-id': 'off',
			},
		});
	});
});

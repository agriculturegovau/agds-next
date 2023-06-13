import { Meta, StoryObj } from '@storybook/react';
import { Fragment } from 'react';
import { Button, ButtonGroup } from '../button';
import { useTernaryState } from '../core';
import { Divider } from '../divider';
import { Fieldset } from '../fieldset';
import { FormStack } from '../form-stack';
import { Select } from '../select';
import { Stack } from '../stack';
import { FilterDrawer } from './FilterDrawer';

const meta: Meta<typeof FilterDrawer> = {
	title: 'content/FilterDrawer',
	component: FilterDrawer,
	args: {
		title: 'Filters',
	},
	render: function Render(props) {
		const [isFilterDrawerOpen, openFilterDrawer, closeFilterDrawer] =
			useTernaryState(true);
		return (
			<Fragment>
				<Button onClick={openFilterDrawer}>Open Filter drawer</Button>
				<FilterDrawer
					isOpen={isFilterDrawerOpen}
					onDismiss={closeFilterDrawer}
					title={props.title}
					actions={
						<ButtonGroup>
							<Button onClick={closeFilterDrawer}>Apply filters</Button>
							<Button variant="secondary" onClick={closeFilterDrawer}>
								Reset filters
							</Button>
							<Button variant="tertiary" onClick={closeFilterDrawer}>
								Cancel
							</Button>
						</ButtonGroup>
					}
				>
					<Stack gap={3}>
						<Fieldset legend="Example fieldset">
							<FormStack>
								{Array.from(Array(5)).map((_, idx) => (
									<Select
										key={idx}
										label="Example filter"
										options={[
											{ value: 'a', label: 'Option A' },
											{ value: 'b', label: 'Option B' },
											{ value: 'c', label: 'Option C' },
										]}
										hideOptionalLabel
										block
									/>
								))}
							</FormStack>
						</Fieldset>
						<Divider />
						<Fieldset legend="Example fieldset">
							<FormStack>
								{Array.from(Array(4)).map((_, idx) => (
									<Select
										key={idx}
										label="Example filter"
										options={[
											{ value: 'a', label: 'Option A' },
											{ value: 'b', label: 'Option B' },
											{ value: 'c', label: 'Option C' },
										]}
										hideOptionalLabel
										block
									/>
								))}
							</FormStack>
						</Fieldset>
					</Stack>
				</FilterDrawer>
			</Fragment>
		);
	},
};

export default meta;

type Story = StoryObj<typeof FilterDrawer>;

export const Basic: Story = {};

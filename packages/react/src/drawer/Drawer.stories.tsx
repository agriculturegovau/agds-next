import { Meta, StoryObj } from '@storybook/react';
import { Fragment, useState } from 'react';
import { Button, ButtonGroup } from '../button';
import { Checkbox } from '../checkbox';
import { ComboboxMulti, DefaultComboboxOption } from '../combobox';
import { ControlGroup } from '../control-group';
import { useTernaryState } from '../core';
import { DatePicker } from '../date-picker';
import { DateRangePicker, DateRangeWithString } from '../date-range-picker';
import { Divider } from '../divider';
import { Fieldset } from '../fieldset';
import { FormStack } from '../form-stack';
import { Radio } from '../radio';
import { Select } from '../select';
import { Stack } from '../stack';
import { Switch } from '../switch';
import { Text } from '../text';
import { Drawer } from './Drawer';

const meta: Meta<typeof Drawer> = {
	title: 'layout/Drawer',
	component: Drawer,
};

export default meta;

type Story = StoryObj<typeof Drawer>;

export const Basic: Story = {
	args: {
		title: 'Drawer title',
	},
	render: function Render(props) {
		const [isOpen, open, close] = useTernaryState(false);
		return (
			<Fragment>
				<Button onClick={open}>Open Drawer</Button>
				<Drawer
					isOpen={isOpen}
					onDismiss={close}
					title={props.title}
					actions={
						<ButtonGroup>
							<Button onClick={close}>Primary</Button>
							<Button variant="secondary" onClick={close}>
								Secondary
							</Button>
							<Button variant="tertiary" onClick={close}>
								Tertiary
							</Button>
						</ButtonGroup>
					}
				>
					<Text as="p">Drawer body area.</Text>
				</Drawer>
			</Fragment>
		);
	},
};

export const FiltersBasic: Story = {
	args: {
		title: 'Filter by',
	},
	render: function Render(props) {
		const [isDrawerOpen, openDrawer, closeDrawer] = useTernaryState(false);

		type FormState = {
			select: string;
			radio: string;
		};

		const initialFilterState: FormState = {
			select: '',
			radio: 'a',
		};

		const [filters, setFilters] = useState(initialFilterState);
		const [formState, setFormState] = useState(initialFilterState);

		const updateFormState = (formState: Partial<FormState>) => {
			setFormState((currentState) => ({
				...currentState,
				...formState,
			}));
		};

		const onApplyFiltersClick = () => {
			setFilters(formState);
			closeDrawer();
		};

		const onClearFiltersClick = () => {
			setFormState(initialFilterState);
			setFilters(initialFilterState);
		};

		const onCloseClick = () => {
			setFormState(filters);
			closeDrawer();
		};

		return (
			<Fragment>
				<Button onClick={openDrawer}>Open Drawer</Button>
				<Drawer
					isOpen={isDrawerOpen}
					onDismiss={onCloseClick}
					title={props.title}
					actions={
						<ButtonGroup>
							<Button onClick={onApplyFiltersClick}>Apply filters</Button>
							<Button variant="secondary" onClick={onClearFiltersClick}>
								Clear filters
							</Button>
							<Button variant="tertiary" onClick={onCloseClick}>
								Cancel
							</Button>
						</ButtonGroup>
					}
				>
					<FormStack>
						<Select
							label="Example filter"
							hideOptionalLabel
							placeholder="Please select"
							options={[
								{ value: 'a', label: 'Option A' },
								{ value: 'b', label: 'Option B' },
								{ value: 'c', label: 'Option C' },
								{ value: 'd', label: 'Option D' },
								{ value: 'e', label: 'Option E' },
								{ value: 'f', label: 'Option F' },
							]}
							value={formState.select}
							onChange={(e) => updateFormState({ select: e.target.value })}
						/>
						<ControlGroup label="Example filter" hideOptionalLabel block>
							<Radio
								value="a"
								checked={formState.radio === 'a'}
								onChange={(e) =>
									updateFormState({
										radio: e.target.value,
									})
								}
							>
								Option A
							</Radio>
							<Radio
								value="b"
								checked={formState.radio === 'b'}
								onChange={(e) =>
									updateFormState({
										radio: e.target.value,
									})
								}
							>
								Option B
							</Radio>
							<Radio
								value="c"
								checked={formState.radio === 'c'}
								onChange={(e) =>
									updateFormState({
										radio: e.target.value,
									})
								}
							>
								Option C
							</Radio>
						</ControlGroup>
					</FormStack>
				</Drawer>
			</Fragment>
		);
	},
};

export const FiltersWithFieldsets: Story = {
	args: {
		title: 'Filter by',
	},
	render: function Render(props) {
		const [isDrawerOpen, openDrawer, closeDrawer] = useTernaryState(false);

		type FormState = {
			switch: boolean;
			checkbox: boolean;
			radio: string;
			select: string;
			datePicker: Date | string | undefined;
			dateRangePicker: DateRangeWithString;
			comboboxMulti: DefaultComboboxOption[];
		};

		const initialFilterState: FormState = {
			switch: false,
			checkbox: false,
			select: '',
			radio: 'a',
			datePicker: undefined,
			dateRangePicker: { from: undefined, to: undefined },
			comboboxMulti: [],
		};

		const [filters, setFilters] = useState(initialFilterState);
		const [formState, setFormState] = useState(initialFilterState);

		const updateFormState = (formState: Partial<FormState>) => {
			setFormState((currentState) => ({
				...currentState,
				...formState,
			}));
		};

		const onApplyFiltersClick = () => {
			setFilters(formState);
			closeDrawer();
		};

		const onClearFiltersClick = () => {
			setFormState(initialFilterState);
			setFilters(initialFilterState);
		};

		const onCloseClick = () => {
			setFormState(filters);
			closeDrawer();
		};

		return (
			<Fragment>
				<Button onClick={openDrawer}>Open Drawer</Button>
				<Drawer
					isOpen={isDrawerOpen}
					onDismiss={onCloseClick}
					title={props.title}
					actions={
						<ButtonGroup>
							<Button onClick={onApplyFiltersClick}>Apply filters</Button>
							<Button variant="secondary" onClick={onClearFiltersClick}>
								Clear filters
							</Button>
							<Button variant="tertiary" onClick={onCloseClick}>
								Cancel
							</Button>
						</ButtonGroup>
					}
				>
					<Stack gap={3}>
						<Fieldset legend="Example fieldset">
							<FormStack>
								<Switch
									label="Example filter"
									checked={formState.switch}
									onChange={(checked) => updateFormState({ switch: checked })}
								/>
								<Select
									label="Example filter"
									hideOptionalLabel
									placeholder="Please select"
									options={[
										{ value: 'a', label: 'Option A' },
										{ value: 'b', label: 'Option B' },
										{ value: 'c', label: 'Option C' },
										{ value: 'd', label: 'Option D' },
										{ value: 'e', label: 'Option E' },
										{ value: 'f', label: 'Option F' },
									]}
									value={formState.select}
									onChange={(e) => updateFormState({ select: e.target.value })}
								/>
								<ControlGroup label="Example filter" hideOptionalLabel block>
									<Radio
										value="a"
										checked={formState.radio === 'a'}
										onChange={(e) =>
											updateFormState({
												radio: e.target.value,
											})
										}
									>
										Option A
									</Radio>
									<Radio
										value="b"
										checked={formState.radio === 'b'}
										onChange={(e) =>
											updateFormState({
												radio: e.target.value,
											})
										}
									>
										Option B
									</Radio>
									<Radio
										value="c"
										checked={formState.radio === 'c'}
										onChange={(e) =>
											updateFormState({
												radio: e.target.value,
											})
										}
									>
										Option C
									</Radio>
								</ControlGroup>
							</FormStack>
						</Fieldset>
						<Divider />
						<Fieldset legend="Example fieldset">
							<FormStack>
								<Checkbox
									checked={formState.checkbox}
									onChange={(e) =>
										updateFormState({ checkbox: e.target.checked })
									}
								>
									Example filter
								</Checkbox>
								<ComboboxMulti
									label="Example filter"
									hideOptionalLabel
									hint="Start typing to see results"
									value={formState.comboboxMulti}
									onChange={(value) =>
										updateFormState({ comboboxMulti: value })
									}
									options={[
										{ value: 'a', label: 'Option A' },
										{ value: 'b', label: 'Option B' },
										{ value: 'c', label: 'Option C' },
										{ value: 'd', label: 'Option D' },
										{ value: 'e', label: 'Option E' },
										{ value: 'f', label: 'Option F' },
									]}
								/>
								<DatePicker
									label="Example filter"
									hideOptionalLabel
									value={formState.datePicker}
									onChange={(value) => updateFormState({ datePicker: value })}
									onInputChange={(value) =>
										updateFormState({ datePicker: value })
									}
								/>
								<DateRangePicker
									legend="Example filter"
									hideOptionalLabel
									value={formState.dateRangePicker}
									onChange={(value) =>
										updateFormState({ dateRangePicker: value })
									}
									onFromInputChange={(from) =>
										updateFormState({
											dateRangePicker: {
												from,
												to: formState.dateRangePicker.to,
											},
										})
									}
									onToInputChange={(to) =>
										updateFormState({
											dateRangePicker: {
												from: formState.dateRangePicker.from,
												to,
											},
										})
									}
								/>
							</FormStack>
						</Fieldset>
					</Stack>
				</Drawer>
			</Fragment>
		);
	},
};

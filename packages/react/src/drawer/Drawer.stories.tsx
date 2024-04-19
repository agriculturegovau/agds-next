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
import { Prose } from '../prose';
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
					onClose={close}
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
					<Select
						label="Example filter"
						hideOptionalLabel
						placeholder="Please select"
						options={[
							{ value: 'a', label: 'Option A' },
							{ value: 'b', label: 'Option B' },
							{ value: 'c', label: 'Option C' },
						]}
					/>
				</Drawer>
			</Fragment>
		);
	},
};

export const MutedOverlay: Story = {
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
					onClose={close}
					title={props.title}
					mutedOverlay
				>
					<Text>Draw content</Text>
				</Drawer>
			</Fragment>
		);
	},
};

export const LargeWidth: Story = {
	args: {
		title: 'Large Drawer',
		width: 'lg',
	},
	render: function Render(props) {
		const [isOpen, open, close] = useTernaryState(false);
		return (
			<Fragment>
				<Button onClick={open}>Open Large Drawer</Button>
				<Drawer
					isOpen={isOpen}
					onClose={close}
					title={props.title}
					width={props.width}
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
					<Prose>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
							cursus risus nec velit imperdiet, sit amet blandit libero
							ullamcorper. Maecenas vel fermentum sapien. Aenean mollis
							tincidunt imperdiet. Morbi efficitur consectetur quam nec aliquam.
							Quisque id consequat arcu, hendrerit vulputate libero. Morbi et
							libero placerat, ultrices lacus pulvinar, maximus massa. Nam
							tempor eu nisl dignissim malesuada. Quisque blandit turpis vel
							egestas posuere.
						</p>
						<p>
							Integer nec ex massa. Integer at semper enim. Vestibulum elit
							tortor, ultricies quis lectus elementum, tempor pharetra ex. In ut
							nulla vitae neque vehicula venenatis. Pellentesque faucibus eget
							tortor ac venenatis. Proin et vulputate nunc. Etiam vitae dui
							pellentesque, sollicitudin dolor congue, imperdiet mauris. Aliquam
							a massa magna. Suspendisse condimentum sapien id nisi luctus
							accumsan. Cras maximus sapien et lorem malesuada, et euismod
							mauris tincidunt. Nulla facilisi. Donec ultricies eros eget
							lobortis aliquam. Sed cursus ipsum et mauris sodales semper eget
							vel diam. Nulla tincidunt rutrum ipsum in molestie. In hac
							habitasse platea dictumst.
						</p>
					</Prose>
				</Drawer>
			</Fragment>
		);
	},
};

export const SmallPageContentLargeDrawerContent: Story = {
	args: {
		title: 'Scrollable Drawer Content',
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
					width={props.width}
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
					<LargeProseContent />
				</Drawer>
			</Fragment>
		);
	},
};

export const LargePageContentLargeDrawerContent: Story = {
	args: {
		title: 'Scrollable Drawer Content',
	},
	render: function Render(props) {
		const [isOpen, open, close] = useTernaryState(false);
		return (
			<Fragment>
				<Button onClick={open}>Open Drawer</Button>
				<LargeProseContent />
				<Drawer
					isOpen={isOpen}
					onDismiss={close}
					title={props.title}
					width={props.width}
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
					<LargeProseContent />
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
					onClose={onCloseClick}
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
					onClose={onCloseClick}
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

const LargeProseContent = () => (
	<Prose>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Tempus urna et
			pharetra pharetra massa massa. Volutpat diam ut venenatis tellus in metus
			vulputate eu. Adipiscing elit duis tristique sollicitudin nibh sit amet.
			Vivamus arcu felis bibendum ut tristique et. Et tortor at risus viverra
			adipiscing at in tellus integer. Euismod in pellentesque massa placerat
			duis ultricies lacus sed. Ornare arcu dui vivamus arcu felis bibendum.
			Sapien pellentesque habitant morbi tristique senectus et netus et
			malesuada. Et tortor consequat id porta nibh venenatis. Cras adipiscing
			enim eu turpis egestas pretium aenean. Erat velit scelerisque in dictum
			non. Pretium fusce id velit ut tortor pretium. Eu ultrices vitae auctor eu
			augue ut lectus arcu bibendum. Magna eget est lorem ipsum dolor sit.
		</p>

		<p>
			Ut aliquam purus sit amet luctus venenatis lectus magna. Eu facilisis sed
			odio morbi quis commodo odio. Pharetra vel turpis nunc eget. Adipiscing
			commodo elit at imperdiet dui accumsan sit amet nulla. Ipsum consequat
			nisl vel pretium lectus. Malesuada nunc vel risus commodo viverra maecenas
			accumsan lacus vel. Arcu ac tortor dignissim convallis. Ipsum suspendisse
			ultrices gravida dictum fusce ut placerat orci nulla. Feugiat sed lectus
			vestibulum mattis ullamcorper. Risus in hendrerit gravida rutrum quisque
			non. Tincidunt nunc pulvinar sapien et ligula. Penatibus et magnis dis
			parturient montes nascetur ridiculus mus. Ultrices tincidunt arcu non
			sodales neque. Duis at consectetur lorem donec.
		</p>

		<p>
			Turpis tincidunt id aliquet risus. Ut lectus arcu bibendum at varius vel
			pharetra. Magna ac placerat vestibulum lectus. Euismod elementum nisi quis
			eleifend quam. Morbi tristique senectus et netus et malesuada. Justo
			laoreet sit amet cursus sit. Et malesuada fames ac turpis egestas sed. Eu
			non diam phasellus vestibulum lorem sed risus ultricies. Quis imperdiet
			massa tincidunt nunc. Ornare lectus sit amet est placerat in egestas. Sed
			viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Lacinia
			quis vel eros donec ac. Vitae sapien pellentesque habitant morbi. Donec et
			odio pellentesque diam volutpat commodo sed egestas egestas. Vulputate
			sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Quam
			vulputate dignissim suspendisse in est ante in nibh. Justo nec ultrices
			dui sapien eget mi proin. Aliquet nibh praesent tristique magna sit amet.
		</p>
		<p>
			Laoreet suspendisse interdum consectetur libero. Nulla pellentesque
			dignissim enim sit amet venenatis urna cursus eget. Elit sed vulputate mi
			sit amet mauris commodo quis imperdiet. Nisl suscipit adipiscing bibendum
			est ultricies integer quis. Rutrum tellus pellentesque eu tincidunt tortor
			aliquam nulla. Malesuada fames ac turpis egestas sed tempus urna et. Ipsum
			dolor sit amet consectetur adipiscing elit duis tristique. Euismod
			elementum nisi quis eleifend quam. Vulputate mi sit amet mauris commodo
			quis imperdiet massa. Sit amet porttitor eget dolor. Enim lobortis
			scelerisque fermentum dui faucibus. Dapibus ultrices in iaculis nunc sed
			augue lacus. Nulla porttitor massa id neque aliquam vestibulum. Netus et
			malesuada fames ac turpis egestas integer eget aliquet. Proin nibh nisl
			condimentum id. Duis at tellus at urna condimentum mattis. Tellus molestie
			nunc non blandit massa. At erat pellentesque adipiscing commodo elit at
			imperdiet dui.
		</p>
		<p>
			Imperdiet proin fermentum leo vel orci porta non. Odio morbi quis commodo
			odio aenean sed adipiscing diam donec. Cursus in hac habitasse platea
			dictumst quisque sagittis. Blandit aliquam etiam erat velit scelerisque in
			dictum. Ridiculus mus mauris vitae ultricies. Interdum velit laoreet id
			donec ultrices. Est pellentesque elit ullamcorper dignissim cras tincidunt
			lobortis. Sed nisi lacus sed viverra tellus in. Vel elit scelerisque
			mauris pellentesque pulvinar pellentesque habitant morbi. Vitae congue
			mauris rhoncus aenean. Ut porttitor leo a diam sollicitudin tempor.
			Tincidunt arcu non sodales neque sodales ut etiam. At elementum eu
			facilisis sed. Euismod in pellentesque massa placerat duis. In arcu cursus
			euismod quis viverra nibh cras pulvinar. Neque egestas congue quisque
			egestas diam in. Sem fringilla ut morbi tincidunt augue interdum. Sit amet
			tellus cras adipiscing enim.
		</p>

		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Tempus urna et
			pharetra pharetra massa massa. Volutpat diam ut venenatis tellus in metus
			vulputate eu. Adipiscing elit duis tristique sollicitudin nibh sit amet.
			Vivamus arcu felis bibendum ut tristique et. Et tortor at risus viverra
			adipiscing at in tellus integer. Euismod in pellentesque massa placerat
			duis ultricies lacus sed. Ornare arcu dui vivamus arcu felis bibendum.
			Sapien pellentesque habitant morbi tristique senectus et netus et
			malesuada. Et tortor consequat id porta nibh venenatis. Cras adipiscing
			enim eu turpis egestas pretium aenean. Erat velit scelerisque in dictum
			non. Pretium fusce id velit ut tortor pretium. Eu ultrices vitae auctor eu
			augue ut lectus arcu bibendum. Magna eget est lorem ipsum dolor sit.
		</p>

		<p>
			Ut aliquam purus sit amet luctus venenatis lectus magna. Eu facilisis sed
			odio morbi quis commodo odio. Pharetra vel turpis nunc eget. Adipiscing
			commodo elit at imperdiet dui accumsan sit amet nulla. Ipsum consequat
			nisl vel pretium lectus. Malesuada nunc vel risus commodo viverra maecenas
			accumsan lacus vel. Arcu ac tortor dignissim convallis. Ipsum suspendisse
			ultrices gravida dictum fusce ut placerat orci nulla. Feugiat sed lectus
			vestibulum mattis ullamcorper. Risus in hendrerit gravida rutrum quisque
			non. Tincidunt nunc pulvinar sapien et ligula. Penatibus et magnis dis
			parturient montes nascetur ridiculus mus. Ultrices tincidunt arcu non
			sodales neque. Duis at consectetur lorem donec.
		</p>

		<p>
			Turpis tincidunt id aliquet risus. Ut lectus arcu bibendum at varius vel
			pharetra. Magna ac placerat vestibulum lectus. Euismod elementum nisi quis
			eleifend quam. Morbi tristique senectus et netus et malesuada. Justo
			laoreet sit amet cursus sit. Et malesuada fames ac turpis egestas sed. Eu
			non diam phasellus vestibulum lorem sed risus ultricies. Quis imperdiet
			massa tincidunt nunc. Ornare lectus sit amet est placerat in egestas. Sed
			viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Lacinia
			quis vel eros donec ac. Vitae sapien pellentesque habitant morbi. Donec et
			odio pellentesque diam volutpat commodo sed egestas egestas. Vulputate
			sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Quam
			vulputate dignissim suspendisse in est ante in nibh. Justo nec ultrices
			dui sapien eget mi proin. Aliquet nibh praesent tristique magna sit amet.
		</p>
		<p>
			Laoreet suspendisse interdum consectetur libero. Nulla pellentesque
			dignissim enim sit amet venenatis urna cursus eget. Elit sed vulputate mi
			sit amet mauris commodo quis imperdiet. Nisl suscipit adipiscing bibendum
			est ultricies integer quis. Rutrum tellus pellentesque eu tincidunt tortor
			aliquam nulla. Malesuada fames ac turpis egestas sed tempus urna et. Ipsum
			dolor sit amet consectetur adipiscing elit duis tristique. Euismod
			elementum nisi quis eleifend quam. Vulputate mi sit amet mauris commodo
			quis imperdiet massa. Sit amet porttitor eget dolor. Enim lobortis
			scelerisque fermentum dui faucibus. Dapibus ultrices in iaculis nunc sed
			augue lacus. Nulla porttitor massa id neque aliquam vestibulum. Netus et
			malesuada fames ac turpis egestas integer eget aliquet. Proin nibh nisl
			condimentum id. Duis at tellus at urna condimentum mattis. Tellus molestie
			nunc non blandit massa. At erat pellentesque adipiscing commodo elit at
			imperdiet dui.
		</p>
		<p>
			Imperdiet proin fermentum leo vel orci porta non. Odio morbi quis commodo
			odio aenean sed adipiscing diam donec. Cursus in hac habitasse platea
			dictumst quisque sagittis. Blandit aliquam etiam erat velit scelerisque in
			dictum. Ridiculus mus mauris vitae ultricies. Interdum velit laoreet id
			donec ultrices. Est pellentesque elit ullamcorper dignissim cras tincidunt
			lobortis. Sed nisi lacus sed viverra tellus in. Vel elit scelerisque
			mauris pellentesque pulvinar pellentesque habitant morbi. Vitae congue
			mauris rhoncus aenean. Ut porttitor leo a diam sollicitudin tempor.
			Tincidunt arcu non sodales neque sodales ut etiam. At elementum eu
			facilisis sed. Euismod in pellentesque massa placerat duis. In arcu cursus
			euismod quis viverra nibh cras pulvinar. Neque egestas congue quisque
			egestas diam in. Sem fringilla ut morbi tincidunt augue interdum. Sit amet
			tellus cras adipiscing enim.
		</p>
	</Prose>
);

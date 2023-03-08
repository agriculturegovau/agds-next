import { useCallback, useRef, useState } from 'react';
import { usePopper } from 'react-popper';
import { Box, Flex, Stack } from '@ag.ds-next/react/box';
import { Button } from '@ag.ds-next/react/button';
import { Checkbox, ControlGroup, Radio } from '@ag.ds-next/react/control-input';
import {
	tokens,
	useClickOutside,
	useTernaryState,
} from '@ag.ds-next/react/core';
import { Tag } from '@ag.ds-next/react/tags';
import { Text } from '@ag.ds-next/react/text';
import { PlusIcon } from '@ag.ds-next/react/icon';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { ComboboxAsync } from '@ag.ds-next/react/combobox';
import { Fieldset } from '@ag.ds-next/react/fieldset';

export default {
	title: 'Patterns/Multi-select',
};

const SelectionTags = ({
	selected,
	onRemove,
}: {
	selected: string[];
	onRemove: (item: string) => void;
}) => {
	if (!selected.length) return <Text>None selected</Text>;

	return (
		<Flex gap={0.25} flexWrap="wrap">
			{selected.map((item) => (
				<Tag onRemove={() => onRemove(item)}>{item}</Tag>
			))}
		</Flex>
	);
};

const DropDownMultiSelect = ({
	selected,
	setSelected,
}: {
	selected: string[];
	setSelected: (selected: string[]) => void;
}) => {
	const onRemove = (item: string) => {
		setSelected(selected.filter((i) => i !== item));
	};

	const drivers = [
		'Valtteri Bottas',
		'Charles Leclerc',
		'Carlos Sainz',
		'Lando Norris',
		'Pierre Gasly',
		'Esteban Ocon',
		'Alexander Albon',
		'Daniel Ricciardo',
		'George Russell',
		'Nicholas Latifi',
		'Kimi Räikkönen',
		'Sebastian Vettel',
		'Lewis Hamilton',
		'Antonio Giovinazzi',
	];

	// Pop-up menu state
	const [isOpen, open, close] = useTernaryState(false);
	const [refEl, setRefEl] = useState<HTMLDivElement | null>(null);
	const [popperEl, setPopperEl] = useState<HTMLDivElement | null>(null);
	const { styles, attributes } = usePopper(refEl, popperEl, {
		placement: 'bottom-start',
		modifiers: [{ name: 'offset', options: { offset: [0, 8] } }],
	});
	// Close the  when the user clicks outside
	const clickOutsideRef = useRef(popperEl);
	clickOutsideRef.current = popperEl;
	const onButtonClick = useCallback(() => {
		if (isOpen) {
			close();
		} else {
			open();
		}
	}, [isOpen, open, close]);

	const handleClickOutside = useCallback(() => {
		if (isOpen) close();
	}, [isOpen, close]);

	useClickOutside(clickOutsideRef, handleClickOutside);

	return (
		<Stack
			gap={0.5}
			alignItems="flex-start"
			maxWidth={tokens.maxWidth.bodyText}
		>
			<Text as="h2" fontWeight="bold">
				Assignees
			</Text>

			<div ref={setRefEl}>
				<Button
					variant="secondary"
					onClick={onButtonClick}
					iconBefore={PlusIcon}
				>
					Add person
				</Button>

				{isOpen && (
					<Box
						ref={setPopperEl}
						background="body"
						rounded
						padding={1}
						style={{
							...styles.popper,
							// copied from Card
							boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
							maxHeight: 200,
							overflowY: 'scroll',
						}}
						{...attributes.popper}
						css={{ zIndex: 1 }}
					>
						<ControlGroup label="Select people" block hideOptionalLabel>
							{drivers.map((driverName) => (
								<Checkbox
									size="sm"
									checked={selected.includes(driverName)}
									onChange={() => {
										if (selected.includes(driverName)) {
											onRemove(driverName);
										} else {
											setSelected([...selected, driverName]);
										}
									}}
								>
									{driverName}
								</Checkbox>
							))}
						</ControlGroup>
					</Box>
				)}
			</div>
			<SelectionTags selected={selected} onRemove={onRemove} />
		</Stack>
	);
};

const MultiSelectSearch = ({
	selected,
	setSelected,
}: {
	selected: string[];
	setSelected: (selected: string[]) => void;
}) => {
	const onRemove = (item: string) => {
		setSelected(selected.filter((i) => i !== item));
	};

	const handleSelection = (val: { value: string } | null) => {
		if (val === null) return setSelected([]);

		return setSelected([...selected, val.value]);
	};

	return (
		<Stack gap={0.5}>
			<ComboboxAsync
				label="Select character"
				hint="Start typing to see results"
				loadOptions={async function loadOptions(inputValue) {
					const response = await fetch(
						`https://swapi.dev/api/people/?search=${inputValue}`
					);
					const data: { results: { name: string }[] } = await response.json();
					return data.results
						.filter(({ name }) => !selected.includes(name))
						.map(({ name }) => ({ value: name, label: name }));
				}}
				onChange={(val) => handleSelection(val)}
			/>
			<SelectionTags selected={selected} onRemove={onRemove} />
		</Stack>
	);
};

export const All = () => {
	return (
		<Fieldset
			legend="Multi-select patterns"
			hint="These patterns are used to select multiple items from a list."
		>
			<FormStack>
				<Small />
				<DropDown />
				<RemoteData />
			</FormStack>
		</Fieldset>
	);
};

export const Small = () => {
	return (
		<ControlGroup label="Contact method" block>
			<Checkbox checked>SMS</Checkbox>
			<Checkbox checked={false}>Phone call</Checkbox>
			<Checkbox checked={false}>Email</Checkbox>
			<Checkbox checked={false}>Mail</Checkbox>
		</ControlGroup>
	);
};

export const DropDown = () => {
	const [assignees, setAssignees] = useState<string[]>([
		'Daniel Ricciardo',
		'George Russell',
	]);

	return (
		<DropDownMultiSelect selected={assignees} setSelected={setAssignees} />
	);
};

export const RemoteData = () => {
	const [characters, setCharacters] = useState<string[]>(['Luke Skywalker']);

	return (
		<MultiSelectSearch selected={characters} setSelected={setCharacters} />
	);
};

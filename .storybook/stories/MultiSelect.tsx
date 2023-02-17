import { useCallback, useRef, useState } from 'react';
import { usePopper } from 'react-popper';
import { Box, Flex, Stack } from '@ag.ds-next/react/box';
import { Button } from '@ag.ds-next/react/button';
import { Checkbox, ControlGroup } from '@ag.ds-next/react/control-input';
import {
	tokens,
	useClickOutside,
	useTernaryState,
} from '@ag.ds-next/react/core';
import { Tag } from '@ag.ds-next/react/tags';
import { Text } from '@ag.ds-next/react/text';
import { PlusIcon } from '@ag.ds-next/react/icon';

export default {
	title: 'Examples/MultiSelect',
};

export const Default = () => {
	const [selected, setSelected] = useState<string[]>([
		'Daniel Ricciardo',
		'George Russell',
	]);

	const onRemove = (item: string) => {
		setSelected(selected.filter((i) => i !== item));
	};

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

			<Flex gap={0.25} flexWrap="wrap">
				{selected.map((item) => (
					<Tag onRemove={() => onRemove(item)}>{item}</Tag>
				))}
				{!selected.length && <Text>None selected</Text>}
			</Flex>

			<div ref={setRefEl}>
				<Button
					size="sm"
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
							{options.map((option) => (
								<Checkbox
									size="sm"
									checked={selected.includes(option)}
									onChange={() => {
										if (selected.includes(option)) {
											onRemove(option);
										} else {
											setSelected([...selected, option]);
										}
									}}
								>
									{option}
								</Checkbox>
							))}
						</ControlGroup>
					</Box>
				)}
			</div>
		</Stack>
	);
};

const options = [
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

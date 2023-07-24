import { PropsWithChildren, useState } from 'react';
import { Meta } from '@storybook/react';
import { Button } from '@ag.ds-next/react/button';
import { Box, Stack } from '@ag.ds-next/react/box';
import { ControlGroup } from '@ag.ds-next/react/control-group';
import { boxPalette, mapSpacing, packs } from '@ag.ds-next/react/core';
import { visuallyHiddenStyles } from '@ag.ds-next/react/a11y';
import { Flex } from '@ag.ds-next/react/src/flex';
import { Text } from '@ag.ds-next/react/src/text';
import { createIcon } from '@ag.ds-next/react/icon';

const meta: Meta = {
	title: 'Experimental/Chips',
};

export default meta;

export function CheckboxChips() {
	return (
		<ControlGroup label="Status" hideOptionalLabel>
			{['Active', 'Draft', 'Deleted'].map((status) => (
				<CheckboxChip key={status}>{status}</CheckboxChip>
			))}
		</ControlGroup>
	);
}

function CheckboxChip(props: PropsWithChildren<{}>) {
	const [checked, setChecked] = useState(false);
	return (
		<label>
			<input
				type="checkbox"
				checked={checked}
				onChange={() => setChecked((x) => !x)}
				css={{
					...visuallyHiddenStyles,
					// When this component is focused, outline the `CheckboxIndicator`
					'&:focus ~ span': packs.outline,
				}}
			/>
			<Flex
				as="span"
				gap={0.5}
				border
				borderWidth="lg"
				rounded
				paddingX={1}
				link
				focus
				alignItems="center"
				css={{ height: packs.input.md.height }}
			>
				{checked && <CheckboxIcon />}
				{props.children}
			</Flex>
		</label>
	);
}

export function CheckboxWithHiddenLabel() {
	return (
		<div css={{ legend: visuallyHiddenStyles }}>
			<CheckboxChips />
		</div>
	);
}

function CheckboxIcon() {
	return (
		<svg
			aria-hidden="true"
			viewBox="0 0 24 24"
			clipRule="evenodd"
			xmlns="http://www.w3.org/2000/svg"
			focusable="false"
			css={{
				width: mapSpacing(1),
				height: mapSpacing(1),
				color: 'currentcolor',
				fill: 'none',
				stroke: 'currentColor',
			}}
			role="img"
		>
			<path
				d="M3 13.4286L8.4 19L21 6"
				strokeWidth={3}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export function RadioChips() {
	const [checked, setChecked] = useState('Active');
	return (
		<ControlGroup label="Status" hideOptionalLabel>
			{['Active', 'Draft', 'Deleted'].map((status) => (
				<RadioChip
					key={status}
					checked={status === checked}
					onChange={() => setChecked(status)}
				>
					{status}
				</RadioChip>
			))}
		</ControlGroup>
	);
}

function RadioChip({
	checked,
	onChange,
	children,
}: PropsWithChildren<{ checked: boolean; onChange: () => void }>) {
	return (
		<label>
			<input
				type="radio"
				checked={checked}
				onChange={() => onChange()}
				css={{
					...visuallyHiddenStyles,
					// When this component is focused, outline the indicator (`RadioIndicator` and `CheckboxIndicator`)
					'&:focus ~ span': packs.outline,
					// When this component is checked, show the indicators active state
					'&:checked ~ span > span *': { display: 'block' },
				}}
			/>
			<Flex
				as="span"
				gap={0.5}
				border
				borderWidth="lg"
				rounded
				paddingX={0.75}
				link
				focus
				alignItems="center"
				css={{ height: packs.input.md.height }}
			>
				<RadioIndicator />
				{children}
			</Flex>
		</label>
	);
}

function RadioIndicator() {
	const { width, height, borderWidth } = packs.control.sm;
	return (
		<Flex
			as="span"
			justifyContent="center"
			alignItems="center"
			width={width}
			height={height}
			flexShrink={0}
			css={{
				borderWidth,
				borderRadius: '100%',
				borderStyle: 'solid',
				borderColor: boxPalette.border,
				backgroundColor: boxPalette.backgroundBody,
			}}
			rounded
		>
			<Box
				as="span"
				width="calc(100% - 0.5rem)"
				height="calc(100% - 0.5rem)"
				highContrastOutline
				css={{
					display: 'none',
					borderRadius: '100%',
					backgroundColor: boxPalette.foregroundText,
				}}
			/>
		</Flex>
	);
}

export function ButtonChips() {
	const [checked, setChecked] = useState<string[]>();
	return (
		<Flex gap={1}>
			{['Active', 'Draft', 'Deleted'].map((status) => (
				<ButtonChip
					key={status}
					checked={checked?.includes(status) ?? false}
					onChange={() =>
						setChecked(
							checked?.includes(status)
								? checked.filter((x) => x !== status)
								: [...(checked ?? []), status]
						)
					}
				>
					{status}
				</ButtonChip>
			))}
		</Flex>
	);
}

export function ButtonChipsWithLabel() {
	const [checked, setChecked] = useState<string[]>();
	return (
		<Stack gap={0.75}>
			<Text as="span" fontWeight="bold" id="button-chips-label">
				Status
			</Text>
			<Flex gap={1}>
				{['Active', 'Draft', 'Deleted'].map((status) => (
					<ButtonChip
						key={status}
						aria-labelledby="button-chips-label"
						checked={checked?.includes(status) ?? false}
						onChange={() =>
							setChecked(
								checked?.includes(status)
									? checked.filter((x) => x !== status)
									: [...(checked ?? []), status]
							)
						}
					>
						{status}
					</ButtonChip>
				))}
			</Flex>
		</Stack>
	);
}

export function ButtonChipsWithMaxWidth() {
	const [checked, setChecked] = useState<string[]>();
	return (
		<Flex gap={1} maxWidth="600px" border padding={1} flexWrap="wrap">
			{['Active', 'Draft', 'Deleted', 'Published', 'Archived'].map((status) => (
				<ButtonChip
					key={status}
					checked={checked?.includes(status) ?? false}
					onChange={() =>
						setChecked(
							checked?.includes(status)
								? checked.filter((x) => x !== status)
								: [...(checked ?? []), status]
						)
					}
				>
					{status}
				</ButtonChip>
			))}
		</Flex>
	);
}

export function ButtonRadioChips() {
	const [checked, setChecked] = useState('Active');
	return (
		<Flex gap={1}>
			{['Active', 'Draft', 'Deleted'].map((status) => (
				<ButtonChip
					key={status}
					checked={status === checked}
					onChange={() => setChecked(status)}
				>
					{status}
				</ButtonChip>
			))}
		</Flex>
	);
}

function ButtonChip({
	children,
	checked,
	onChange,
	'aria-labelledby': ariaLabelledby,
}: PropsWithChildren<{
	'aria-labelledby'?: string;
	checked: boolean;
	onChange: () => void;
}>) {
	return (
		<Button
			variant="secondary"
			aria-pressed={checked}
			onClick={() => onChange()}
			aria-labelledby={ariaLabelledby}
			iconBefore={checked ? FeatherCheckIcon : undefined}
			css={{
				...(!checked && {
					borderColor: boxPalette.border,
					'&:hover': {
						borderColor: `${boxPalette.foregroundAction}!important`,
					},
				}),
			}}
		>
			{children}
		</Button>
	);
}

const FeatherCheckIcon = createIcon(
	<polyline points="20 6 9 17 4 12" />,
	'FeatherIcon'
);

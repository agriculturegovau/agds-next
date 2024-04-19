import { Interpolation } from '@emotion/react';
import {
	Dispatch,
	ReactNode,
	SetStateAction,
	useEffect,
	useRef,
	useState,
} from 'react';
import { VisuallyHidden } from '../a11y';
import { Box } from '../box';
import { Button } from '../button';
import { Theme } from '../core';
import { ChevronDownIcon, ChevronUpIcon } from '../icon';
import { Text } from '../text';
import { Table } from './Table';
import { TableBody } from './TableBody';
import { TableCaption } from './TableCaption';
import { TableCell } from './TableCell';
import { TableHead } from './TableHead';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';
import { TableWrapper } from './TableWrapper';

type TableDataKey = 'nsw' | 'vic' | 'qld';

interface DataItem {
	location: string;
	population: string;
	changeOverYear: string;
	key: TableDataKey;
}

const tableData: Array<DataItem> = [
	{
		location: 'New South Wales',
		population: '7,670,700',
		changeOverYear: '3.1%',
		key: 'nsw',
	},
	{
		location: 'Victoria',
		population: '5,996,400',
		changeOverYear: '2.5%',
		key: 'vic',
	},
	{
		location: 'Queensland',
		population: '4,808,800',
		changeOverYear: '1.7%',
		key: 'qld',
	},
];

type ExpansionState = Partial<Record<TableDataKey, boolean>>;

export function ExpansionTableDemo() {
	const [expansionState, setExpansionState] = useState<ExpansionState>({});

	return (
		<TableWrapper>
			<Table>
				<TableCaption>
					Population of Australian states and territories, December 2015
				</TableCaption>
				<TableHead>
					<TableRow>
						<TableHeader scope="col">Location</TableHeader>
						<TableHeader textAlign="right" scope="col">
							Population
						</TableHeader>
						<TableHeader textAlign="right" scope="col">
							Change over previous year %
						</TableHeader>
						<TableHeader textAlign="right" scope="col">
							More info
						</TableHeader>
					</TableRow>
				</TableHead>
				<TableBody>
					{tableData.map((item) => (
						<>
							<TableRow key={item.location}>
								<TableCell>{item.location}</TableCell>
								<TableCell textAlign="right">{item.population}</TableCell>
								<TableCell textAlign="right">{item.changeOverYear}</TableCell>
								<ExpansionButtonCell
									dataKey={item.key}
									expansionState={expansionState}
									setExpansionState={setExpansionState}
								/>
							</TableRow>
							<ExpansionContentCell
								dataKey={item.key}
								expansionState={expansionState}
								colSpan={4}
							>
								<Text as="p">
									This is some text. Lorem ipsum dolor sit amet, consectetur
									adipiscing elit. Non modo carum sibi quemque, verum etiam
									vehementer carum esse? Quid iudicant sensus? Quod ea non
									occurrentia fingunt, vincunt Aristonem; Quacumque enim
									ingredimur, in aliqua historia vestigium ponimus.
									Progredientibus autem aetatibus sensim tardeve potius quasi
									nosmet ipsos cognoscimus. Verba tu fingas et ea dicas, quae
									non sentias? Duo Reges: constructio interrete. Sed vos
									squalidius, illorum vides quam niteat oratio.
								</Text>
							</ExpansionContentCell>
						</>
					))}
				</TableBody>
			</Table>
		</TableWrapper>
	);
}

type ExpansionProps = {
	expansionState: ExpansionState;
	dataKey: TableDataKey;
};

type ExpansionButtonCellProps = ExpansionProps & {
	setExpansionState: Dispatch<
		SetStateAction<Partial<Record<TableDataKey, boolean>>>
	>;
};

function ExpansionButtonCell({
	expansionState,
	setExpansionState,
	dataKey,
}: ExpansionButtonCellProps) {
	const isExpanded = expansionState[dataKey] || false;
	return (
		<TableCell textAlign="right">
			<Button
				iconAfter={isExpanded ? ChevronUpIcon : ChevronDownIcon}
				variant="text"
				onClick={() => {
					setExpansionState((prev) => ({
						...prev,
						[dataKey]: !isExpanded,
					}));
				}}
			>
				{isExpanded ? 'Collapse' : 'Expand'}
			</Button>
			<VisuallyHidden>
				<div aria-live="polite">{!isExpanded ? 'Row collapsed' : ''}</div>
			</VisuallyHidden>
		</TableCell>
	);
}

const animationTime = 500;

const hiddenStyles: Interpolation<Theme> = {
	overflow: 'hidden',
	visibility: 'hidden',
	maxHeight: 0,
	transition: `visibility ${animationTime}ms, max-height ${animationTime}ms`,
};

type ExpansionContentCellProps = ExpansionProps & {
	children: ReactNode;
	colSpan: number;
};

function ExpansionContentCell({
	dataKey,
	expansionState,
	children,
	colSpan,
}: ExpansionContentCellProps) {
	const isExpanded = expansionState[dataKey] || false;
	const contentRef = useRef<HTMLDivElement>(null);

	const contentHeight = contentRef.current?.offsetHeight || 0;

	const visibleStyles: Interpolation<Theme> = {
		overflow: 'hidden',
		visibility: 'visible',
		transition: `visibility 0s, max-height ${animationTime}ms`,
		maxHeight: contentHeight,
	};

	const animationStyles: Interpolation<Theme> = isExpanded
		? visibleStyles
		: hiddenStyles;

	useEffect(() => {
		if (isExpanded) {
			contentRef.current?.focus();
		}
	}, [isExpanded]);

	return (
		<tr aria-hidden={!isExpanded}>
			<td colSpan={colSpan} css={{ border: 'none', padding: 0 }}>
				<div css={animationStyles}>
					<Box
						borderBottom
						borderColor="muted"
						color="text"
						background="shade"
						css={{ verticalAlign: 'top' }}
						focus
						padding={0.75}
						ref={contentRef}
						key={String(isExpanded)}
						tabIndex={-1}
					>
						{children}
					</Box>
				</div>
			</td>
		</tr>
	);
}

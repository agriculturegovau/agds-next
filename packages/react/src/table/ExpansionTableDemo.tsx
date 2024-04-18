import {
	Dispatch,
	ReactNode,
	SetStateAction,
	useEffect,
	useRef,
	useState,
} from 'react';
import { DirectionButton } from '../direction-link';
import { Text } from '../text';
import { Button } from '../button';
import { ChevronDownIcon, ChevronUpIcon } from '../icon';
import { VisuallyHidden } from '../a11y';
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
								<Text as="p">This is some text</Text>
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

	useEffect(() => {
		if (isExpanded) {
			contentRef.current?.focus();
		}
	}, [isExpanded]);

	if (!isExpanded) {
		return null;
	}

	return (
		<TableRow>
			<TableCell colSpan={colSpan}>
				<div ref={contentRef} key={String(isExpanded)} tabIndex={-1}>
					{children}
				</div>
			</TableCell>
		</TableRow>
	);
}

import { Fragment, PropsWithChildren, ReactNode } from 'react';
import format from 'date-fns/format';
import {
	SummaryList,
	SummaryListItem,
	SummaryListItemDescription,
	SummaryListItemTerm,
} from '@ag.ds-next/react/summary-list';

export function FormDefinitionList(props: PropsWithChildren<{}>) {
	return <SummaryList>{props.children}</SummaryList>;
}

type FormDefinitionListItemProps = {
	label: string;
	value: ReactNode | undefined;
};

export function FormDefinitionListItem({
	label,
	value,
}: FormDefinitionListItemProps) {
	return (
		<SummaryListItem>
			<SummaryListItemTerm>{label}</SummaryListItemTerm>
			<SummaryListItemDescription>{value}</SummaryListItemDescription>
		</SummaryListItem>
	);
}

type FormDefinitionListItemAddressProps = {
	label: string;
	address: string | undefined;
	suburb: string | undefined;
	state: string | undefined;
	postcode: string | undefined;
};

export function FormDefinitionListItemAddress({
	label,
	address,
	suburb,
	state,
	postcode,
}: FormDefinitionListItemAddressProps) {
	return (
		<SummaryListItem>
			<SummaryListItemTerm>{label}</SummaryListItemTerm>
			<SummaryListItemDescription>
				{address && suburb && state && postcode ? (
					<Fragment>
						{address},<br />
						{suburb} {state} {postcode}
					</Fragment>
				) : null}
			</SummaryListItemDescription>
		</SummaryListItem>
	);
}

const DATE_FORMAT = 'd MMMM yyyy';

type FormDefinitionListItemDateProps = {
	label: string;
	value?: Date | string;
};

export function FormDefinitionListItemDate({
	label,
	value,
}: FormDefinitionListItemDateProps) {
	return (
		<SummaryListItem>
			<SummaryListItemTerm>{label}</SummaryListItemTerm>
			<SummaryListItemDescription>
				{value && <Fragment>{format(new Date(value), DATE_FORMAT)}</Fragment>}
			</SummaryListItemDescription>
		</SummaryListItem>
	);
}

type FormDefinitionListItemDateRangeProps = {
	fromLabel: string;
	fromValue?: Date | string;
	toLabel: string;
	toValue?: Date | string;
};

export function FormDefinitionListItemDateRange({
	fromLabel,
	fromValue,
	toLabel,
	toValue,
}: FormDefinitionListItemDateRangeProps) {
	return (
		<>
			<SummaryListItem>
				<SummaryListItemTerm>{fromLabel}</SummaryListItemTerm>
				<SummaryListItemDescription>
					{fromValue && format(new Date(fromValue), DATE_FORMAT)}
				</SummaryListItemDescription>
			</SummaryListItem>
			<SummaryListItem>
				<SummaryListItemTerm>{toLabel}</SummaryListItemTerm>
				<SummaryListItemDescription>
					{toValue && format(new Date(toValue), DATE_FORMAT)}
				</SummaryListItemDescription>
			</SummaryListItem>
		</>
	);
}

import { Fragment, PropsWithChildren } from 'react';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
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
	value: string | undefined;
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
				{!address || !suburb || !state || !postcode
					? null
					: `${address}, ${suburb} ${state} ${postcode}`}
			</SummaryListItemDescription>
		</SummaryListItem>
	);
}

type FormDefinitionListItemDateProps = {
	label: string;
	value: unknown;
};

export function FormDefinitionListItemDate({
	label,
	value,
}: FormDefinitionListItemDateProps) {
	return (
		<SummaryListItem>
			<SummaryListItemTerm>{label}</SummaryListItemTerm>
			<SummaryListItemDescription>
				{!value ? null : (
					<Fragment>
						{format(
							typeof value === 'string' ? parseISO(value) : (value as Date),
							'dd/MM/yyyy'
						)}
					</Fragment>
				)}
			</SummaryListItemDescription>
		</SummaryListItem>
	);
}

type FormDefinitionListItemDateRangeProps = {
	label: string;
	from: unknown | undefined;
	to: unknown | undefined;
};

export function FormDefinitionListItemDateRange({
	label,
	from,
	to,
}: FormDefinitionListItemDateRangeProps) {
	return (
		<SummaryListItem>
			<SummaryListItemTerm>{label}</SummaryListItemTerm>
			<SummaryListItemDescription>
				{!from || !to ? null : (
					<Fragment>
						{format(
							typeof from === 'string' ? parseISO(from) : (from as Date),
							'dd/MM/yyyy'
						)}{' '}
						–{' '}
						{format(
							typeof to === 'string' ? parseISO(to) : (to as Date),
							'dd/MM/yyyy'
						)}
					</Fragment>
				)}
			</SummaryListItemDescription>
		</SummaryListItem>
	);
}

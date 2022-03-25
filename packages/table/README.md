---
title: Table
description: Used to display tabular data.
group: Content
---

For data tables with a small amount of rows use the default table. Align text columns and corresponding data cells to the left. When comparing numbers in a column, align data cells and column headers to the right.

```jsx live
<Table>
	<TableCaption>
		Population of Australian states and territories, December 2015
	</TableCaption>
	<TableHead>
		<tr>
			<TableHeader scope="col">Location</TableHeader>
			<TableHeader textAlign="right" scope="col">
				Population
			</TableHeader>
			<TableHeader textAlign="right" scope="col">
				Change over previous year %
			</TableHeader>
			<TableHeader textAlign="right" scope="col">
				Change over previous decade %
			</TableHeader>
		</tr>
	</TableHead>
	<TableBody>
		<tr>
			<TableCell>New South Wales</TableCell>
			<TableCell textAlign="right">7,670,700</TableCell>
			<TableCell textAlign="right">3.1%</TableCell>
			<TableCell textAlign="right">12.9%</TableCell>
		</tr>
		<tr>
			<TableCell>Victoria</TableCell>
			<TableCell textAlign="right">5,996,400</TableCell>
			<TableCell textAlign="right">2.5%</TableCell>
			<TableCell textAlign="right">9.3%</TableCell>
		</tr>
		<tr>
			<TableCell>Queensland</TableCell>
			<TableCell textAlign="right">4,808,800</TableCell>
			<TableCell textAlign="right">1.7%</TableCell>
			<TableCell textAlign="right">13.3%</TableCell>
		</tr>
		<tr>
			<TableCell>Western Australia</TableCell>
			<TableCell textAlign="right">2,603,900</TableCell>
			<TableCell textAlign="right">2.3%</TableCell>
			<TableCell textAlign="right">11.6%</TableCell>
		</tr>
		<tr>
			<TableCell>South Australia</TableCell>
			<TableCell textAlign="right">1,702,800</TableCell>
			<TableCell textAlign="right">2.0%</TableCell>
			<TableCell textAlign="right">6.8%</TableCell>
		</tr>
		<tr>
			<TableCell>Tasmania</TableCell>
			<TableCell textAlign="right">517,400</TableCell>
			<TableCell textAlign="right">4%</TableCell>
			<TableCell textAlign="right">5.3%</TableCell>
		</tr>
		<tr>
			<TableCell>Nothern Territory</TableCell>
			<TableCell textAlign="right">244,400</TableCell>
			<TableCell textAlign="right">1.2%</TableCell>
			<TableCell textAlign="right">4.5%</TableCell>
		</tr>
		<tr>
			<TableCell>Australian Capital Territory</TableCell>
			<TableCell textAlign="right">393,000</TableCell>
			<TableCell textAlign="right">2.4%</TableCell>
			<TableCell textAlign="right">9.6%</TableCell>
		</tr>
	</TableBody>
</Table>
```

## Striped

For data tables with more rows, use the `striped` prop.

```jsx live
<Table striped>
	<TableCaption>
		Population of Australian states and territories, December 2015
	</TableCaption>
	<TableHead>
		<tr>
			<TableHeader scope="col">Location</TableHeader>
			<TableHeader textAlign="right" scope="col">
				Population
			</TableHeader>
			<TableHeader textAlign="right" scope="col">
				Change over previous year %
			</TableHeader>
			<TableHeader textAlign="right" scope="col">
				Change over previous decade %
			</TableHeader>
		</tr>
	</TableHead>
	<TableBody>
		<tr>
			<TableCell>New South Wales</TableCell>
			<TableCell textAlign="right">7,670,700</TableCell>
			<TableCell textAlign="right">3.1%</TableCell>
			<TableCell textAlign="right">12.9%</TableCell>
		</tr>
		<tr>
			<TableCell>Victoria</TableCell>
			<TableCell textAlign="right">5,996,400</TableCell>
			<TableCell textAlign="right">2.5%</TableCell>
			<TableCell textAlign="right">9.3%</TableCell>
		</tr>
		<tr>
			<TableCell>Queensland</TableCell>
			<TableCell textAlign="right">4,808,800</TableCell>
			<TableCell textAlign="right">1.7%</TableCell>
			<TableCell textAlign="right">13.3%</TableCell>
		</tr>
		<tr>
			<TableCell>Western Australia</TableCell>
			<TableCell textAlign="right">2,603,900</TableCell>
			<TableCell textAlign="right">2.3%</TableCell>
			<TableCell textAlign="right">11.6%</TableCell>
		</tr>
		<tr>
			<TableCell>South Australia</TableCell>
			<TableCell textAlign="right">1,702,800</TableCell>
			<TableCell textAlign="right">2.0%</TableCell>
			<TableCell textAlign="right">6.8%</TableCell>
		</tr>
		<tr>
			<TableCell>Tasmania</TableCell>
			<TableCell textAlign="right">517,400</TableCell>
			<TableCell textAlign="right">4%</TableCell>
			<TableCell textAlign="right">5.3%</TableCell>
		</tr>
		<tr>
			<TableCell>Nothern Territory</TableCell>
			<TableCell textAlign="right">244,400</TableCell>
			<TableCell textAlign="right">1.2%</TableCell>
			<TableCell textAlign="right">4.5%</TableCell>
		</tr>
		<tr>
			<TableCell>Australian Capital Territory</TableCell>
			<TableCell textAlign="right">393,000</TableCell>
			<TableCell textAlign="right">2.4%</TableCell>
			<TableCell textAlign="right">9.6%</TableCell>
		</tr>
	</TableBody>
</Table>
```

## Custom column width

You can use custom widths based on the expected length of the data under each corresponding column.

```jsx live
<Table striped>
	<TableCaption>
		Population of Australian states and territories, December 2015
	</TableCaption>
	<TableHead>
		<tr>
			<TableHeader scope="col" width="50%">
				Location
			</TableHeader>
			<TableHeader textAlign="right" scope="col">
				Population
			</TableHeader>
			<TableHeader textAlign="right" scope="col">
				Change over previous year %
			</TableHeader>
			<TableHeader textAlign="right" scope="col">
				Change over previous decade %
			</TableHeader>
		</tr>
	</TableHead>
	<TableBody>
		<tr>
			<TableCell>New South Wales</TableCell>
			<TableCell textAlign="right">7,670,700</TableCell>
			<TableCell textAlign="right">3.1%</TableCell>
			<TableCell textAlign="right">12.9%</TableCell>
		</tr>
		<tr>
			<TableCell>Victoria</TableCell>
			<TableCell textAlign="right">5,996,400</TableCell>
			<TableCell textAlign="right">2.5%</TableCell>
			<TableCell textAlign="right">9.3%</TableCell>
		</tr>
		<tr>
			<TableCell>Queensland</TableCell>
			<TableCell textAlign="right">4,808,800</TableCell>
			<TableCell textAlign="right">1.7%</TableCell>
			<TableCell textAlign="right">13.3%</TableCell>
		</tr>
		<tr>
			<TableCell>Western Australia</TableCell>
			<TableCell textAlign="right">2,603,900</TableCell>
			<TableCell textAlign="right">2.3%</TableCell>
			<TableCell textAlign="right">11.6%</TableCell>
		</tr>
		<tr>
			<TableCell>South Australia</TableCell>
			<TableCell textAlign="right">1,702,800</TableCell>
			<TableCell textAlign="right">2.0%</TableCell>
			<TableCell textAlign="right">6.8%</TableCell>
		</tr>
		<tr>
			<TableCell>Tasmania</TableCell>
			<TableCell textAlign="right">517,400</TableCell>
			<TableCell textAlign="right">4%</TableCell>
			<TableCell textAlign="right">5.3%</TableCell>
		</tr>
		<tr>
			<TableCell>Nothern Territory</TableCell>
			<TableCell textAlign="right">244,400</TableCell>
			<TableCell textAlign="right">1.2%</TableCell>
			<TableCell textAlign="right">4.5%</TableCell>
		</tr>
		<tr>
			<TableCell>Australian Capital Territory</TableCell>
			<TableCell textAlign="right">393,000</TableCell>
			<TableCell textAlign="right">2.4%</TableCell>
			<TableCell textAlign="right">9.6%</TableCell>
		</tr>
	</TableBody>
</Table>
```

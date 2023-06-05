export * from './DatePicker';

import {
	DateRangePicker as _DateRangePicker,
	DateRangePickerProps as _DateRangePickerProps,
	DateRange as _DateRange,
	DateRangeWithString as _DateRangeWithString,
} from '../date-range-picker';

/**
 * @deprecated This component has been moved.
 * Use `DateRangePicker` from the `date-range-picker` entrypoint instead.
 * Example: `import { DateRangePicker } from '@ag.ds-next/react/date-range-picker'`".
 * This will be removed in the next major version.
 */
export const DateRangePicker = _DateRangePicker;

/**
 * @deprecated This type has been moved.
 * Use `DateRangePickerProps` from the `date-range-picker` entrypoint instead.
 * Example: `import { DateRangePickerProps } from '@ag.ds-next/react/date-range-picker'`".
 * This will be removed in the next major version.
 */
export type DateRangePickerProps = _DateRangePickerProps;

/**
 * @deprecated This type has been moved.
 * Use `DateRange` from the `date-range-picker` entrypoint instead.
 * Example: `import { DateRange } from '@ag.ds-next/react/date-range-picker'`".
 * This will be removed in the next major version.
 */
export type DateRange = _DateRange;

/**
 * @deprecated This type has been moved.
 * Use `DateRangeWithString` from the `date-range-picker` entrypoint instead.
 * Example: `import { DateRangeWithString } from '@ag.ds-next/react/date-range-picker'`".
 * This will be removed in the next major version.
 */
export type DateRangeWithString = _DateRangeWithString;

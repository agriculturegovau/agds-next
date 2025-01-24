'use client';
export * from './DatePicker';

import {
	DateRangePicker as _DateRangePicker,
	DateRangePickerProps as _DateRangePickerProps,
	DateRange as _DateRange,
} from '../date-range-picker';

export { isValidDate } from './utils';

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

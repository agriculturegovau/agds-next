import * as yup from 'yup';

export const errorMessage = 'Enter a valid date';

// `yup.date()` can sometimes give false positives with certain string values
// Fixes https://github.com/jquense/yup/issues/764
// Tests for this can be viewed in the tests for `DatePicker` and `DateRangePicker`
// IMPORTANT: This is for example purposes only. It should NOT be exported from the design system
export const yupDateField = yup
	.date()
	.transform((current, orig) => (typeof orig === 'string' ? orig : current))
	.typeError(errorMessage);

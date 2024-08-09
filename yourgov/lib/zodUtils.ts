// import { type ZodIssueCode, type ZodTypeAny, z } from 'zod';
import { z } from 'zod';

// Empty strings do not trigger Zod required field error validation
export function zodString(message?: string) {
	return z
		.string({
			invalid_type_error: message,
			required_error: message,
		})
		.trim()
		.min(1, { message });
}

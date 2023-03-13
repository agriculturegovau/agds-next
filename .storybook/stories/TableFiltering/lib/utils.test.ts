import { generateTableCaption } from './utils';

describe('generateTableCaption', () => {
	it('should return the correct caption', () => {
		expect(generateTableCaption({ loading: true, totalItems: 0 })).toBe(
			'Audits'
		);
		expect(generateTableCaption({ loading: false, totalItems: 0 })).toBe(
			'Audits (0 items)'
		);
		expect(generateTableCaption({ loading: false, totalItems: 1 })).toBe(
			'Audits (1 item)'
		);
		expect(generateTableCaption({ loading: false, totalItems: 2 })).toBe(
			'Audits (2 items)'
		);
	});
});

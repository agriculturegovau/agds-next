import { genetateTableCaption } from './utils';

describe('genetateTableCaption', () => {
	it('should return the correct caption', () => {
		expect(genetateTableCaption({ loading: true, totalItems: 0 })).toBe(
			'Audits'
		);
		expect(genetateTableCaption({ loading: false, totalItems: 0 })).toBe(
			'Audits (0 items)'
		);
		expect(genetateTableCaption({ loading: false, totalItems: 1 })).toBe(
			'Audits (1 item)'
		);
		expect(genetateTableCaption({ loading: false, totalItems: 2 })).toBe(
			'Audits (2 items)'
		);
	});
});

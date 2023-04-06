import { generateTableCaption } from './utils';

describe('generateTableCaption', () => {
	it('should return the correct caption', () => {
		expect(
			generateTableCaption({
				loading: true,
				totalItems: 0,
				pagination: {
					page: 1,
					perPage: 10,
				},
			})
		).toBe('Audits');
		expect(
			generateTableCaption({
				loading: false,
				totalItems: 0,
				pagination: {
					page: 1,
					perPage: 10,
				},
			})
		).toBe('Audits (0 items)');
		expect(
			generateTableCaption({
				loading: false,
				totalItems: 1,
				pagination: {
					page: 1,
					perPage: 10,
				},
			})
		).toBe('Audits (1 item)');
		expect(
			generateTableCaption({
				loading: false,
				totalItems: 2,
				pagination: { page: 1, perPage: 10 },
			})
		).toBe('Audits (2 items)');
		expect(
			generateTableCaption({
				loading: false,
				totalItems: 458,
				pagination: { page: 1, perPage: 10 },
			})
		).toBe('Audits (1 - 10 of 458 items)');
		expect(
			generateTableCaption({
				loading: false,
				totalItems: 458,
				pagination: { page: 2, perPage: 10 },
			})
		).toBe('Audits (11 - 20 of 458 items)');
		expect(
			generateTableCaption({
				loading: false,
				totalItems: 458,
				pagination: { page: 10, perPage: 20 },
			})
		).toBe('Audits (181 - 200 of 458 items)');
	});
});

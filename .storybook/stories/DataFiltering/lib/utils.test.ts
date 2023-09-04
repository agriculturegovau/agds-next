import { BusinessForAudit } from './generateBusinessData';
import { doesBusinessMatchFilters } from './getData';
import { generateTableCaption, getNumberOfActiveFilters } from './utils';

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

describe('doesBusinessMatchFilters', () => {
	const testBusiness: BusinessForAudit = {
		assignee: 'Toto Wolff',
		businessName: 'Test Business',
		status: 'notBooked',
		id: '123',
		city: 'Orange',
		state: 'NSW',
		requestDate: new Date('2023-01-01'),
		services: ['Loading'],
		destinations: ['Japan', 'Fiji'],
	};

	it('should filter results based on status', () => {
		expect(
			doesBusinessMatchFilters(testBusiness, {
				status: 'notBooked',
			})
		).toBe(true);

		expect(
			doesBusinessMatchFilters(testBusiness, {
				status: 'completed',
			})
		).toBe(false);
	});

	it('should filter results based on service', () => {
		expect(
			doesBusinessMatchFilters(testBusiness, {
				services: ['Loading'],
			})
		).toBe(true);

		expect(
			doesBusinessMatchFilters(testBusiness, {
				services: ['Packing'],
			})
		).toBe(false);
	});

	it('should filter results based on multiple services', () => {
		expect(
			doesBusinessMatchFilters(
				{
					...testBusiness,
					services: ['Loading', 'Packing'],
				},
				{
					services: ['Loading', 'Packing'],
				}
			)
		).toBe(true);

		expect(
			doesBusinessMatchFilters(testBusiness, {
				services: ['Loading', 'Packing'],
			})
		).toBe(false);
	});

	it('should filter results based on destination', () => {
		expect(
			doesBusinessMatchFilters(testBusiness, {
				destinations: [{ label: 'Japan', value: 'Japan' }],
			})
		).toBe(true);

		expect(
			doesBusinessMatchFilters(testBusiness, {
				destinations: [{ label: 'China', value: 'China' }],
			})
		).toBe(false);
	});
});

describe('getNumberOfActiveFilters', () => {
	it('should return the correct number of active filters', () => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		expect(getNumberOfActiveFilters({})).toBe(0);

		expect(
			getNumberOfActiveFilters({
				assignee: undefined,
				businessName: undefined,
				state: undefined,
				requestDate: {
					from: undefined,
					to: undefined,
				},
				status: undefined,
				services: undefined,
				destinations: undefined,
			})
		).toBe(0);

		expect(
			getNumberOfActiveFilters({
				assignee: 'Toto Wolff',
				businessName: undefined,
				state: undefined,
				requestDate: {
					from: undefined,
					to: undefined,
				},
				status: undefined,
				services: undefined,
				destinations: undefined,
			})
		).toBe(1);

		expect(
			getNumberOfActiveFilters({
				assignee: 'Toto Wolff',
				businessName: undefined,
				state: undefined,
				requestDate: {
					from: new Date('2023-01-01'),
					to: undefined,
				},
				status: undefined,
				services: undefined,
				destinations: undefined,
			})
		).toBe(2);

		expect(
			getNumberOfActiveFilters({
				assignee: 'Toto Wolff',
				businessName: undefined,
				state: undefined,
				requestDate: {
					from: new Date('2023-01-01'),
					to: new Date('2023-06-01'),
				},
				status: undefined,
				services: undefined,
				destinations: undefined,
			})
		).toBe(2);
	});
});

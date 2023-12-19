import { yupPhoneField } from './utils';

describe('yupPhoneField', () => {
	test('allows valid phone numbers', () => {
		expect(() => yupPhoneField.validateSync('03 8318 6700')).not.toThrow();
		expect(() => yupPhoneField.validateSync('0383186700')).not.toThrow();
		expect(() => yupPhoneField.validateSync('0483 186 700')).not.toThrow();
		expect(() => yupPhoneField.validateSync('0483186700')).not.toThrow();
	});

	test('does not allow phone numbers with letters or symbols', () => {
		expect(() => {
			yupPhoneField.validateSync('04xyz');
		}).toThrow('Phone number must not include letters or symbols');
		expect(() => {
			yupPhoneField.validateSync('#o43o_~!');
		}).toThrow('Phone number must not include letters or symbols');
	});

	test('does not allow numbers that do not start with 0', () => {
		expect(() => {
			yupPhoneField.validateSync('8318 670');
		}).toThrow(
			"Mobile numbers must begin with '04', landline numbers must begin with an area code"
		);
		expect(() => {
			yupPhoneField.validateSync('12 8318 6700');
		}).toThrow(
			"Mobile numbers must begin with '04', landline numbers must begin with an area code"
		);
	});

	test('does not allow numbers that are not exactly 10 digits', () => {
		expect(() => {
			yupPhoneField.validateSync('03831867000383186700');
		}).toThrow('Phone number must be 10 digits');
		expect(() => {
			yupPhoneField.validateSync('03 8318 6700 03 8318 6700');
		}).toThrow('Phone number must be 10 digits');
		expect(() => {
			yupPhoneField.validateSync('03 8318 670');
		}).toThrow('Phone number must be 10 digits');
	});
});

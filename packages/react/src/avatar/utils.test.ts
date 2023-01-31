import { getInitialsFromName } from './utils';

describe('getInitialsFromName', () => {
	it('works correctly', () => {
		expect(getInitialsFromName('Anthony Albanese')).toEqual('AA');
		expect(getInitialsFromName('Scott Morrison')).toEqual('SM');
		expect(getInitialsFromName('Malcolm Turnbull')).toEqual('MT');
	});

	it('works correctly with a single name', () => {
		expect(getInitialsFromName('Anthony')).toEqual('A');
		expect(getInitialsFromName('Scott')).toEqual('S');
		expect(getInitialsFromName('Malcolm')).toEqual('M');
	});

	it('works correctly with lowercase names', () => {
		expect(getInitialsFromName('anthony albanese')).toEqual('AA');
		expect(getInitialsFromName('scott morrison')).toEqual('SM');
		expect(getInitialsFromName('malcolm turnbull')).toEqual('MT');
	});

	it('works correctly with long names', () => {
		expect(getInitialsFromName('Salvador Felipe Jacinto Dalí y Domenech')).toBe(
			'SD'
		);
		expect(
			getInitialsFromName('Mobutu Sese Seko Kuku Ngbendu Wa Za Banga')
		).toBe('MB');
		expect(
			getInitialsFromName("Florian Cloud de Bounevialle O'Malley Armstrong")
		).toBe('FA');
	});

	it('works correctly with names with whitespace', () => {
		expect(getInitialsFromName(' Anthony Albanese')).toEqual('AA');
		expect(getInitialsFromName('Anthony Albanese ')).toEqual('AA');
		expect(getInitialsFromName('  Anthony    Albanese  ')).toEqual('AA');
	});

	it('handles edgecases gracefully ', () => {
		expect(getInitialsFromName('')).toEqual('?');
		expect(getInitialsFromName('  ')).toEqual('?');
		expect(getInitialsFromName('_')).toEqual('?');
		expect(getInitialsFromName('#_#')).toEqual('?');
		expect(getInitialsFromName('$')).toEqual('?');
		expect(getInitialsFromName('1')).toEqual('?');
		expect(getInitialsFromName('369')).toEqual('?');
		expect(getInitialsFromName('#')).toEqual('?');
	});
});

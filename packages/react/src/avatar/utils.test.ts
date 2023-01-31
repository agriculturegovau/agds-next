import { getInitialsFromName } from './utils';

describe('getInitialsFromName', () => {
	it('works correctly', () => {
		expect(getInitialsFromName('Taj Grainger')).toEqual('TG');
		expect(getInitialsFromName('Isabel Edmund')).toEqual('IE');
		expect(getInitialsFromName('Ethan Polglaze')).toEqual('EP');
	});

	it('works correctly with a single name', () => {
		expect(getInitialsFromName('Cooper')).toEqual('C');
		expect(getInitialsFromName('Angus')).toEqual('A');
		expect(getInitialsFromName('Hayden')).toEqual('H');
	});

	it('works correctly with lowercase names', () => {
		expect(getInitialsFromName('lauren alanson')).toEqual('LA');
		expect(getInitialsFromName('brooke tier')).toEqual('BT');
		expect(getInitialsFromName('ashley hull')).toEqual('AH');
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
		expect(getInitialsFromName(' Taj Grainger')).toEqual('TG');
		expect(getInitialsFromName('Taj Grainger ')).toEqual('TG');
		expect(getInitialsFromName('  Taj   Grainger  ')).toEqual('TG');
	});

	it('handles edge-cases gracefully ', () => {
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

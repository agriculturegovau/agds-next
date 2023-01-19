import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup } from '../../../../test-utils';
import { getInitialsFromName } from './getInitialsFromName';

afterEach(cleanup);

describe('Avatar', () => {
	it('returns expected output', () => {
		expect(getInitialsFromName('Nathan Simpson')).toEqual('NS');
		expect(getInitialsFromName('Admin')).toEqual('A');
	});
});

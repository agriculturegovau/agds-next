// The contents of this file has been copied from https://github.com/reach/reach-ui/blob/dev/packages/auto-id/__tests__/auto-id.test.tsx

import { render, cleanup } from '../../../../../../test-utils';
import { useId } from './useId';

afterEach(cleanup);

describe('useId', () => {
	it('should generate a unique ID value', () => {
		function Comp() {
			const justNull = null;
			const randId = useId(justNull);
			const randId2 = useId();
			return (
				<div>
					<div id={randId}>Wow</div>
					<div id={randId2}>Ok</div>
				</div>
			);
		}
		const { getByText } = render(<Comp />);
		const id1 = getByText('Wow').id;
		const id2 = getByText('Ok').id;
		expect(id2).not.toEqual(id1);
	});

	it('uses a fallback ID', () => {
		function Comp() {
			const newId = useId('awesome');
			return <div id={newId}>Ok</div>;
		}
		const { getByText } = render(<Comp />);
		expect(getByText('Ok').id).toEqual('awesome');
	});
});

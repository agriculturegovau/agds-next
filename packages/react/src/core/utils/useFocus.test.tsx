import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { useRef } from 'react';
import { render, screen } from '../../../../../test-utils';
import { UseFocusParams, useFocus } from './useFocus';

const ComponentWithUseFocus = (
	props: Partial<UseFocusParams<HTMLDivElement>>
) => {
	const ref = useFocus(props);

	return (
		<>
			<div data-testid="div-with-ref" ref={ref} tabIndex={-1} />
			<div data-testid="div-with-no-ref" tabIndex={-1} />
		</>
	);
};

describe('Given useFocus is called', () => {
	describe('when no parameters are defined', () => {
		test('then the attached component should be focused once on mount', () => {
			render(<ComponentWithUseFocus />);
			expect(screen.getByTestId('div-with-ref')).toHaveFocus();
		});
	});

	describe('when focusOnUpdate is defined', () => {
		test('then the attached component should be focused when the value is updated', async () => {
			const { rerender } = render(
				<ComponentWithUseFocus focusOnUpdate={['mock-value-1']} />
			);

			const user = userEvent.setup();
			await user.tab();

			rerender(<ComponentWithUseFocus focusOnUpdate={['mock-value-2']} />);

			expect(screen.getByTestId('div-with-ref')).toHaveFocus();
		});
	});

	describe('when forwardedRef is defined', () => {
		test('then the attached component should be focused', async () => {
			const ComponentWithRef = () => {
				const refToForward = useRef<HTMLDivElement>(null);
				return <ComponentWithUseFocus forwardedRef={refToForward} />;
			};

			render(<ComponentWithRef />);

			expect(await screen.findByTestId('div-with-ref')).toHaveFocus();
		});
	});

	describe('when disabled is true', () => {
		test('then the attached component should not be focused', () => {
			render(<ComponentWithUseFocus disabled />);
			expect(screen.getByTestId('div-with-ref')).not.toHaveFocus();
		});
	});

	describe('when disabled is true and focusOnUpdate is defined', () => {
		test('then the attached component should not be focused when the value is updated', async () => {
			const { rerender } = render(
				<ComponentWithUseFocus disabled focusOnUpdate={['mock-value-1']} />
			);

			const user = userEvent.setup();
			await user.tab();

			rerender(
				<ComponentWithUseFocus disabled focusOnUpdate={['mock-value-2']} />
			);

			expect(screen.getByTestId('div-with-ref')).not.toHaveFocus();
		});
	});
});

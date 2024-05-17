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
			<div data-testid="div-with-no-ref" tabIndex={0} />
		</>
	);
};

describe('Given useFocus is called', () => {
	describe('when no parameters are defined', () => {
		test('then the attached component should not be focused', () => {
			render(<ComponentWithUseFocus />);
			expect(screen.getByTestId('div-with-ref')).not.toHaveFocus();
		});
	});

	describe('when focusOnMount is true', () => {
		test('then the attached component should be focused once on mount', () => {
			render(<ComponentWithUseFocus focusOnMount />);
			expect(screen.getByTestId('div-with-ref')).toHaveFocus();
		});
	});

	describe('when focusOnUpdate is defined', () => {
		test('then the attached component should be focused once on mount', () => {
			render(<ComponentWithUseFocus focusOnUpdate={'mock-value-1'} />);
			expect(screen.getByTestId('div-with-ref')).toHaveFocus();
		});

		test('then the attached component should be focused when the value is updated', async () => {
			let valueToBeUpdated = 'mock-value-1';
			const { rerender } = render(
				<ComponentWithUseFocus focusOnUpdate={valueToBeUpdated} />
			);

			// Tab away from the "div-with-ref" to the "div-with-no-ref" so that focus is moved
			const user = userEvent.setup();
			await user.tab();

			// Simulate a new value for the prop we want to update
			valueToBeUpdated = 'mock-value-2';
			// Pass the new value for `focusOnUpdate` to the `useFocus` hook via our test component (`ComponentWithUseFocus`)
			rerender(<ComponentWithUseFocus focusOnUpdate={valueToBeUpdated} />);

			expect(screen.getByTestId('div-with-ref')).toHaveFocus();
		});
	});

	describe('when forwardedRef is defined', () => {
		test('then the attached component should not be focused', async () => {
			const ComponentWithRef = () => {
				const refToForward = useRef<HTMLDivElement>(null);
				return <ComponentWithUseFocus forwardedRef={refToForward} />;
			};

			render(<ComponentWithRef />);

			expect(await screen.findByTestId('div-with-ref')).not.toHaveFocus();
		});
	});

	describe('when forwardedRef and focusOnMount are defined', () => {
		test('then the attached component should be focused', async () => {
			const ComponentWithRef = () => {
				const refToForward = useRef<HTMLDivElement>(null);
				return (
					<ComponentWithUseFocus focusOnMount forwardedRef={refToForward} />
				);
			};

			render(<ComponentWithRef />);

			expect(await screen.findByTestId('div-with-ref')).toHaveFocus();
		});
	});

	describe('when forwardedRef and focusOnUpdate are defined', () => {
		test('then the attached component should be focused', async () => {
			const ComponentWithRef = () => {
				const refToForward = useRef<HTMLDivElement>(null);
				return (
					<ComponentWithUseFocus
						focusOnUpdate={'mock-value-1'}
						forwardedRef={refToForward}
					/>
				);
			};

			render(<ComponentWithRef />);

			expect(await screen.findByTestId('div-with-ref')).toHaveFocus();
		});
	});
});

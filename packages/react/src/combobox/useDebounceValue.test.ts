import { act, renderHook } from '@testing-library/react';
import { useDebounceValue } from './useDebounceValue';

jest.useFakeTimers();

describe('useDebounceValue', () => {
	test('Immediately returns the initial value', () => {
		const { result } = renderHook(() => useDebounceValue('initial', 300));
		expect(result.current).toBe('initial');
	});
	test('Updates no sooner than waitMS', () => {
		const waitMS = 300;
		const { result, rerender } = renderHook((value = 'initial') =>
			useDebounceValue(value, waitMS)
		);

		// re-render with an updated value
		rerender('updated-value');
		expect(result.current).toBe('initial');

		// Wait for some time (less than the timeout)
		act(() => {
			jest.advanceTimersByTime(waitMS - 1);
		});
		expect(result.current).toBe('initial');

		// Complete the timeout
		act(() => {
			jest.advanceTimersByTime(1);
		});
		expect(result.current).toBe('updated-value');
	});

	test('updates to the last provided value', () => {
		const waitMS = 300;
		const { result, rerender } = renderHook((value = 'initial') =>
			useDebounceValue(value, waitMS)
		);

		// Re-render with a new value
		rerender('first-update');

		// Some time passes, but not the full timer
		act(() => {
			jest.advanceTimersByTime(waitMS / 2);
		});
		// Still showing the initial value
		expect(result.current).toBe('initial');

		// Re-render with another new value
		rerender('second-update');
		expect(result.current).toBe('initial');

		// Allow the timer to complete
		act(() => {
			jest.runAllTimers();
		});
		expect(result.current).toBe('second-update');
	});

	test('Does not update after unmounting', () => {
		const { unmount, result, rerender } = renderHook((value = 'initial') =>
			useDebounceValue(value, 300)
		);

		// Set a new value
		rerender('updated-value');

		// The component unmounts ...
		unmount();

		// ... before the timer has run
		act(() => {
			jest.runAllTimers();
		});

		// The result should not be updated.
		expect(result.current).toBe('initial');
	});
});

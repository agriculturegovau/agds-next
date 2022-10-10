import { mapSpacing, Spacing, tokens } from './tokens';
import { mapResponsiveProp, mq, ResponsiveProp } from './responsive';

describe('responsive prop style generation', () => {
	test('array syntax', () => {
		expect(
			mq({
				display: mapResponsiveProp(['none', 'block', null, 'flex']),
				gap: mapResponsiveProp(
					[0, 1, null, 2] as ResponsiveProp<Spacing>,
					mapSpacing
				),
			})
		).toEqual([
			{
				[tokens.mediaQuery.min.lg]: { display: 'flex', gap: '2rem' },
				[tokens.mediaQuery.min.sm]: { display: 'block', gap: '1rem' },
				display: 'none',
				gap: '0rem',
			},
		]);
	});
	test('object syntax', () => {
		expect(
			mq({
				display: mapResponsiveProp({ xs: 'none', sm: 'block', lg: 'flex' }),
				gap: mapResponsiveProp(
					{ xs: 0, sm: 1, lg: 2 } as ResponsiveProp<Spacing>,
					mapSpacing
				),
			})
		).toEqual([
			{
				[tokens.mediaQuery.min.lg]: { display: 'flex', gap: '2rem' },
				[tokens.mediaQuery.min.sm]: { display: 'block', gap: '1rem' },
				display: 'none',
				gap: '0rem',
			},
		]);
	});
});

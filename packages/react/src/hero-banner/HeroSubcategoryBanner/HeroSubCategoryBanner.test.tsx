import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Breadcrumbs } from '../../breadcrumbs';
import { cleanup, render } from '../../../../../test-utils';
import { HeroSubcategoryBanner } from './HeroSubcategoryBanner';
import { HeroSubcategoryBannerTitle } from './HeroSubcategoryBannerTitle';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function renderHeroSubcategoryBanner() {
	return render(
		<HeroSubcategoryBanner>
			<Breadcrumbs
				links={[
					{ href: '#', label: 'Section 1' },
					{ href: '#', label: 'Category page' },
					{ label: 'Subcategory page' },
				]}
			/>
			<HeroSubcategoryBannerTitle>
				Subcategory banner title - xxl/display (H1)
			</HeroSubcategoryBannerTitle>
		</HeroSubcategoryBanner>
	);
}

describe('HeroSubcategoryBanner', () => {
	it('renders correctly', () => {
		const { container } = renderHeroSubcategoryBanner();
		expect(container).toMatchSnapshot();
	});

	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderHeroSubcategoryBanner();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
		expect(await axe(container)).toHaveNoViolations();
	});
});

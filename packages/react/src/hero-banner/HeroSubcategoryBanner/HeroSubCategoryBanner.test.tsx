import '@testing-library/jest-dom';
import 'html-validate/jest';
import { Breadcrumbs } from '../../breadcrumbs';
import { cleanup, render } from '../../../../../test-utils';
import { HeroSubcategoryBanner } from './HeroSubcategoryBanner';
import { HeroSubcategoryBannerTitle } from './HeroSubcategoryBannerTitle';

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

	it('renders a valid HTML structure', () => {
		const { container } = renderHeroSubcategoryBanner();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
	});
});

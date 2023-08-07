import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { cleanup, render } from '../../../../../test-utils';
import { HeroCategoryBanner } from './HeroCategoryBanner';
import {
	HeroCategoryBannerTitle,
	HeroCategoryBannerSubtitle,
} from './HeroCategoryBannerTitle';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function renderHeroCategoryBanner() {
	return render(
		<HeroCategoryBanner
			image={
				<img
					src="/img/placeholder/hero-banner.jpeg"
					role="presentation"
					alt=""
				/>
			}
		>
			<HeroCategoryBannerTitle>
				Website hero banner title
			</HeroCategoryBannerTitle>
			<HeroCategoryBannerSubtitle>
				Hero banner sub title
			</HeroCategoryBannerSubtitle>
		</HeroCategoryBanner>
	);
}

describe('HeroCategoryBanner', () => {
	it('renders correctly', () => {
		const { container } = renderHeroCategoryBanner();
		expect(container).toMatchSnapshot();
	});

	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderHeroCategoryBanner();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
		expect(await axe(container)).toHaveNoViolations();
	});
});

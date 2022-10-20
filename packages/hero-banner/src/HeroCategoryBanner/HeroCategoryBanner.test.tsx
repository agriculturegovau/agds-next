import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render } from '../../../../test-utils';
import { HeroCategoryBanner } from './HeroCategoryBanner';
import {
	HeroCategoryBannerTitle,
	HeroCategoryBannerSubtitle,
} from './HeroCategoryBannerTitle';

afterEach(cleanup);

function renderHeroCategoryBanner() {
	return render(
		<HeroCategoryBanner
			image={
				<img
					src="/agds-next/img/placeholder/hero-banner.jpeg"
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

	it('renders a valid HTML structure', () => {
		const { container } = renderHeroCategoryBanner();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
	});
});

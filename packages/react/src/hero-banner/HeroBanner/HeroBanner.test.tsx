import '@testing-library/jest-dom';
import 'html-validate/jest';
import { Button } from '../../button';
import { cleanup, render } from '../../../../../test-utils';
import { HeroBanner } from './HeroBanner';
import {
	HeroBannerTitleContainer,
	HeroBannerTitle,
	HeroBannerSubtitle,
} from './HeroBannerTitle';

afterEach(cleanup);

function renderHeroBanner() {
	return render(
		<HeroBanner
			image={
				<img
					src="/agds-next/img/placeholder/hero-banner.jpeg"
					role="presentation"
					alt=""
				/>
			}
		>
			<HeroBannerTitleContainer>
				<HeroBannerTitle>Website hero banner title</HeroBannerTitle>
				<HeroBannerSubtitle>Short hero banner sentence</HeroBannerSubtitle>
			</HeroBannerTitleContainer>
			<Button>Primary action</Button>
		</HeroBanner>
	);
}

describe('HeroBanner', () => {
	it('renders correctly', () => {
		const { container } = renderHeroBanner();
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { container } = renderHeroBanner();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
	});
});

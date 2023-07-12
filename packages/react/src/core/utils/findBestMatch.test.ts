import { findBestMatch } from './findBestMatch';

const testLinks = [
	{ href: '/' },
	{ href: '/about' },
	{ href: '/services' },
	{ href: '/contact' },
	{ href: '/help' },
	{ href: '/help/account' },
];

describe('findBestMatch', () => {
	it('matches exact paths', () => {
		expect(findBestMatch(testLinks, '/')).toEqual('/');
		expect(findBestMatch(testLinks, '/about')).toEqual('/about');
		expect(findBestMatch(testLinks, '/services')).toEqual('/services');
		expect(findBestMatch(testLinks, '/contact')).toEqual('/contact');
		expect(findBestMatch(testLinks, '/help')).toEqual('/help');
		expect(findBestMatch(testLinks, '/help/account')).toEqual('/help/account');
	});

	it('matches paths with trailing slashes ', () => {
		expect(findBestMatch(testLinks, '/')).toEqual('/');
		expect(findBestMatch(testLinks, '/about/')).toEqual('/about');
		expect(findBestMatch(testLinks, '/services/')).toEqual('/services');
		expect(findBestMatch(testLinks, '/contact/')).toEqual('/contact');
		expect(findBestMatch(testLinks, '/help/')).toEqual('/help');
		expect(findBestMatch(testLinks, '/help/account/')).toEqual('/help/account');
	});

	it('matches nested paths', () => {
		expect(findBestMatch(testLinks, '/about/profile')).toEqual('/about');
		expect(
			findBestMatch(testLinks, '/services/service-a/service-b/service-c')
		).toEqual('/services');
		expect(findBestMatch(testLinks, '/contact/message')).toEqual('/contact');
		expect(findBestMatch(testLinks, '/help/account/create-account')).toEqual('/help/account');
		expect(findBestMatch(testLinks, '/help/about/create-account')).toEqual('/help');
	});

	it('matches path with hashes and query params', () => {
		expect(findBestMatch(testLinks, '/about#id')).toEqual('/about');
		expect(findBestMatch(testLinks, '/about/profile#id')).toEqual('/about');
		expect(findBestMatch(testLinks, '/contact?foo=bar&baz=foo')).toEqual(
			'/contact'
		);
	});


});

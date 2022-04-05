import accordion from './accordion.svg';
import agBranding from './ag-branding.svg';
import body from './body.svg';
import box from './box.svg';
import breadcrumb from './breadcrumb.svg';
import button from './button.svg';
import callToAction from './call-to-action.svg';
import callout from './callout.svg';
import card from './card.svg';
import columns from './columns.svg';
import content from './content.svg';
import controlInput from './control-input.svg';
import core from './core.svg';
import directionLink from './direction-link.svg';
import field from './field.svg';
import footer from './footer.svg';
import guides from './guides.svg';
import header from './header.svg';
import heading from './heading.svg';
import icon from './icon.svg';
import inpageNav from './inpage-nav.svg';
import keywordList from './keyword-list.svg';
import linkList from './link-list.svg';
import mainNav from './main-nav.svg';
import packages from './packages.svg';
import pageAlert from './page-alert.svg';
import progressIndicator from './progress-indicator.svg';
import searchBox from './search-box.svg';
import select from './select.svg';
import sideNav from './side-nav.svg';
import skipLink from './skip-link.svg';
import starter from './starter.svg';
import table from './table.svg';
import tags from './tags.svg';
import text from './text.svg';
import textInput from './text-input.svg';
import datePicker from './date-picker.svg';
import fieldSet from './field-set.svg';
import taskList from './task-list.svg';
import textarea from './text-area.svg';

export const pictograms = {
	accordion,
	'ag-branding': agBranding,
	body,
	box,
	breadcrumb,
	breadcrumbs: breadcrumb,
	button,
	'call-to-action': callToAction,
	callout,
	card,
	columns,
	content,
	'control-input': controlInput,
	core,
	'direction-link': directionLink,
	datePicker,
	field,
	fieldSet,
	footer,
	guides,
	header,
	heading,
	icon,
	'inpage-nav': inpageNav,
	'keyword-list': keywordList,
	linkList,
	'link-list': linkList,
	mainNav,
	'main-nav': mainNav,
	packages,
	'page-alert': pageAlert,
	'progress-indicator': progressIndicator,
	sideNav,
	'search-box': searchBox,
	select,
	'side-nav': sideNav,
	'skip-link': skipLink,
	starter,
	table,
	taskList,
	tags,
	text,
	textarea,
	'text-input': textInput,
};

export function getPictogram(slug: string) {
	if (slug in pictograms) {
		return pictograms[slug as keyof typeof pictograms];
	}
	return pictograms.box;
}

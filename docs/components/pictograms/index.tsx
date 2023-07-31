import a11y from './a11y.svg';
import accordion from './accordion.svg';
import agBranding from './ag-branding.svg';
import avatar from './avatar.svg';
import box from './box.svg';
import breadcrumb from './breadcrumb.svg';
import button from './button.svg';
import callToAction from './call-to-action.svg';
import callout from './callout.svg';
import card from './card.svg';
import columns from './columns.svg';
import components from './components.svg';
import content from './content.svg';
import controlGroup from './control-group.svg';
import core from './core.svg';
import datePicker from './date-picker.svg';
import details from './details.svg';
import divider from './divider.svg';
import directionLink from './direction-link.svg';
import fileUpload from './file-upload.svg';
import field from './field.svg';
import fieldset from './fieldset.svg';
import footer from './footer.svg';
import formStack from './form-stack.svg';
import guides from './guides.svg';
import header from './header.svg';
import heading from './heading.svg';
import herobanner from './hero-banner.svg';
import icon from './icon.svg';
import inpageNav from './inpage-nav.svg';
import loading from './loading.svg';
import linkList from './link-list.svg';
import mainNav from './main-nav.svg';
import modal from './modal.svg';
import pageAlert from './page-alert.svg';
import pagination from './pagination.svg';
import progressIndicator from './progress-indicator.svg';
import prose from './prose.svg';
import searchBox from './search-box.svg';
import select from './select.svg';
import sideNav from './side-nav.svg';
import skeleton from './skeleton.svg';
import skipLink from './skip-link.svg';
import starter from './starter.svg';
import subnav from './sub-nav.svg';
import summaryList from './summary-list.svg';
import switchPictogram from './switch.svg';
import table from './table.svg';
import tags from './tags.svg';
import taskList from './task-list.svg';
import text from './text.svg';
import textarea from './textarea.svg';
import textLink from './text-link.svg';
import textInput from './text-input.svg';

export const pictograms = {
	a11y,
	accordion,
	autocomplete: select,
	'ag-branding': agBranding,
	avatar,
	box,
	breadcrumb,
	breadcrumbs: breadcrumb,
	button,
	'call-to-action': callToAction,
	callout,
	card,
	columns,
	combobox: select,
	components,
	content,
	'control-group': controlGroup,
	core,
	'direction-link': directionLink,
	'date-picker': datePicker,
	'date-range-picker': datePicker,
	details,
	divider,
	'file-input': fileUpload,
	'file-upload': fileUpload,
	field,
	fieldset,
	footer,
	'form-stack': formStack,
	'global-alert': pageAlert,
	guides,
	header,
	heading,
	'hero-banner': herobanner,
	icon,
	'inpage-nav': inpageNav,
	'link-list': linkList,
	loading,
	'main-nav': mainNav,
	modal,
	'page-alert': pageAlert,
	pagination,
	'progress-indicator': progressIndicator,
	prose,
	sideNav,
	'search-box': searchBox,
	'search-input': searchBox,
	select,
	'side-nav': sideNav,
	skeleton,
	'skip-link': skipLink,
	starter,
	'sub-nav': subnav,
	'summary-list': summaryList,
	switch: switchPictogram,
	table,
	'task-list': taskList,
	tags,
	text,
	'text-link': textLink,
	textarea,
	'text-input': textInput,
};

export function getPictogram(slug: string) {
	if (slug in pictograms) {
		return pictograms[slug as keyof typeof pictograms];
	}
	return pictograms.box;
}

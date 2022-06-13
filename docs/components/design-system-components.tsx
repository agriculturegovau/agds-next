import {
	Accordion,
	AccordionItem,
	AccordionItemContent,
} from '@ag.ds-next/accordion';
import { Logo } from '@ag.ds-next/ag-branding';
import { BaseButton, Button, ButtonGroup } from '@ag.ds-next/button';
import { Box, Flex, Stack } from '@ag.ds-next/box';
import { Body, unsetBodyStylesClassname } from '@ag.ds-next/body';
import { useTernaryState, tokens } from '@ag.ds-next/core';
import { Text } from '@ag.ds-next/text';
import { TextLink, TextLinkExternal } from '@ag.ds-next/text-link';
import { Heading, H1, H2, H3, H4, H5, H6 } from '@ag.ds-next/heading';
import { LinkList } from '@ag.ds-next/link-list';
import { Breadcrumbs } from '@ag.ds-next/breadcrumbs';
import { Columns, Column } from '@ag.ds-next/columns';
import {
	Card,
	CardFooter,
	CardHeader,
	CardInner,
	CardLink,
	CardList,
} from '@ag.ds-next/card';
import { CallToAction } from '@ag.ds-next/call-to-action';
import { Callout, CalloutTitle } from '@ag.ds-next/callout';
import { Header, HeaderBrand, HeaderContainer } from '@ag.ds-next/header';
import { FileUpload } from '@ag.ds-next/file-upload';
import { Footer, FooterDivider } from '@ag.ds-next/footer';
import { FormStack } from '@ag.ds-next/form-stack';
import { MainNav } from '@ag.ds-next/main-nav';
import { SecondaryNav } from '@ag.ds-next/secondary-nav';
import {
	SideNav,
	SideNavContainer,
	SideNavLink,
	SideNavGroup,
	SideNavTitle,
} from '@ag.ds-next/side-nav';
import {
	AlertIcon,
	AlertFilledIcon,
	ArrowUpIcon,
	ArrowDownIcon,
	ArrowLeftIcon,
	ArrowRightIcon,
	AvatarIcon,
	ChevronUpIcon,
	ChevronDownIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
	CloseIcon,
	ExternalLinkIcon,
	MenuIcon,
	ProgressDoingIcon,
	ProgressDoneIcon,
	ProgressTodoIcon,
	SearchIcon,
	SuccessIcon,
	SuccessFilledIcon,
} from '@ag.ds-next/icon';
import { InpageNav } from '@ag.ds-next/inpage-nav';
import { Modal } from '@ag.ds-next/modal';
import { Logo as AgLogo } from '@ag.ds-next/ag-branding';
import { Field } from '@ag.ds-next/field';
import { Fieldset } from '@ag.ds-next/fieldset';
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHeader,
	TableHead,
} from '@ag.ds-next/table';
import { TextInput } from '@ag.ds-next/text-input';
import { Textarea } from '@ag.ds-next/textarea';
import {
	SearchBox,
	SearchBoxInput,
	SearchBoxButton,
} from '@ag.ds-next/search-box';
import { Select } from '@ag.ds-next/select';
import { ExternalLinkCallout, VisuallyHidden } from '@ag.ds-next/a11y';
import { ProgressIndicator } from '@ag.ds-next/progress-indicator';
import { Checkbox, Radio, ControlGroup } from '@ag.ds-next/control-input';
import { KeywordList } from '@ag.ds-next/keyword-list';
import {
	SkipLinks,
	SkipLinkContainer,
	SkipLinkItem,
} from '@ag.ds-next/skip-link';
import { DirectionLink } from '@ag.ds-next/direction-link';
import { Tags } from '@ag.ds-next/tags';
import {
	Content,
	PageContent,
	SectionContent,
	ContentBleed,
} from '@ag.ds-next/content';
import { TaskList } from '@ag.ds-next/task-list';
import { PageAlert } from '@ag.ds-next/page-alert';
import { DatePicker, DateRangePicker } from '@ag.ds-next/date-picker';
import {
	HeroBanner,
	HeroBannerTitleContainer,
	HeroBannerTitle,
	HeroBannerSubtitle,
	HeroCategoryBanner,
	HeroCategoryBannerTitle,
	HeroCategoryBannerSubtitle,
	HeroSubcategoryBanner,
	HeroSubcategoryBannerTitle,
} from '@ag.ds-next/hero-banner';
import { LoadingBlanket, LoadingDots } from '@ag.ds-next/loading';
import { Badge, NotificationBadge, IndicatorDot } from '@ag.ds-next/badge';

export const designSystemComponents = {
	Accordion,
	AccordionItem,
	AccordionItemContent,
	AgLogo,
	BaseButton,
	Button,
	ButtonGroup,
	Box,
	Flex,
	Callout,
	CalloutTitle,
	CallToAction,
	Card,
	CardFooter,
	CardHeader,
	CardInner,
	CardLink,
	CardList,
	Columns,
	Column,
	Stack,
	Body,
	unsetBodyStylesClassname,
	FileUpload,
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHeader,
	TableHead,
	Text,
	TextLink,
	TextLinkExternal,
	Heading,
	H1,
	H2,
	H3,
	H4,
	H5,
	H6,
	LinkList,
	Logo,
	Breadcrumbs,
	Footer,
	FooterDivider,
	FormStack,
	Header,
	HeaderBrand,
	HeaderContainer,
	MainNav,
	SecondaryNav,
	Modal,
	PageAlert,
	SideNav,
	SideNavContainer,
	SideNavLink,
	SideNavGroup,
	SideNavTitle,
	AlertIcon,
	AlertFilledIcon,
	ArrowUpIcon,
	ArrowDownIcon,
	ArrowLeftIcon,
	ArrowRightIcon,
	AvatarIcon,
	ChevronUpIcon,
	ChevronDownIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
	CloseIcon,
	ProgressDoingIcon,
	ProgressDoneIcon,
	ExternalLinkIcon,
	MenuIcon,
	SearchIcon,
	SuccessIcon,
	SuccessFilledIcon,
	ProgressTodoIcon,
	InpageNav,
	Field,
	Fieldset,
	TextInput,
	Textarea,
	SearchBox,
	SearchBoxInput,
	SearchBoxButton,
	Select,
	VisuallyHidden,
	ExternalLinkCallout,
	ProgressIndicator,
	Checkbox,
	Radio,
	ControlGroup,
	KeywordList,
	SkipLinks,
	SkipLinkContainer,
	SkipLinkItem,
	DirectionLink,
	Tags,
	Content,
	PageContent,
	SectionContent,
	ContentBleed,
	TaskList,
	DatePicker,
	DateRangePicker,
	useTernaryState,
	HeroBanner,
	HeroBannerTitleContainer,
	HeroBannerTitle,
	HeroBannerSubtitle,
	HeroSubcategoryBanner,
	HeroSubcategoryBannerTitle,
	HeroCategoryBanner,
	HeroCategoryBannerTitle,
	HeroCategoryBannerSubtitle,
	tokens,
	LoadingBlanket,
	LoadingDots,
	Badge,
	NotificationBadge,
	IndicatorDot,
};

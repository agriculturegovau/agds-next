import { useEffect, useRef, useState } from 'react';
import {
	useForm,
	SubmitHandler,
	SubmitErrorHandler,
	Controller,
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Stack } from '@ag.ds-next/react/stack';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { TextInput } from '@ag.ds-next/react/text-input';
import { DatePicker } from '@ag.ds-next/react/date-picker';
import { Select } from '@ag.ds-next/react/select';
import { Radio } from '@ag.ds-next/react/radio';
import { ControlGroup } from '@ag.ds-next/react/control-group';
import { useScrollToField } from '@ag.ds-next/react/field';
import { PageAlert } from '@ag.ds-next/react/page-alert';
import { Text } from '@ag.ds-next/react/text';
import { TextLink } from '@ag.ds-next/react/text-link';
import { UnorderedList, ListItem } from '@ag.ds-next/react/list';
import { FormRequiredFieldsMessage } from '../FormRequiredFieldsMessage';
import { FormRegisterPetDetailsContainer } from './FormRegisterPetDetailsContainer';
import { FormRegisterPetDetailsActions } from './FormRegisterPetDetailsActions';
import { useFormRegisterPetDetails } from './FormRegisterPetDetails';

export const formSchema = yup
	.object({
		name: yup.string().required('Enter your pet’s name'),
		breed: yup.string().required('Select your pet’s breed'),
		dob: yup.date().required('Enter your pet’s date of birth'),
		sex: yup
			.string()
			.typeError('Select your pet’s sex')
			.required('Select your pet’s sex'),
	})
	.required();

export type FormSchema = yup.InferType<typeof formSchema>;

export const FormRegisterPetDetailsStep1 = () => {
	const { next, stepFormState } = useFormRegisterPetDetails();
	const scrollToField = useScrollToField();
	const errorRef = useRef<HTMLDivElement>(null);
	const [focusedError, setFocusedError] = useState(false);

	const {
		control,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormSchema>({
		defaultValues: stepFormState,
		resolver: yupResolver(formSchema),
	});

	const onSubmit: SubmitHandler<FormSchema> = (data) => {
		setFocusedError(false);
		next(data);
	};

	const onError: SubmitErrorHandler<FormSchema> = () => {
		setFocusedError(false);
	};

	// Only show the page alert if there is more than 1 error
	const hasErrors = Object.keys(errors).length > 1;

	useEffect(() => {
		if (hasErrors && !focusedError) {
			errorRef.current?.focus();
			setFocusedError(true);
		}
	}, [hasErrors, focusedError, errors]);

	return (
		<FormRegisterPetDetailsContainer
			callToAction={<FormRequiredFieldsMessage />}
			introduction="Domestic pets living in urban environments need to be registered."
			title="Pet details"
		>
			<Stack
				as="form"
				gap={3}
				noValidate
				onSubmit={handleSubmit(onSubmit, onError)}
			>
				<FormStack>
					{hasErrors && (
						<PageAlert
							ref={errorRef}
							tabIndex={-1}
							title="There is a problem"
							tone="error"
						>
							<Text as="p">
								Please correct the following fields and try again
							</Text>
							<UnorderedList>
								{Object.entries(errors).map(([key, value]) => (
									<ListItem key={key}>
										<TextLink href={`#${key}`} onClick={scrollToField}>
											{Array.isArray(value) ? value[0].message : value.message}
										</TextLink>
									</ListItem>
								))}
							</UnorderedList>
						</PageAlert>
					)}
					<TextInput
						{...register('name')}
						id="petName"
						invalid={Boolean(errors.name?.message)}
						label="Pet name"
						maxWidth="xl"
						message={errors.name?.message}
						required
					/>
					<Select
						{...register('breed')}
						id="breed"
						invalid={Boolean(errors.breed?.message)}
						label="Breed"
						maxWidth="xl"
						message={errors.breed?.message}
						options={DOG_BREED_OPTIONS}
						placeholder="Please select"
						required
					/>
					<Controller
						control={control}
						name="dob"
						render={({ field: { ref, ...field } }) => (
							<DatePicker
								{...field}
								id="dob"
								inputRef={ref}
								invalid={Boolean(errors.dob?.message)}
								label="Date of birth"
								maxWidth="xl"
								message={errors.dob?.message}
								required
							/>
						)}
					/>
					<ControlGroup
						block
						id="sex"
						invalid={Boolean(errors.sex)}
						label="Sex"
						message={errors.sex?.message}
						required
					>
						<Radio {...register('sex')} value="Male">
							Male
						</Radio>
						<Radio {...register('sex')} value="Female">
							Female
						</Radio>
					</ControlGroup>
				</FormStack>
				<FormRegisterPetDetailsActions />
			</Stack>
		</FormRegisterPetDetailsContainer>
	);
};

// https://github.com/dariusk/corpora/blob/master/data/animals/dogs.json
const DOG_BREEDS = [
	'Affenpinscher',
	'Afghan Hound',
	'Aidi',
	'Airedale Terrier',
	'Akbash Dog',
	'Akita',
	'Alano Español',
	'Alaskan Klee Kai',
	'Alaskan Malamute',
	'Alpine Dachsbracke',
	'Alpine Spaniel',
	'American Bulldog',
	'American Cocker Spaniel',
	'American Eskimo Dog',
	'American Foxhound',
	'American Hairless Terrier',
	'American Pit Bull Terrier',
	'American Staffordshire Terrier',
	'American Water Spaniel',
	'Anglo-Français de Petite Vénerie',
	'Appenzeller Sennenhund',
	'Ariege Pointer',
	'Ariegeois',
	'Armant',
	'Armenian Gampr dog',
	'Artois Hound',
	'Australian Cattle Dog',
	'Australian Kelpie',
	'Australian Shepherd',
	'Australian Silky Terrier',
	'Australian Stumpy Tail Cattle Dog',
	'Australian Terrier',
	'Azawakh',
	'Bakharwal Dog',
	'Barbet',
	'Basenji',
	'Basque Shepherd Dog',
	'Basset Artésien Normand',
	'Basset Bleu de Gascogne',
	'Basset Fauve de Bretagne',
	'Basset Hound',
	'Bavarian Mountain Hound',
	'Beagle',
	'Beagle-Harrier',
	'Bearded Collie',
	'Beauceron',
	'Bedlington Terrier',
	'Belgian Shepherd Dog (Groenendael)',
	'Belgian Shepherd Dog (Laekenois)',
	'Belgian Shepherd Dog (Malinois)',
	'Bergamasco Shepherd',
	'Berger Blanc Suisse',
	'Berger Picard',
	'Berner Laufhund',
	'Bernese Mountain Dog',
	'Billy',
	'Black and Tan Coonhound',
	'Black and Tan Virginia Foxhound',
	'Black Norwegian Elkhound',
	'Black Russian Terrier',
	'Bloodhound',
	'Blue Lacy',
	'Blue Paul Terrier',
	'Boerboel',
	'Bohemian Shepherd',
	'Bolognese',
	'Border Collie',
	'Border Terrier',
	'Borzoi',
	'Boston Terrier',
	'Bouvier des Ardennes',
	'Bouvier des Flandres',
	'Boxer',
	'Boykin Spaniel',
	'Bracco Italiano',
	"Braque d'Auvergne",
	'Braque du Bourbonnais',
	'Braque du Puy',
	'Braque Francais',
	'Braque Saint-Germain',
	'Brazilian Terrier',
	'Briard',
	'Briquet Griffon Vendéen',
	'Brittany',
	'Broholmer',
	'Bruno Jura Hound',
	'Bucovina Shepherd Dog',
	'Bull and Terrier',
	'Bull Terrier (Miniature)',
	'Bull Terrier',
	'Bulldog',
	'Bullenbeisser',
	'Bullmastiff',
	'Bully Kutta',
	'Burgos Pointer',
	'Cairn Terrier',
	'Canaan Dog',
	'Canadian Eskimo Dog',
	'Cane Corso',
	'Cardigan Welsh Corgi',
	'Carolina Dog',
	'Carpathian Shepherd Dog',
	'Catahoula Cur',
	'Catalan Sheepdog',
	'Caucasian Shepherd Dog',
	'Cavalier King Charles Spaniel',
	'Central Asian Shepherd Dog',
	'Cesky Fousek',
	'Cesky Terrier',
	'Chesapeake Bay Retriever',
	'Chien Français Blanc et Noir',
	'Chien Français Blanc et Orange',
	'Chien Français Tricolore',
	'Chien-gris',
	'Chihuahua',
	'Chilean Fox Terrier',
	'Chinese Chongqing Dog',
	'Chinese Crested Dog',
	'Chinese Imperial Dog',
	'Chinook',
	'Chippiparai',
	'Chow Chow',
	'Cierny Sery',
	'Cimarrón Uruguayo',
	"Cirneco dell'Etna",
	'Clumber Spaniel',
	'Combai',
	'Cordoba Fighting Dog',
	'Coton de Tulear',
	'Cretan Hound',
	'Croatian Sheepdog',
	'Cumberland Sheepdog',
	'Curly Coated Retriever',
	'Cursinu',
	'Cão da Serra de Aires',
	'Cão de Castro Laboreiro',
	'Cão Fila de São Miguel',
	'Dachshund',
	'Dalmatian',
	'Dandie Dinmont Terrier',
	'Danish Swedish Farmdog',
	'Deutsche Bracke',
	'Doberman Pinscher',
	'Dogo Argentino',
	'Dogo Cubano',
	'Dogue de Bordeaux',
	'Drentse Patrijshond',
	'Drever',
	'Dunker',
	'Dutch Shepherd Dog',
	'Dutch Smoushond',
	'East Siberian Laika',
	'East-European Shepherd',
	'Elo',
	'English Cocker Spaniel',
	'English Foxhound',
	'English Mastiff',
	'English Setter',
	'English Shepherd',
	'English Springer Spaniel',
	'English Toy Terrier (Black &amp; Tan)',
	'English Water Spaniel',
	'English White Terrier',
	'Entlebucher Mountain Dog',
	'Estonian Hound',
	'Estrela Mountain Dog',
	'Eurasier',
	'Field Spaniel',
	'Fila Brasileiro',
	'Finnish Hound',
	'Finnish Lapphund',
	'Finnish Spitz',
	'Flat-Coated Retriever',
	'Formosan Mountain Dog',
	'Fox Terrier (Smooth)',
	'French Bulldog',
	'French Spaniel',
	'Galgo Español',
	'Gascon Saintongeois',
	'German Longhaired Pointer',
	'German Pinscher',
	'German Shepherd',
	'German Shorthaired Pointer',
	'German Spaniel',
	'German Spitz',
	'German Wirehaired Pointer',
	'Giant Schnauzer',
	'Glen of Imaal Terrier',
	'Golden Retriever',
	'Gordon Setter',
	'Gran Mastín de Borínquen',
	'Grand Anglo-Français Blanc et Noir',
	'Grand Anglo-Français Blanc et Orange',
	'Grand Anglo-Français Tricolore',
	'Grand Basset Griffon Vendéen',
	'Grand Bleu de Gascogne',
	'Grand Griffon Vendéen',
	'Great Dane',
	'Great Pyrenees',
	'Greater Swiss Mountain Dog',
	'Greek Harehound',
	'Greenland Dog',
	'Greyhound',
	'Griffon Bleu de Gascogne',
	'Griffon Bruxellois',
	'Griffon Fauve de Bretagne',
	'Griffon Nivernais',
	'Hamiltonstövare',
	'Hanover Hound',
	'Hare Indian Dog',
	'Harrier',
	'Havanese',
	'Hawaiian Poi Dog',
	'Himalayan Sheepdog',
	'Hokkaido',
	'Hovawart',
	'Huntaway',
	'Hygenhund',
	'Ibizan Hound',
	'Icelandic Sheepdog',
	'Indian pariah dog',
	'Indian Spitz',
	'Irish Red and White Setter',
	'Irish Setter',
	'Irish Terrier',
	'Irish Water Spaniel',
	'Irish Wolfhound',
	'Istrian Coarse-haired Hound',
	'Istrian Shorthaired Hound',
	'Italian Greyhound',
	'Jack Russell Terrier',
	'Jagdterrier',
	'Jämthund',
	'Kai Ken',
	'Kaikadi',
	'Kanni',
	'Karelian Bear Dog',
	'Karst Shepherd',
	'Keeshond',
	'Kerry Beagle',
	'Kerry Blue Terrier',
	'King Charles Spaniel',
	'King Shepherd',
	'Kintamani',
	'Kishu',
	'Komondor',
	'Kooikerhondje',
	'Koolie',
	'Korean Jindo Dog',
	'Kromfohrländer',
	'Kumaon Mastiff',
	'Kurī',
	'Kuvasz',
	'Kyi-Leo',
	'Labrador Husky',
	'Labrador Retriever',
	'Lagotto Romagnolo',
	'Lakeland Terrier',
	'Lancashire Heeler',
	'Landseer',
	'Lapponian Herder',
	'Large Münsterländer',
	'Leonberger',
	'Lhasa Apso',
	'Lithuanian Hound',
	'Longhaired Whippet',
	'Löwchen',
	'Mahratta Greyhound',
	'Maltese',
	'Manchester Terrier',
	'Maremma Sheepdog',
	'McNab',
	'Mexican Hairless Dog',
	'Miniature American Shepherd',
	'Miniature Australian Shepherd',
	'Miniature Fox Terrier',
	'Miniature Pinscher',
	'Miniature Schnauzer',
	'Miniature Shar Pei',
	'Molossus',
	'Montenegrin Mountain Hound',
	'Moscow Watchdog',
	'Moscow Water Dog',
	'Mountain Cur',
	'Mucuchies',
	'Mudhol Hound',
	'Mudi',
	'Neapolitan Mastiff',
	'New Zealand Heading Dog',
	'Newfoundland',
	'Norfolk Spaniel',
	'Norfolk Terrier',
	'Norrbottenspets',
	'North Country Beagle',
	'Northern Inuit Dog',
	'Norwegian Buhund',
	'Norwegian Elkhound',
	'Norwegian Lundehund',
	'Norwich Terrier',
	'Old Croatian Sighthound',
	'Old Danish Pointer',
	'Old English Sheepdog',
	'Old English Terrier',
	'Old German Shepherd Dog',
	'Olde English Bulldogge',
	'Other',
	'Otterhound',
	'Pachon Navarro',
	'Paisley Terrier',
	'Pandikona',
	'Papillon',
	'Parson Russell Terrier',
	'Patterdale Terrier',
	'Pekingese',
	'Pembroke Welsh Corgi',
	'Perro de Presa Canario',
	'Perro de Presa Mallorquin',
	'Peruvian Hairless Dog',
	'Petit Basset Griffon Vendéen',
	'Petit Bleu de Gascogne',
	'Phalène',
	'Pharaoh Hound',
	'Phu Quoc ridgeback dog',
	'Picardy Spaniel',
	'Plott Hound',
	'Podenco Canario',
	'Pointer (dog breed)',
	'Polish Greyhound',
	'Polish Hound',
	'Polish Hunting Dog',
	'Polish Lowland Sheepdog',
	'Polish Tatra Sheepdog',
	'Pomeranian',
	'Pont-Audemer Spaniel',
	'Poodle',
	'Porcelaine',
	'Portuguese Podengo',
	'Portuguese Pointer',
	'Portuguese Water Dog',
	'Posavac Hound',
	'Pražský Krysařík',
	'Pudelpointer',
	'Pug',
	'Puli',
	'Pumi',
	'Pungsan Dog',
	'Pyrenean Mastiff',
	'Pyrenean Shepherd',
	'Rafeiro do Alentejo',
	'Rajapalayam',
	'Rampur Greyhound',
	'Rastreador Brasileiro',
	'Rat Terrier',
	'Ratonero Bodeguero Andaluz',
	'Redbone Coonhound',
	'Rhodesian Ridgeback',
	'Rottweiler',
	'Rough Collie',
	'Russell Terrier',
	'Russian Spaniel',
	'Russian tracker',
	'Russo-European Laika',
	'Sabueso Español',
	'Saint-Usuge Spaniel',
	'Sakhalin Husky',
	'Saluki',
	'Samoyed',
	'Sapsali',
	'Schapendoes',
	'Schillerstövare',
	'Schipperke',
	'Schweizer Laufhund',
	'Schweizerischer Niederlaufhund',
	'Scotch Collie',
	'Scottish Deerhound',
	'Scottish Terrier',
	'Sealyham Terrier',
	'Segugio Italiano',
	'Seppala Siberian Sleddog',
	'Serbian Hound',
	'Serbian Tricolour Hound',
	'Shar Pei',
	'Shetland Sheepdog',
	'Shiba Inu',
	'Shih Tzu',
	'Shikoku',
	'Shiloh Shepherd Dog',
	'Siberian Husky',
	'Silken Windhound',
	'Sinhala Hound',
	'Skye Terrier',
	'Sloughi',
	'Slovak Cuvac',
	'Slovakian Rough-haired Pointer',
	'Small Greek Domestic Dog',
	'Small Münsterländer',
	'Smooth Collie',
	'South Russian Ovcharka',
	'Southern Hound',
	'Spanish Mastiff',
	'Spanish Water Dog',
	'Spinone Italiano',
	'Sporting Lucas Terrier',
	'St. Bernard',
	'St. John’s water dog',
	'Stabyhoun',
	'Staffordshire Bull Terrier',
	'Standard Schnauzer',
	'Stephens Cur',
	'Styrian Coarse-haired Hound',
	'Sussex Spaniel',
	'Swedish Lapphund',
	'Swedish Vallhund',
	'Tahltan Bear Dog',
	'Taigan',
	'Talbot',
	'Tamaskan Dog',
	'Teddy Roosevelt Terrier',
	'Telomian',
	'Tenterfield Terrier',
	'Thai Bangkaew Dog',
	'Thai Ridgeback',
	'Tibetan Mastiff',
	'Tibetan Spaniel',
	'Tibetan Terrier',
	'Tornjak',
	'Tosa',
	'Toy Bulldog',
	'Toy Fox Terrier',
	'Toy Manchester Terrier',
	'Toy Trawler Spaniel',
	'Transylvanian Hound',
	'Treeing Cur',
	'Treeing Walker Coonhound',
	'Trigg Hound',
	'Tweed Water Spaniel',
	'Tyrolean Hound',
	'Vizsla',
	'Volpino Italiano',
	'Weimaraner',
	'Welsh Sheepdog',
	'Welsh Springer Spaniel',
	'Welsh Terrier',
	'West Highland White Terrier',
	'West Siberian Laika',
	'Westphalian Dachsbracke',
	'Wetterhoun',
	'Whippet',
	'White Shepherd',
	'Wire Fox Terrier',
	'Wirehaired Pointing Griffon',
	'Wirehaired Vizsla',
	'Yorkshire Terrier',
	'Šarplaninac',
];

const DOG_BREED_OPTIONS = DOG_BREEDS.map((v) => ({
	label: v,
	value: v,
}));

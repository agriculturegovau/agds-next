---
title: File Upload
description: Allows a user to insert a file into a form, via drag-and-drop or using the system file browser.
group: Forms
storybookPath: /story/forms-fileupload--on-light
---

`FileUpload` is a [controlled component](https://reactjs.org/docs/forms.html#controlled-components).

```jsx live
<FileUpload
	label="Avatar image"
	hint="Formats accepted: .png, .jpg."
	multiple={false}
	accept={['image/jpeg', 'image/jpg', 'image/png']}
/>
```

## Indicating upload status

When using FileUpload, you need to consider how the communicate to the user that the upload is in progress. Otherwise the page will appear "frozen" as the operation happens in the background.

### Uploading on submission
In this example, we are submitting a file as part of a typical form submission to an API.

We recommend wrapping the FileUpload in a LoadingBanner as the form submits, to indicate to the user that any delays are being caused by a potentially larger file being uploaded. If your backend system supports it, you can also use this UI to indicate upload status as a percentage.

As normal, we indicate that the form is submitting by adding a `loading={true}` to the submit button. This will show animated dots to signify that the user has to wait for the operation to complete.

```jsx live
<FormStack>
  <div style={{ position: 'relative' }}>
    <FileUpload
      label="Avatar image"
      hint="Formats accepted: .png, .jpg."
      multiple={false}
      accept={['image/jpeg', 'image/jpg', 'image/png']}
    />
    <LoadingBlanket label="Uploading file (53%)" />
  </div>
  <div>
  <Button loading>Submit</Button>
  </div>
</FormStack>
```


### Uploading files instantly
In this example, the file is instantly uploaded to a file hosting service, and the URL of the uploaded asset would be added to the form for submission. This means the form should not be allowed to submit until all assets are uploaded, but that the submission should be very quick as it's only text content being submitted.

`FileUpload` component allows you to indicate the status of an upload via a `file.status` property.

```jsx live
() => {
	const uploadingFile = new File(['this is an example file'], 'example.jpg', {
		type: 'image/jpg',
	});
	uploadingFile.status = 'uploading';
  const uploadedFile = new File(['this is another example file that has uploaded'], 'example.jpg', {
		type: 'image/jpg',
	});
	uploadedFile.status = 'success';
	return (
		<FileUpload
			label="Avatar image"
			hint="Formats accepted: .png, .jpg."
			multiple={false}
			accept={['image/jpeg', 'image/jpg', 'image/png']}
			value={[uploadedFile, uploadingFile]}
			onChange={console.log}
		/>
	);
};
```
---

## Props

### Multiple files

Selecting multiple files is also supported with FileUpload. Simply add `multiple={true}`, and you can select as many files as you want. You can also set `maxFiles` to limit how many files can be selected.

```jsx
	<FileUpload multiple={true} maxFiles={3} />
```


### Maximum size

Use the `maxSize` prop to set a maximum size for each file. This value is measured in kB.

```jsx
<FileUpload maxSize={200} /> // 200kB
<FileUpload maxSize={20000} /> // 20MB
```

### Accepted files

Using the `accept` prop, you can specify what filetypes are allowed to be selected. Filetypes include...

- `application/msword`
- `application/pdf`
- `application/rtf`
- `application/vnd.ms-excel`
- `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet` (.xls)
- `application/vnd.openxmlformats-officedocument.wordprocessingml.document` (.doc)
- `application/zip`
- `audio/*`
- `audio/mpeg`
- `audio/wav`
- `image/*`
- `image/gif`
- `image/heic`
- `image/jpeg`
- `image/png`
- `image/svg+xml`
- `image/tiff`
- `image/webp`
- `text/*`
- `text/csv`
- `text/plain`
- `text/rtf`
- `video/*`
- `video/mp4`
- `video/mpeg`

```jsx
	<FileUpload accept={['image/jpeg', 'image/jpg', 'image/png']} />
```

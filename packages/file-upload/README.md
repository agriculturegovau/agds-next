---
title: FileUpload
description: Allows a user to insert a file into a form, via drag-and-drop or using the system file browser.
group: Forms
storybookPath: /story/forms-fileupload--on-light
---

```jsx live
<FileUpload
	label="Avatar image"
	hint="Formats accepted: .png, .jpg."
	multiple={false}
	accept={['image/jpeg', 'image/jpg', 'image/png']}
/>
```

## Multiple files

Selecting multiple files is also supported with FileUpload. Simply add `multiple={true}`, and you can select as many files as you want. You can also set `maxFiles` to limit how many files can be selected.

## Maximum size

Use the `maxSize` prop to set a maximum size for each file. maxSize is measured in kB.

```jsx
<FileUpload
  maxSize={200} // 200kB
/>

<FileUpload
  maxSize={20000} // 20MB
/>


```

## Accepted files

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

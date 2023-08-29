---
'@ag.ds-next/react': minor
---

table: Created new `TableRow` component. If you're using the standard `<tr>` HTML element, you can optionally upgrade to this new component.

```diff
<Table>
  <TableHead>
-   <tr>
+   <TableRow>
      <TableHeader scope="col">Location</TableHeader>
      <TableHeader scope="col">Population</TableHeader>
-   </tr>
+   </TableRow>
  </TableHead>
  <TableBody>
-   <tr>
+   <TableRow>
      <TableCell>New South Wales</TableCell>
      <TableCell>7,670,700</TableCell>
-   <tr>
+   </TableRow>
  </TableBody>
</Table>
```
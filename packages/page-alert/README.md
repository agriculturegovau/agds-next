---
title: Page alert
description: Page alerts are used to notify users of important information or changes on a page, in a way that attracts the user's attention without interrupting the current task.
group: Content
---

Typically Page Alerts appear at the top of a page following a submit action.

## Info
Page alerts are intended for important time-sensitive information only and should be used sparingly.

```jsx live
<PageAlert tone="info">
  <h3>Notice</h3>
  <p>All vacancies close on the advertised closing date unless otherwise specified.</p>
</PageAlert>
```

## Success
The success page alert is used for notifying the user that a task is fully completed.

```jsx live
<PageAlert tone="success">
  <h3>Submission successful</h3>
  <p>Your application has been successfully submitted.</p>
</PageAlert>
```

## Error
The error page alert should be used with form validation errors or other errors which will block the user from completing their task.

```jsx live
<PageAlert tone="error">
  <h3>There is a problem</h3>
  <ul>
      <li><a href="#">Full name must not be empty</a></li>
      <li><a href="#">Email must not be empty</a></li>
      <li><a href="#">Description must not be empty</a></li>
  </ul>
</PageAlert>
```

## Warning
Use warning page alerts to tell the user something urgent. Only use an alert if the information will help the user avoid a problem.
```jsx live
<PageAlert tone="warning">
  <h3>Browser out of date</h3>
  <p>Your web browser is out of date.</p>
</PageAlert>
```

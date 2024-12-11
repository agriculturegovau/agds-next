# Release Process

These instructions capture the internal process for making a release of the `@ag.ds-next/react` package.

## Docs website release notes

1. Copy the `@ag.ds-next/react@` version number from the current Version Packages PR and create a new branch using the format: `release-notes-v[version-number]`.
2. Search the repository for any `unreleased: true` components and remove this frontmatter as these components will be released.
3. Create a new `.mdx` file in `docs/content/updates` with today’s date as the file name.
4. Use the previous release as the template for the release notes. It should include:

   - Release description of what is new.
   - Detailed and consistent notes of what is in the release. Use the Version Packages content as a starter, but in some cases it may be better to write something new.
   - The new package release version from above.
   - A link to the Version Packages PR.

5. Add a minor docs changeset of ‘docs: AgDS Beta v[version-number] release notes.‘
6. Commit these changes with a description ‘Release notes v[version number]’, create a PR and merge it to `develop` when approved.

## npm release

1. Merge the PR named `Version Packages` into `develop` on GitHub once all checks pass.
2. Create and merge a new PR titled ‘Release v[version-number]’ which merges `develop` into `main`.
3. After `main` finishes building and deploying, on the command line, run `git pull` on the `main` branch to fetch latest changes.
4. Run `yarn fresh` to rebuild `node_modules` and clean-up any build output.
5. Run `yarn publish-changed` to find packages where the version listed in the `package.json` is ahead of the version published on npm, and publish just those packages.

   - The above command requires publish privileges on npm and a one time password (OTP).

6. Publish all new tags to GitHub with `git push --tags`.

## Github release notes

1. Create a draft release on GitHub based on the new release’s tag (such as @ag.ds-next/react@[version-number]).
2. Title the release with the version number, for example, ‘AgDS Beta v[version-number] release’.
3. Copy the latest docs release notes content without the frontmatter and with all urls updated to include the protocol and domain.
4. Publish the release.

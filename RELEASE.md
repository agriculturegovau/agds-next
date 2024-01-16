# Release Process

These instructions capture the internal process for making releases of the `@ag.ds-next` packages.

## npm release

Merge the PR named `Version Packages` into `main` on GitHub once tests are passing.

In the command line, on the `main` branch, run `git pull` to fetch latest changes.

Run `yarn fresh` to rebuild `node_modules` and clean-up any build output.

Finally, run `yarn publish-changed` to find packages where the version listed in the `package.json` is ahead of the version published on npm, and publish just those packages.

The above command requires publish privileges on npm and a one time password (OTP).

Then publish all new tags to GitHub with `git push --tags`.

Copy the successful output of the published packages from the above npm release, example output:

```sh
@ag.ds-next/react@1.18.0
```

Translate to a `package.json` style syntax for ease of copying, example:

```json
"@ag.ds-next/react": "1.18.0"
```

Use this output in the next step.

## Docs website release notes

Create a new branch using the format: `release-notes-[version-number]`.

Search the repository for any components that have been marked as unreleased. You can do this by searching for `unreleased: true`. If there any components marked as unreleased, they would have been released in the previous step so this piece of frontmatter needs to be removed.

Create a new `.mdx` file in `docs/content/updates` with today’s date as the file name.

Use the previous release as the template for the release notes. It should include:

- Summary headline of what’s in the release
- Release description of what is new. This may be taken from the changelogs but should remove the noise. In some cases it may be better to write something new.
- Verbose release notes link (link to the PR)

Commit this with a description 'Release notes [version number]" and merge it to main.

## Github release notes

Create a draft release on GitHub based on the new release’s tag (such as @ag.ds-next/react@1.18.0).

Give the release a title using the version number of the release, such as 'AgDS Beta v1.18.0 release'.

It should use the same content as the docs website’s release notes (with full urls to updated components).

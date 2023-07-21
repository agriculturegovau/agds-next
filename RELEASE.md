# Release Process

These instructions capture the internal process for making releases of the `@ag.ds-next` packages.

## npm release

Merge the PR named `Version Packages` into `main` on GitHub once tests are passing.

In the command line, run `git pull` to fetch latest changes from `main`.

Run `yarn fresh` to rebuild `node_modules` and clean-up any build output.

Finally, run `yarn publish-changed` to find packages where the version listed in the `package.json` is ahead of the version published on npm, and publish just those packages.

The above command requires publish privileges on npm and a one time password (OTP).

Create git tag relevant to release date, such as `git tag "$(date +'%Y-%m-%d')"`.

Then publish all new tags (releases plus release date version) to GitHub with `git push --tags`.

Copy the successful output of the published packages from the above npm release, example output:

```sh
@ag.ds-next/react@1.10.0
```

Translate to a `package.json` style syntax for ease of copying, example:

```json
"@ag.ds-next/react": "1.10.0"
```

Use this output in the next step.

## Docs website release notes

Search the repository for any components that have been marked as unreleased. You can do this by searching for `unreleased: true`. If there any components marked as unreleased, they would have been released in the previous step so this piece of frontmatter needs to be removed.

Create a new `.mdx` file in `docs/content/updates` with todays date as the file name.

Use the latest release as the template for the release notes. It should include:

- Summary headline of what's in the release
- Release description of what is new. This may be taken from the changelogs but should remove the noise. In some cases it may be better to write something new.
- Verbose release notes link (link to the PR)

## Github release notes

Create a draft release on GitHub based on the above tag (such as 2022-01-05).

Give the release a title using the date of the release like `January 5th, 2022`.

It should use the same content as the docs website release notes.

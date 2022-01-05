# Release Process

> ⚠️ Draft process. Things may change!

These instructions capture the internal process for making releases of the `@ag.ds-next` packages.

## npm release

Merge the PR named `Version Packages` into `main` on GitHub once tests are passing.

In the command line, run `git pull` to fetch latest changes from `main`.

Run `yarn fresh` to rebuild `node_modules` and clean-up any build output.

Finally, run `yarn publish-changed` to find packages where the version listed in the `package.json` is ahead of the version published on npm, and publish just those packages.

The above command requires OTP and publish privileges on npm.

Create git tag relevant to release date, such as `git tag "$(date +'%Y-%m-%d')"`.

Then publish all new tags (releases plus release date version) to GitHub with `git push --tags`.

Copy the successful output of the published packages from the above npm release, example output:

```sh
@ag.ds-next/core@1.0.0
@ag.ds-next/box@1.0.0
@ag.ds-next/text@1.0.0
```

Translate to a `package.json` style syntax for ease of copying, example:

```json
"@ag.ds-next/core": "1.0.0",
"@ag.ds-next/box": "1.0.0",
"@ag.ds-next/text": "1.0.0",
```

Use this output in the next step.

## Docs Website release notes

TODO

## Github release notes

Create a draft release on GitHub based on the above tag (such as 2021-11-02) with the following template.

Update the following:

- Summary headline of what's in the release (can be updated later)
- The Docs website link
- Packages output
- Verbose release notes link

````
[summary headline]

### **View the [complete release notes on the AG DS website](https://steelthreads.github.io/agds-next/releases/YYYY-MM-DD)**.

```sh
"@ag.ds-next/core": "x.x.x"
[place the packages output here]
```

## Changelog

https://steelthreads.github.io/agds-next

Aside from the [complete release notes on the @ag.ds-next website](https://steelthreads.github.io/agds-next), you can also view the [verbose change log](https://github.com/steelthreads/agds-next/pull/XXXX) in the related PR (https://github.com/steelthreads/agds-next/pull/XXXX) for this release.
````

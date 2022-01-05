---
'@ag.ds-next/ag-branding': major
'@ag.ds-next/body': major
'@ag.ds-next/box': major
'@ag.ds-next/button': major
'@ag.ds-next/content': major
'@ag.ds-next/core': major
'@ag.ds-next/footer': major
'@ag.ds-next/header': major
'@ag.ds-next/heading': major
'@ag.ds-next/link-list': major
'@ag.ds-next/main-nav': major
'@ag.ds-next/text': major
'@ag.ds-next/text-link': major
---

# Initial Test Release

This is the initial pre-release of the base set of DS components. The goal of this release is to test the process. Expect things to be broken if you're trying to use components from this release.

## If this is just a test, why is it a "major release"

TL;DR: Because it __is__ a major release. Before there was nothing. Now there is something.

The slightly more complete answer is that publishing anything below a `1.0.0` to npm can lead to some unexpected behaviour when it comes to resolving dependencies. These numbers only have meaning within a given context so there is little benefit to using `0.1.0` over `1.0.0` other than that it hints to users that this **may** not be stable. Just starting at `1.0.0` makes things easier.

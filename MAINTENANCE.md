# Repository maintenance

## Git history size (#2142)

The `.git` pack for this repository is unusually large (confirmed ~3.06 GB
on a full mirror clone), which makes cloning slow and is disproportionate to
the size of the current working tree (a fresh checkout of `main` is only a
few MB).

### Investigation findings

Analysis of a full `git clone --mirror` of the repository (2,438,995 objects
total):

- **1,774,993 blob objects**, totalling **~391.9 GB of uncompressed content**
  across history. This compresses down to the ~3 GB pack via Git's delta
  compression, which strongly suggests a large amount of near-duplicate
  binary content (i.e. the same or very similar large file committed
  repeatedly across many commits), rather than many distinct large files.
- **17,133 blobs are over 1 MB each**, summing to ~52.7 GB of raw content.
- The single largest blobs are ~11.2 MB each, and dozens of them cluster
  within a few hundred KB of that exact size — consistent with a generated
  build artifact (e.g. a bundled JS/CSS asset or a static site build such as
  `docs/public/storybook`) being committed with only minor byte-level
  differences on repeated commits, rather than genuinely distinct assets.
- No `.gitattributes`/Git LFS configuration exists anywhere in the current
  history, so no binary content has ever been routed through LFS.
- The current `.gitignore` already excludes several build-output directories
  (`docs/public/storybook`, `docs/public/playroom`, `docs/public/example-site`,
  `docs/public/example-form`, `docs/public/yourgov`, `**/dist`) — this is a
  strong signal that build output was committed to history at some point
  before these ignore rules were added, and that content is still sitting in
  every clone today.

This is a hypothesis based on aggregate size/count evidence, not a confirmed
list of exact paths/commits — pinpointing every offending path requires a
maintainer to run a full history scan (e.g. `git log --all --find-object=<sha>`
per blob, or a purpose-built tool like `git-sizer` or
`git filter-repo --analyze`), which is slow on a repo this size and out of
scope for a normal PR.

### Root cause

No `.gitattributes`/Git LFS configuration existed prior to this change, so
binary assets (images, PDFs, fonts, build output, etc.) committed over the
project's history were stored as regular Git blobs. Even where those files
were later deleted, ignored, or replaced, their content remains in every
clone because Git history is immutable by default — only rewriting history
(and force-pushing) removes it.

### What this change does

- Adds [`.gitattributes`](../.gitattributes) so common binary asset types are
  tracked with [Git LFS](https://git-lfs.com/) going forward, preventing
  further growth.
- Adds a CI check (`.github/workflows/large-file-check.yml`) that fails a PR
  if it introduces a file over 500KB that isn't tracked via Git LFS.

This does **not** shrink the existing ~3 GB of history — that requires a
one-time, disruptive history rewrite (see below), which is a maintainer/admin
action, not something that can land as a normal reviewable PR (GitHub has no
way to merge a rewritten history into `main` — it must be force-pushed
directly by someone with admin rights).

### Recommended one-time cleanup (maintainers only)

1. Identify the largest blobs in history with a full mirror clone (a
   `--filter=blob:none` partial clone doesn't help here — `verify-pack` and
   `cat-file --batch-all-objects` both need blob content present locally to
   report sizes):

   ```sh
   git clone --mirror <repo-url> agds-next-mirror
   cd agds-next-mirror
   git cat-file --batch-check='%(objectname) %(objecttype) %(objectsize)' \
     --batch-all-objects | awk '$2 == "blob"' | sort -k3 -n -r | head -50
   ```

   Then cross-reference the resulting SHAs with `git rev-list --objects --all`
   (or `git log --all --find-object=<sha>` per SHA, which is slow but exact)
   to find the file paths and commits that introduced them.

2. Once the offending paths are known, use
   [`git-filter-repo`](https://github.com/newren/git-filter-repo) (the
   modern, maintained replacement for BFG Repo-Cleaner) to strip them from
   history, e.g.:

   ```sh
   git filter-repo --path <path-to-large-file> --invert-paths
   ```

   Or migrate specific paths to Git LFS retroactively with
   `git lfs migrate import --include="*.png,*.jpg,..." --everything`.

3. **This rewrites every commit SHA.** Before force-pushing the result:
   - Coordinate with all active contributors — every existing clone and open
     PR branch will need to be re-based or re-cloned afterwards.
   - Back up the repository (a `--mirror` clone, as above, is a full backup).
   - Force-push the rewritten history to `main` (`git push --force --all` /
     `--tags` from the mirror).
   - Ask GitHub Support to trigger a server-side garbage collection
     afterwards so the old objects are actually purged from GitHub's storage,
     not just unreferenced.
4. After the rewrite, all contributors should re-clone the repository rather
   than trying to reconcile their existing local history.

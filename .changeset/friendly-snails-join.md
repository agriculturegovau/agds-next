---
'@ag.ds-next/react': patch
---

feat: add automated NPM publishing with GitHub Actions

- Implement test-and-publish workflow with changesets integration
- Add automated Release PR creation from develop branch  
- Configure secure permissions and NPM authentication
- Optimize CI/CD with caching and parallel testing
- Replace manual versioning with changeset-driven releases

Requires: NPM_TOKEN secret for publishing to @ag.ds-next registry

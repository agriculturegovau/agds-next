#!/usr/bin/env node

// Cross-platform script to check if running in CI environment
// Prevents publishing from local machines

if (!process.env.CI) {
  console.error('Publishing from local machine is disabled.');
  console.error('Push changes to main branch to trigger the CI/CD release process.');
  process.exit(1);
}

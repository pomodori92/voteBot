# Changelog

All notable changes to this project are documented in this file.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/). The project does not yet publish versioned releases, so these changes remain under `Unreleased`.

## [Unreleased]

### Added

- Reproducible npm project metadata and a lockfile workflow.
- Node.js 24.20.0 runtime pins and npm 12.0.2 package-manager metadata.
- Unit coverage for configuration, launch arguments, successful execution, and failure cleanup.
- A local Chrome smoke test that never contacts Poll.fm and honors the explicit sandbox opt-in.
- GitHub Actions checks for Windows and Linux, plus a Linux browser smoke test.
- Weekly Dependabot checks for npm and GitHub Actions dependencies.
- Project `.gitignore` rules that keep dependency manifests and lockfiles trackable.
- Cross-platform line-ending rules for Bash and Windows batch launchers.
- A PowerShell 7 launcher with configurable iteration count and delay.
- Installation, environment configuration, verification, update, and rollback documentation.

### Changed

- Pinned Puppeteer to 25.9.0.
- Replaced hard-coded and current-directory-dependent launcher paths with script-relative paths.
- Made every repeat launcher stop when an iteration fails.
- Updated documentation to remove the incorrect jQuery claim and obsolete installation guidance.
- Updated storage guidance for Puppeteer's shared browser cache and temporary profiles.

### Fixed

- Awaited `browser.close()` after successful and failed iterations.
- Added explicit errors for missing or invalid `POLLURL` and `ANSWERID` values.
- Fixed the Windows iteration counter output.

### Security

- Kept Chrome's sandbox enabled by default.
- Added an explicit `PUPPETEER_NO_SANDBOX` opt-in for isolated environments that require sandbox disablement.

### Rollback

- Restore this change set's previous files together. Dependency rollback must restore `package.json` and `package-lock.json` as a pair, followed by `npm ci` and the documented verification commands.

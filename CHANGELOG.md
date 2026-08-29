# Changelog

This file records every commit reachable from the current branch. Each commit maps to exactly one project version.

Versions are listed newest first. When branches diverged, non-merge commits are ordered by author timestamp; the merge commit closes its version series. These are historical changelog versions and do not imply that matching Git tags exist.

## [1.3.9] - 2026-08-29

- Reconstructed the changelog so every existing commit has its own version and commit reference.

## [1.3.8] - 2026-08-29

- Commit [`c4bfb55`](https://github.com/pomodori92/voteBot/commit/c4bfb55dfff9a66a9fe00d8ffab85ed3ca7e346c) by pomodori92: refactored `voteBot.js` into validated, testable functions; made browser cleanup deterministic; kept Chrome sandboxing enabled by default with an explicit opt-out; added CLI error handling and the initial changelog.

## [1.3.7] - 2026-08-29

- Commit [`19d3551`](https://github.com/pomodori92/voteBot/commit/19d3551b645a6650d78e1c997b8502b634379bc8) by pomodori92: rewrote the README with pinned requirements, reproducible installation, environment configuration, all launchers, sandbox guidance, verification commands, storage notes, and rollback instructions.

## [1.3.6] - 2026-08-29

- Commit [`212a87e`](https://github.com/pomodori92/voteBot/commit/212a87e395837d14b2c0cba2238e757d61a6a261) by pomodori92: added the PowerShell 7 launcher with configurable iteration count and delay, script-relative execution, strict error handling, and propagated Node exit codes.

## [1.3.5] - 2026-08-29

- Commit [`8e6e091`](https://github.com/pomodori92/voteBot/commit/8e6e091cf2361e773c9ed75a8a3813d34a11f4ea) by pomodori92: updated the Windows batch launcher to use a script-relative path, print the correct iteration number, stop on failure, and return meaningful exit codes.

## [1.3.4] - 2026-08-29

- Commit [`e3f63df`](https://github.com/pomodori92/voteBot/commit/e3f63df32c15744ba1ee7ddba8779052a00f332b) by pomodori92: updated the Bash launcher to resolve `voteBot.js` relative to itself, stop on failed iterations, and use a reliable counter.

## [1.3.3] - 2026-08-29

- Commit [`fb1788f`](https://github.com/pomodori92/voteBot/commit/fb1788fbdd2bf7f024b05b32a50671c851e9ff01) by pomodori92: added unit tests, a local Chrome smoke test, and npm settings for exact dependency saves without funding messages.

## [1.3.2] - 2026-08-29

- Commit [`a5fefb5`](https://github.com/pomodori92/voteBot/commit/a5fefb5047c71764dead5a900dd2904a4828799e) by pomodori92: added `package.json`, the npm lockfile, Node.js 24.20.0 runtime pins, npm 12.0.2 metadata, and Puppeteer 25.9.0.

## [1.3.1] - 2026-08-29

- Commit [`a6141f4`](https://github.com/pomodori92/voteBot/commit/a6141f47c13e0f36714954eb4bda26f0e5ca7692) by pomodori92: added Git line-ending rules and ignore rules for dependencies, environment files, and package-manager logs.

## [1.3.0] - 2026-08-29

- Commit [`52015f7`](https://github.com/pomodori92/voteBot/commit/52015f7427067b4346b232229c802d88338f70cb) by pomodori92: added Windows/Linux CI checks, a Linux browser smoke test, pinned GitHub Actions, and weekly Dependabot updates for npm and GitHub Actions.

## [1.2.7] - 2023-10-27

- Merge commit [`368f3e9`](https://github.com/pomodori92/voteBot/commit/368f3e97a11d84dbb8a015c8ee29be7a8a854b23) by pomodori92: merged pull request #3 from Cloud9Developer, bringing environment-based poll configuration, Unix support, and sandbox launch arguments into the main history.

## [1.2.6] - 2023-10-27

- Commit [`e1483f4`](https://github.com/pomodori92/voteBot/commit/e1483f486148fab752d8fcb5d528578c69b429ee) by pomodori92: reorganized and expanded the README with npm, Yarn, and pnpm installation options, OS-specific launch instructions, system requirements, warnings, contributor credit, and issue links.

## [1.2.5] - 2023-02-21

- Commit [`eb60dbd`](https://github.com/pomodori92/voteBot/commit/eb60dbd4d12cf3dcaf8a91dc110cc86d08509225) by Cloud9_Development: changed Puppeteer to its default headless launch and added `--no-sandbox` and `--disable-setuid-sandbox` arguments.

## [1.2.4] - 2023-02-21

- Commit [`91f5bf5`](https://github.com/pomodori92/voteBot/commit/91f5bf54373596fbbe1a356d2780f514152a802a) by Cloud9_Development: changed the Bash launcher to locate `voteBot.js` under the user's home directory and restored the final newline.

## [1.2.3] - 2023-02-21

- Commit [`af0429c`](https://github.com/pomodori92/voteBot/commit/af0429cc0fa6a9371c02fe50e24a4f544296ec65) by Christopher: added an iteration counter and vote-number output to the Bash launcher.

## [1.2.2] - 2023-02-21

- Commit [`8aaa824`](https://github.com/pomodori92/voteBot/commit/8aaa8249a8a5032dccc29618f24703f598d47844) by Christopher: added the first Bash launcher for continuous Unix execution.

## [1.2.1] - 2023-02-21

- Commit [`599c9c4`](https://github.com/pomodori92/voteBot/commit/599c9c401baf55744f340e83fd55a6b3ba396832) by Cloud9_Development: replaced hard-coded poll and answer values with the `POLLURL` and `ANSWERID` environment variables.

## [1.2.0] - 2022-12-05

- Commit [`23cc4d8`](https://github.com/pomodori92/voteBot/commit/23cc4d80902cb7799890a09461c6a3282b46d2de) by pomodori92: revised contributor credit and standardized punctuation in the README requirements.

## [1.1.19] - 2022-12-05

- Merge commit [`1233e08`](https://github.com/pomodori92/voteBot/commit/1233e082afcaef9c950913f6d4a9145939e53fe6) by pomodori92: merged pull request #1 containing Moderatuh's code, launcher, and documentation updates.

## [1.1.18] - 2022-02-25

- Commit [`b4890bb`](https://github.com/pomodori92/voteBot/commit/b4890bbd5275eb03a9af9c76b1c0a8b80260db84) by Moderatuh: revised credits and project background, removed poll-specific defaults from the instructions, simplified bug-report guidance, and added a warning about Puppeteer storage use.

## [1.1.17] - 2022-02-23

- Commit [`ae1aa23`](https://github.com/pomodori92/voteBot/commit/ae1aa23cdff7c9212034632248768382c587e44d) by Moderatuh: added credits, hardware requirements, and a performance benchmark to the README.

## [1.1.16] - 2022-02-23

- Commit [`cab3b98`](https://github.com/pomodori92/voteBot/commit/cab3b988ae69d023a1ac2c4678af91f0858b69f8) by Moderatuh: increased the Windows batch loop limit from 10,000 to 1,000,000.

## [1.1.15] - 2022-02-23

- Commit [`fe64670`](https://github.com/pomodori92/voteBot/commit/fe6467080980140ff740d2f77b5d1a45ab44f079) by Moderatuh: expanded bug-report guidance to include pull requests.

## [1.1.14] - 2022-02-23

- Commit [`6fa5b43`](https://github.com/pomodori92/voteBot/commit/6fa5b43d52c8c179d7044ba87300b4360b106e79) by Moderatuh: linked repeat-run guidance to the IP-block workaround and added direct bug-report contact information.

## [1.1.13] - 2022-02-23

- Commit [`e352b44`](https://github.com/pomodori92/voteBot/commit/e352b4458123a1bd5313adc53990a6f5b14dd150) by Moderatuh: clarified that both poll URL and answer ID must be configured in `voteBot.js`.

## [1.1.12] - 2022-02-23

- Commit [`96e0732`](https://github.com/pomodori92/voteBot/commit/96e073272f409f3a8d846ec37da96cef3d53a941) by Moderatuh: renamed the completion log message to identify each finished iteration.

## [1.1.11] - 2022-02-23

- Commit [`3c77167`](https://github.com/pomodori92/voteBot/commit/3c7716723200a8c9f82dcb75a81b9544c9dd7d78) by Moderatuh: added per-iteration output to the Windows batch launcher.

## [1.1.10] - 2022-02-23

- Commit [`54b1ac0`](https://github.com/pomodori92/voteBot/commit/54b1ac00f39cdcc19e95893185ccb8697c8fc54d) by Moderatuh: increased the browser viewport from 1280×720 to 1920×1080.

## [1.1.9] - 2022-02-23

- Commit [`0f1b8f2`](https://github.com/pomodori92/voteBot/commit/0f1b8f2f0186b129133ee5460162d84099bc3fc7) by Moderatuh: simplified the Windows batch loop, removed unused counter state, and reduced the delay between runs to one second.

## [1.1.8] - 2022-02-23

- Commit [`22ae54e`](https://github.com/pomodori92/voteBot/commit/22ae54e3c9ad23df8a10b715c2f57767aadc6a45) by Moderatuh: expanded setup and configuration instructions, documented repeated execution, and added notes about IP blocking and pull requests.

## [1.1.7] - 2022-02-23

- Commit [`cefde20`](https://github.com/pomodori92/voteBot/commit/cefde2006a27c004a2be041a63f5476eaab77c9b) by Moderatuh: updated the README's project-purpose note.

## [1.1.6] - 2022-02-22

- Commit [`99a9952`](https://github.com/pomodori92/voteBot/commit/99a99522386477b354322f1e2b0d7f78e659605b) by Moderatuh: added a project-purpose note to the README.

## [1.1.5] - 2022-02-22

- Commit [`2a0793f`](https://github.com/pomodori92/voteBot/commit/2a0793fe748c8ff91d5ee21b7bc8a75db24da4cb) by Moderatuh: simplified the Windows batch launcher, removed special pause handling, and increased its loop limit from 100 to 10,000.

## [1.1.4] - 2022-02-22

- Commit [`ad0d3a3`](https://github.com/pomodori92/voteBot/commit/ad0d3a3cc9d0c9a082be82c58b20e304b16f6ebd) by Moderatuh: removed the batch launcher's final prompt and obsolete counter subroutine definitions.

## [1.1.3] - 2022-02-22

- Commit [`706b32c`](https://github.com/pomodori92/voteBot/commit/706b32c2be660551701f6f01485c1bcf0f115299) by Moderatuh: reduced the batch launcher's periodic pause from 180 seconds to five seconds.

## [1.1.2] - 2022-02-22

- Commit [`e9499da`](https://github.com/pomodori92/voteBot/commit/e9499daea5db30967f6e82aa867bce86adcdc7a2) by Moderatuh: corrected README spelling, spacing, and basic installation wording.

## [1.1.1] - 2022-02-22

- Commit [`75964b6`](https://github.com/pomodori92/voteBot/commit/75964b639c05b3731a9ee21d7131350965336038) by Moderatuh: added original-author credit and noted the updated Poll.fm HTML paths.

## [1.1.0] - 2022-02-22

- Commit [`3ecbdd4`](https://github.com/pomodori92/voteBot/commit/3ecbdd40c2dcc30f9dcb529f9fd92ca7c4cf59cd) by Moderatuh: updated the sample poll and answer IDs, replaced the obsolete vote selector, and delayed browser shutdown by 500 milliseconds.

## [1.0] - 2020-03-01

- Commit [`5eb1995`](https://github.com/pomodori92/voteBot/commit/5eb19959da0afc1dd294da3b380b059b15c86eca) by pomodori92: documented continuous voting with the Windows launcher and single-run execution through `voteBot.js`.

## [0.6] - 2020-03-01

- Commit [`e1a9fbc`](https://github.com/pomodori92/voteBot/commit/e1a9fbc44020a46037c51fc44203ec4e5cdc9aae) by pomodori92: removed the obsolete root-level `voteBot.js` after the application had been moved into the `voteBot` directory.

## [0.5] - 2020-03-01

- Commit [`9bae9ec`](https://github.com/pomodori92/voteBot/commit/9bae9ec7e66477ca07ef7e1928056d2dc5492061) by pomodori92: removed the obsolete root-level Windows launcher after the application had been moved into the `voteBot` directory.

## [0.4] - 2020-03-01

- Commit [`3446ef5`](https://github.com/pomodori92/voteBot/commit/3446ef5b746a1383b0e7c00633f715ffd5b9c779) by pomodori92: added `voteBot.js` and `runVoteBot.bat` under the dedicated `voteBot` directory.

## [0.3] - 2020-03-01

- Commit [`743aeec`](https://github.com/pomodori92/voteBot/commit/743aaeec8e084f6e6aa13c346b9711928ca5e87a) by pomodori92: expanded the README with Node.js and Puppeteer installation, poll configuration, and Windows launch instructions.

## [0.2] - 2020-03-01

- Commit [`75ae9ce`](https://github.com/pomodori92/voteBot/commit/75ae9ceaf36ae323a87654e311c8d09ba8140732) by pomodori92: added the first Puppeteer voting script and Windows repeat launcher at the repository root.

## [0.1] - 2020-03-01

- Commit [`a2397d6`](https://github.com/pomodori92/voteBot/commit/a2397d6dd5dfb0ea9dd52fd616b1f70fcbe791d5) by pomodori92: initialized the repository with the project README and GNU GPL v2 license.

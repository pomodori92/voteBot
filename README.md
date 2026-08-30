# voteBot

voteBot is a small Node.js application that uses Puppeteer to submit a selected answer on a Poll.fm poll. It does not use jQuery.

Use the project only where automated voting is permitted by the site's terms and applicable law. Automated voting can lead to account or IP restrictions.

## Requirements

- Node.js 24.20.0 LTS, pinned in `.nvmrc` and `.node-version`.
- npm 12.0.2, pinned by the `packageManager` field in `package.json`.
- A supported Windows, macOS, or Linux environment for Chrome for Testing.

Puppeteer 25.9.0 supports Node.js 22.12.0 and newer. Node.js 24.20.0 is the tested project runtime.

## Installation

Clone the repository, select the pinned Node.js version with your version manager, and install the locked dependency graph:

```sh
npm ci
```

Puppeteer normally downloads its compatible Chrome for Testing build during installation. If your package manager blocks installation scripts, install the browser explicitly:

```sh
npx puppeteer browsers install chrome
```

Do not use `npm install puppeteer` for routine setup. That command changes the pinned dependency and lockfile.

## Configuration

`POLLURL` and `ANSWERID` are required. `ANSWERID` is the poll input element ID, such as `PDI_answer50714388`.

PowerShell:

```powershell
$env:POLLURL = 'https://poll.fm/11051204'
$env:ANSWERID = 'PDI_answer50714388'
npm start
```

Windows Command Prompt:

```bat
set POLLURL=https://poll.fm/11051204
set ANSWERID=PDI_answer50714388
npm start
```

Bash:

```sh
export POLLURL='https://poll.fm/11051204'
export ANSWERID='PDI_answer50714388'
npm start
```

The application validates both values before launching Chrome.

## Running repeated iterations

The launch scripts resolve `voteBot.js` relative to their own location, so they work regardless of the current directory.

Windows Command Prompt:

```bat
voteBot\runVoteBot.bat
```

PowerShell 7:

```powershell
pwsh -File .\voteBot\runVoteBot.ps1
```

The PowerShell launcher accepts optional iteration and delay settings:

```powershell
pwsh -File .\voteBot\runVoteBot.ps1 -MaxIterations 100 -DelaySeconds 2
```

Linux or macOS with Bash:

```sh
./voteBot/runVoteBot.sh
```

The Windows batch and PowerShell launchers stop after 1,000,000 iterations by default. The Bash script continues until interrupted. All launchers stop immediately when an iteration fails.

## Browser sandbox

Chrome's sandbox remains enabled by default.

Only in an isolated Linux container that cannot run Chrome otherwise, explicitly opt out before starting the bot:

```sh
export PUPPETEER_NO_SANDBOX=1
npm start
```

Disabling Chrome's sandbox weakens process isolation. Never use this setting for untrusted pages or on a general-purpose workstation.

## Storage

Puppeteer stores downloaded browser binaries in its shared user cache. Each run also creates a temporary browser profile. voteBot now awaits `browser.close()` on both success and failure, reducing abandoned processes and profiles. Abrupt process termination can still leave temporary data behind.

## Verification

Run static syntax validation, unit tests, a local browser smoke test, and dependency audit:

```sh
npm run check
npm test
npm run test:smoke
npm run audit
```

The smoke test opens a local `data:` page. It never visits Poll.fm or submits a vote.

The smoke test honors `PUPPETEER_NO_SANDBOX` for restricted CI or container environments, using the same explicit opt-in as the application.

GitHub Actions runs checks on Windows and Linux and performs the browser smoke test on Linux. Dependabot checks npm and GitHub Actions dependencies weekly.

## Updating and rollback

Update dependencies through a reviewed pull request and keep `package.json` and `package-lock.json` together. After any update, run every verification command above.

To roll back a dependency update, restore the previous `package.json` and `package-lock.json` together, then run `npm ci` and the verification commands. No application data migration is involved.

## Contributors

Special thanks to:

- [@Moderatuh](https://github.com/Moderatuh),
- [@Cloud9Developer](https://github.com/Cloud9Developer).

## Issues and contributions

- Report a bug through [GitHub Issues](https://github.com/pomodori92/voteBot/issues).
- Submit changes through [pull requests](https://github.com/pomodori92/voteBot/pulls).

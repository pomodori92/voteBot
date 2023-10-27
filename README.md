# voteBot

VoteBot is a JavaScript and jQuery-based bot designed for automated voting on [Poll.fm/](https://poll.fm/). It utilizes Puppeteer for its functionality.


## How to Use

1. [Download and install Node.js](https://nodejs.org/).

2. Install [Puppeteer](https://pptr.dev/) within the bot's directory. You can do this by opening File Explorer to the bot's location, clicking "File," opening Powershell or Terminal session, and then running the command:

    ```npm i puppeteer```
   
    or using **yarn**:
   
    ```yarn add puppeteer```
    
    or using **pnpm**:
   
    ```pnpm i puppeteer```

3. Open **voteBot.js** file.

4. Modify the **pollURL** and **answerID** to your desired values. You can find these values in the browser **Inspect element** menu of the poll page.

5. Save your changes.

6. Based on your operating system you must execute:

   ```runVoteBot.bat``` on Windows,

   ```runVoteBot.sh``` on Linux.

    6.1. As an alternative, if you want to vote just once you can execute:

     ```node voteBot\voteBot.js```


## System Requirements

1. Installation of Puppeteer in the specified directory.

2. A minimum of 4GB of RAM.

3. Ideally, a dedicated GPU is recommended to alleviate CPU workload.

4. Node.js should be installed on your system.

5. A modern CPU from the 21st century is required.


## Warnings

- There's a significant drawback to using this program: it consumes a substantial amount of storage space because Puppeteer generates a new Chromium profile for each vote. To manage this storage issue, you can manually delete the folders labeled "puppeteer" in your system's temporary folder. In my experience, it accumulated approximately 100 GB of data in just 12 hours.

- Using automated voting scripts in a manner that violates the terms of service or legality of a website may have consequences. Be sure to use such tools responsibly and within the boundaries of the website's policies and applicable laws.

- My observation is that performance notably declines when running about 14 instances simultaneously. Beyond this threshold, adding more instances becomes impractical.

- For context, I'm working on a system equipped with:
  - Intel i7 7700x,
  - 16 GB of RAM,
  - Nvidia GeForce GTX 1050.

- In my experience, the website may block your IP address from voting after a certain number of votes from the same IP. To overcome this, it's recommended to set up a macro to reconnect to a VPN server approximately every minute (even reconnecting to the same server works).


## Contributors

- [Moderatuh](https://github.com/Moderatuh), who has made valuable fixes and updates to all files, including this Readme file. Your contributions are greatly appreciated.


## Issues and Requests

If you encounter any bugs, please report them by creating a [new issue](https://github.com/pomodori92/voteBot/issues).

Feel free to submit a [pull requests](https://github.com/pomodori92/voteBot/pulls). They are highly encouraged!

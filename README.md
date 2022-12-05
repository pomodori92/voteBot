# voteBot
VoteBot is a bot to automatically vote on https://poll.fm/.

It's written in Javascript and JQuery with Puppeteer.

WARNING: This program takes up an ungodly amount of storage space due to puppeteer creating a new Chromium profile for each vote. In order to clean the files created, go to your system temp folder and delete every folder that says puppeteer. It took around 12 hours to amass 100 GB of data for me.


# How to use

1. Download and install Node.js, which you can get at https://nodejs.org/.

2. Download and install Puppeteer inside the file directory. This can be done by opening File Explorer to the directory that the bot is located in, clicking File, clicking Open Windows Powershell, then running the command ```npm install puppeteer```

3. Open voteBot.js with Notepad.

4. Change the pollURL and answerID in the .js file to the desired values, which can be found in the inspect element menu of the poll page.

5. Save it and close the file.

6. Launch runVoteBot.bat and watch voteBot vote for the desired choice infinite times, however it will stop counting the votes after about 20 votes. Refer to instruction #8 to circumvent this.

7. Alternatively, you can launch voteBot.js to vote one time.

8. From personal experience, the website will block your ip from voting after a certain amount of votes from the same ip, so the best way to circumvent this from my experience is to set up a macro to reconnect to a VPN server every minute or so (it works even if you reconnect to the same server). 

9. Report any bugs by making a pull request.


# Credits

A big thanks to Moderatuh, who made some fixes and updates to all files.


# Requirements

1. Puppeteer installed into the directory.

2. At least 4GB of RAM.

3. Preferably a dedicated GPU to reduce load on CPU.

4. Node.js installed into your system.

5. A cpu from the 21st century.

(As a benchmark, I'm running with a 5900x, 16gb RAM, RX 6600, and can only run about 14 instances at once before the performance gets so bad it's not worth opening any more.)

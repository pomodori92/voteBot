# voteBot
VoteBot is a bot to automatically vote on https://poll.fm/.

Originally created by pomodori92, big thanks to them. The original program was outdated and did not work anymore, so I updated some html paths and made it so that it doesn't stop after a measly 100 votes.

Created for the sole purpose of beating Tanner and Chris, much love <3.

It's written in Javascript and JQuery with Puppeteer.


# How to use

1. Download and install Node.js, which you can get at https://nodejs.org/.

2. Download and install Puppeteer inside the file directory. This can be done by opening File Explorer to the directory that the bot is located in, clicking File, clicking Open Windows Powershell, then running the command ```npm install puppeteer```

3. Open voteBot.js with Notepad.

4. Change the pollURL and answerID in the .js file to the desired values, which can be found in the inspect element menu of the poll page. (Default votes for the best Runner of the Week)

5. Save it and close the file.

6. Launch runVoteBot.bat and watch voteBot vote for the desired choice infinite times, however it will stop counting the votes after about 20 votes. Refer to instruction #8 to circumvent this.

7. Alternatively, you can launch voteBot.js to vote one time.

8. From personal experience, the website will block your ip from voting after a certain amount of votes from the same ip, so the best way to circumvent this from my experience is to set up a macro to reconnect to a VPN server every minute or so (it works even if you reconnect to the same server). 

9. Report any bugs to me directly at my discord, Moderatuh#3154

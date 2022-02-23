@echo off

SET count=1
FOR /L %%G IN (0,1,10000) DO (

node voteBot.js


timeout 2

)

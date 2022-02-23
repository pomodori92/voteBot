@echo off
FOR /L %%G IN (0,1,10000) DO (
  node voteBot.js
  timeout 1
)

@echo off
FOR /L %%G IN (0,1,1000000) DO (
  node voteBot.js
  ECHO %%y
  timeout 1
)

@echo off

SET count=1
FOR /L %%G IN (0,1,100) DO (

call :subroutine "%%G"
node voteBot.js

IF /I "%%G" EQU "23" (

call :sub "%%G"

timeout 5
)

timeout 2

)

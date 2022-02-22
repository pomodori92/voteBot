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
set /p DUMMY=Press enter to continue.
GOTO :eof

:subroutine
	echo %count%
	set /a count+=1
GOTO :eof

:sub
	echo %count%
	set /a count=1
GOTO :eof

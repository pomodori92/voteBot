@echo off
setlocal
set "SCRIPT_DIR=%~dp0"

FOR /L %%G IN (1,1,1000000) DO (
  node "%SCRIPT_DIR%voteBot.js"
  if errorlevel 1 (
    set "FAILED_ITERATION=%%G"
    goto :failure
  )
  echo Vote #: %%G
  timeout /t 1 /nobreak >nul
)

goto :success

:failure
echo Iteration %FAILED_ITERATION% failed. 1>&2
endlocal & exit /b 1

:success
endlocal & exit /b 0

#Requires -Version 7.0

[CmdletBinding()]
param(
    [ValidateRange(1, 2147483647)]
    [int]$MaxIterations = 1000000,

    [ValidateRange(0, 2147483647)]
    [int]$DelaySeconds = 1
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

$voteBotPath = Join-Path -Path $PSScriptRoot -ChildPath 'voteBot.js'

for ($iteration = 1; $iteration -le $MaxIterations; $iteration++) {
    & node $voteBotPath
    $nodeExitCode = $LASTEXITCODE

    if ($nodeExitCode -ne 0) {
        Write-Error "Iteration $iteration failed with exit code $nodeExitCode."
        exit $nodeExitCode
    }

    Write-Output "Vote #: $iteration"

    if ($iteration -lt $MaxIterations) {
        Start-Sleep -Seconds $DelaySeconds
    }
}

exit 0

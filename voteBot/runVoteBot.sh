#!/bin/bash

COUNT=0
while true; do
    node ${HOME}/voteBot/voteBot/voteBot.js
    COUNT=$((${COUNT}+1))
    echo "Vote #: ${COUNT}"
    sleep 1
done

#!/bin/bash

set -u

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
COUNT=0

while true; do
    if ! node "${SCRIPT_DIR}/voteBot.js"; then
        echo "Iteration failed." >&2
        exit 1
    fi

    COUNT=$((COUNT + 1))
    echo "Vote #: ${COUNT}"
    sleep 1
done

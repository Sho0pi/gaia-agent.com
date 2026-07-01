#!/bin/sh
# gaia installer (bootstrap)
#
# This is a thin wrapper that always fetches and runs the latest installer from
# the source repository, so `curl -fsSL https://gaia-agent.com/install.sh | sh`
# never drifts from source.
#
# Source (read this before you run it):
#   https://github.com/Sho0pi/gaia/blob/master/scripts/install.sh
#
curl -fsSL https://raw.githubusercontent.com/Sho0pi/gaia/master/scripts/install.sh | sh

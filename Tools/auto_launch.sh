#!/bin/bash

BASE_DIR=`pwd`
PLIST_BUDDY="/usr/libexec/PlistBuddy"
LAUNCH_AGENT_PLIST="com.huoji.kanzhan.plist"
LOCAL_SERVER_SCRIPT="$BASE_DIR/local_server.sh"

echo '==> auto start KanZhan'

$PLIST_BUDDY -c "Delete :ProgramArguments" "$LAUNCH_AGENT_PLIST" 
$PLIST_BUDDY -c "Add :ProgramArguments array" "$LAUNCH_AGENT_PLIST" 
$PLIST_BUDDY -c "Add :ProgramArguments: string $LOCAL_SERVER_SCRIPT" "$LAUNCH_AGENT_PLIST" 

sudo rm /Library/LaunchAgents/$LAUNCH_AGENT_PLIST
sudo cp $LAUNCH_AGENT_PLIST /Library/LaunchAgents
launchctl unload com.huoji.kanzhan.plist
launchctl load com.huoji.kanzhan.plist

echo '==> done'
echo '==> access http://127.0.0.1:8000/index.html in Chrome to have a try'

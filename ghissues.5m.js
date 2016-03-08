#!/usr/bin/env /usr/local/bin/node

// <bitbar.title>Github Issues</bitbar.title>
// <bitbar.version>v1.0</bitbar.version>
// <bitbar.author>Tom Genoni</bitbar.author>
// <bitbar.author.github>tomgenoni</bitbar.author.github>
// <bitbar.desc>List issues</bitbar.desc>
// <bitbar.dependencies>node.js</bitbar.dependencies>

$ORG = "optimizely";
$REPOSITORY = "oui";
$BITBAR_TITLE = "oui";
$GITHUB_ACCESS_TOKEN = "";

var lib = require('./ghissues/lib.js');

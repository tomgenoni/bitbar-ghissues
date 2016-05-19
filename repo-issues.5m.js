#!/usr/bin/env /usr/local/bin/node

// <bitbar.title>Github Repository Issues</bitbar.title>
// <bitbar.version>v1.0</bitbar.version>
// <bitbar.author>Tom Genoni</bitbar.author>
// <bitbar.desc>Lists all pull requests and issues, up to 100 total.</bitbar.desc>
// <bitbar.author.github>tomgenoni</bitbar.author.github>
// <bitbar.dependencies>node.js</bitbar.dependencies>

$HOSTNAME = ""; // For enterprise Github accounts, e.g., github.tinderforcats.com/api/v3
$ORG = "matryer";
$REPOSITORY = "bitbar";
$BITBAR_TITLE = "bitbar";
$GITHUB_ACCESS_TOKEN = "";

var lib = require('./lib/lib.js');

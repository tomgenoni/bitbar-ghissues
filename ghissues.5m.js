#!/usr/bin/env /usr/local/bin/node

// <bitbar.title>Github Issues</bitbar.title>
// <bitbar.version>v1.0</bitbar.version>
// <bitbar.author>Tom Genoni</bitbar.author>
// <bitbar.author.github>tomgenoni</bitbar.author.github>
// <bitbar.desc>List issues</bitbar.desc>
// <bitbar.dependencies>node.js</bitbar.dependencies>
// <bitbar.image></bitbar.image>

// https://api.github.com/repos/tomgenoni/bitbar-ghissues/issues?access_token=


var https = require('https');

var options = {
  host: 'api.github.com',
  headers: {'user-agent': 'Mozilla/5.0'},
  path: '/repos/tomgenoni/bitbar-ghissues/issues?access_token='
};


function allIssues(body) {
  
  var issues = body.map(function(issues){
    if ( issues.pull_request ) {
      return ['#', issues.number, ' ', issues.title, ' | href=', issues.html_url,'\n'].join('');
    }
  }).join('\n');
  
  var prs = body.map(function(issues){
    if ( !issues.pull_request ) {
      return ['#', issues.number, ' ', issues.title, ' | href=', issues.html_url,'\n'].join('');
    }
  }).join('\n');
  
  return [issues, prs];
}

function issueCount(body) {
  var p = 0;
  var output = body.map(function(issues){
    if ( issues.pull_request ) {
      p++;
    }
  });
  var i = body.length - output;
  return [i, p];
}

function handleResponse(body) {
  var countPRs = issueCount(body)[1];
  var countIssues = issueCount(body)[0];
  var foo = allIssues(body)[1];
}

https.get(options, function(res) {
  var body = '';
  res.on('data', function(data) {
    body += data;
  });
  res.on('end', function() {
    handleResponse(JSON.parse(body));
  });
});

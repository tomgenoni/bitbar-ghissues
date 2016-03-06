#!/usr/bin/env /usr/local/bin/node

// <bitbar.title>Github Issues</bitbar.title>
// <bitbar.version>v1.0</bitbar.version>
// <bitbar.author>Tom Genoni</bitbar.author>
// <bitbar.author.github>tomgenoni</bitbar.author.github>
// <bitbar.desc>List issues</bitbar.desc>
// <bitbar.dependencies>node.js</bitbar.dependencies>
// <bitbar.image></bitbar.image>

// https://api.github.com/repos/optimizely/oui/issues?access_token=3e9316e63711cf14f010e4865039850a2a658b95


var https = require('https');

var options = {
  host: 'api.github.com',
  headers: {'user-agent': 'Mozilla/5.0'},
  path: '/repos/optimizely/oui/issues?access_token=3e9316e63711cf14f010e4865039850a2a658b95'
};


function fixed(body) {

  var output = body.map(function(issues){
    var terms = [
      'close',
      'closes',
      'closed',
      'fix',
      'fixes',
      'fixed',
      'resolve',
      'resolves',
      'resolved'
    ];
    
    if ( issues.pull_request ) {
      var comments = issues.body;
      
      terms.forEach(function(term) {
        var regex = new RegExp(term + " #([0-9]+)", "gi");
        var issueNum = comments.match(regex);
        if (issueNum != null) {
          console.log(issueNum);
        }
      });
    }
  });
}

function outputPRs(body) {
  var output = body.map(function(issues){
    if ( issues.pull_request ) {
      return ['#', issues.number, ' ', issues.title, ' | href=', issues.html_url,'\n'].join('');
    }
  }).join('\n');
  return output;
}

function issueCount(body) {
  var p = 0;
  body.map(function(issues){
    if ( issues.pull_request ) {
      p++;
    }
  });
  var i = body.length - p;
  return [i, p];
}

function handleResponse(body) {
  var countPRs = issueCount(body)[1];
  var countIssues = issueCount(body)[0];
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

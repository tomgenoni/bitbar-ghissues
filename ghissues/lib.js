module.exports = {
  foo: function () {
    return $bar;
  },
  bar: function () {
    // whatever
  }
};


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

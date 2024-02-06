var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
  var parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === '/api/currenttime') {
    // Get the current time
    var currentTime = new Date();

    // Prepare the JSON response
    var response = {
      "year": currentTime.getFullYear(),
      "month": currentTime.getMonth() + 1, // Months are zero-based
      "date": currentTime.getDate(),
      "hour": currentTime.getHours(),
      "minute": currentTime.getMinutes()
    };

    // Send the JSON response
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response));
  } else {
    // Handle 404 for other endpoints
    res.writeHead(404);
    res.end();
  }
});

// Listen on port 8000
server.listen(8000, function () {
  console.log('Server listening on port 8000');
});


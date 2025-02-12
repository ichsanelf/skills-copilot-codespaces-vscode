// Create web server
// Create a web server that listens on port 8080. It should respond to a GET request to the path /comments with an array of comments. Each comment should have a message key and a date key. The message should be a string, and the date should be a Date object.

// For example, if you visit http://localhost:8080/comments in a web browser, you should see this JSON response:

// [
//   {
//     "message": "Hello there!",
//     "date": "2021-09-15T16:00:00.000Z"
//   },
//   {
//     "message": "How are you today?",
//     "date": "2021-09-15T16:00:00.000Z"
//   }
// ]
// You can use the following code to create the web server:

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/comments' && req.method === 'GET') {
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });
    const comments = [
      {
        message: 'Hello there!',
        date: new Date(),
      },
      {
        message: 'How are you today?',
        date: new Date(),
      },
    ];
    res.end(JSON.stringify(comments));
  } else {
    res.writeHead(404, {
      'Content-Type': 'text/plain',
    });
    res.end('Not Found');
  }
});

server.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});
// This code creates a web server that listens on port 8080. When a GET request is made to the path /comments, it responds with an array of comments in JSON format. Each comment has a message key with a string value and a date key with a Date object value.

// You can run this code in Node.js and visit http://localhost:8080/comments in a web browser to see the JSON response. You can customize the comments array to include different messages and dates.

// To run the code, save it to a file (e.g., comments.js) and run it with Node.js:

// node comments.js
// The server will start running, and you can visit http://localhost:8080/comments in a web browser to see the comments. Press Ctrl+C
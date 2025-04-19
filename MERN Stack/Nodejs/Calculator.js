const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body>');
    res.write('<p>Welcome to home page, click below link to move on calculator page</p>');
    res.write('<a href="/cal">Calculator</a>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }

  if (req.url === '/cal') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body>');
    res.write('<p>Welcome to Calculator Page</p>');
    res.write('<form action="/submit" method="POST">');
    res.write('Enter first number: <input type="number" name="num1"><br>');
    res.write('Enter second number: <input type="number" name="num2"><br>');
    res.write('<button type="submit">Submit</button>');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }

  if (req.url === '/submit' && req.method === 'POST') {
    const body = [];
    req.on('data', chunk => {
      body.push(chunk);
    });

    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody.num1);
      console.log("Form data received:", parsedBody); // raw data like num1=5&num2=3

      res.setHeader('Content-Type', 'text/html');
      res.write('<html>');
      res.write('<body>');
      res.write('<p>Data received. Check console!</p>');
      res.write('<a href="/">Go Back</a>');
      res.write('</body>');
      res.write('</html>');
      return res.end();
    });
  }
});

server.listen(3000, () => {
  console.log("Server is listening at 3000");
});

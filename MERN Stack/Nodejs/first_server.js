const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');

  if (req.url === '/') {
    res.write("<html>");
    res.write("<head><title>Home Page</title></head>");
    res.write("<body>");
    res.write('<nav><a href="/Men">MEN</a> | <a href="/Women">WOMEN</a></nav>');
    res.write('<p>Welcome to the Home Page</p>');
    res.write("</body>");
    res.write("</html>");
    res.end();
  } else if (req.url === '/Men') {
    res.write("<html>");
    res.write("<head><title>Men Page</title></head>");
    res.write("<body><p>Welcome to MEN page</p></body>");
    res.write("</html>");
    res.end();
  } else if (req.url === '/Women') {
    res.write("<html>");
    res.write("<head><title>Women Page</title></head>");
    res.write("<body><p>Welcome to WOMEN page</p></body>");
    res.write("</html>");
    res.end();
  } else {
    res.write("<html>");
    res.write("<head><title>Not Found</title></head>");
    res.write("<body><p>404 Page Not Found</p></body>");
    res.write("</html>");
    res.end();
  }
});

server.listen(3000, () => {
  console.log("Server running on PORT 3000");
});

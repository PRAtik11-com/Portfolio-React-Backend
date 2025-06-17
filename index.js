const jsonServer = require("json-server");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json")); 
const middlewares = jsonServer.defaults();

// Define the port
const port = process.env.PORT || 3001;

// Apply default middlewares: logger, static, cors, etc.
server.use(middlewares);



// Use JSON Server router
server.use(router);

// Start the server
server.listen(port, () => {
  console.log(`✅ JSON Server is running at http://localhost:${port}`);
});

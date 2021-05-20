const Koa = require("koa");
const app = new Koa();

// adding small middleware that will log requests
const logger = require("koa-logger");
app.use(logger());

// adding middleware that parses body of the request
const bodyParser = require("koa-bodyparser");
app.use(bodyParser());

// adding routes
const healthRouter = require("./lib/routes/health-router");
const notesRouter = require("./lib/routes/notes-router");
app.use(healthRouter.routes());
app.use(notesRouter.routes());

// listening to localhost:3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log("🚀 server has started");
});

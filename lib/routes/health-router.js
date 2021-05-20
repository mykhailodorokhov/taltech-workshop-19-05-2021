const Router = require("@koa/router");
const router = new Router();

// health controller helps us to understand whether a service
// is functional and ready to accept incoming requests.

router.get("/health", (ctx) => {
  ctx.body = { success: "True", message: "hell yeah, I am alive!" };
});

module.exports = router;

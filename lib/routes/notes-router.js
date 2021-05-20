const Router = require("@koa/router");
const router = new Router();

const notesController = require("./controllers/notes-controller");

router.get("/api/notes", notesController.getAll);
router.get("/api/notes/:id", notesController.getById);
router.post("/api/notes", notesController.create);
router.delete("/api/notes/:id", notesController.remove);

module.exports = router;

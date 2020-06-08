import * as express from "express";
import * as cors from "cors";
import * as dbController from "./dbController";

const app = express();
app.use(cors());
app.use(express.json());
app.set("port", process.env.PORT || 4000);

var router = express.Router();
router.get("/posts", dbController.allPosts);
router.get("/communities", dbController.allCommunities);

app.use("/api/kiki", router);

const server = app.listen(app.get("port"), () => {
    console.log("running on http://localhost:%d", app.get("port"));
});
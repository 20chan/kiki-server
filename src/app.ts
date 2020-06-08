import * as express from "express";
import * as dbController from "./dbController";



const app = express();
app.use(express.json());
app.set("port", process.env.PORT || 4000);


app.get("/", (req, resp) => {
    resp.send('Hello, world!');
});

app.get("/posts", dbController.allPosts);
app.get("/communities", dbController.allCommunities);

const server = app.listen(app.get("port"), () => {
    console.log("running on http://localhost:%d", app.get("port"));
});
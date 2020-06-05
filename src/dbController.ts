import { Request, Response } from "express";
import { inspect } from 'util';
import db from "./db";

export let allPosts = (req: Request, resp: Response) => {
    let posts = db.find((err, posts) => {
        if (err) {
            resp.send("error");
        } else {
            console.log(inspect(posts));
            resp.send(posts);
        }
    });
};
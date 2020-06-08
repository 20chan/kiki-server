import { Request, Response } from "express";
import { inspect } from 'util';
import { Posts, Communities } from "./db";

export let allPosts = (req: Request, resp: Response) => {
    Posts.find({}).toArray((err, docs) => {
        if (err) {
            console.log(err.message);
        } else {
            resp.send(docs);
        }
    })
};

export let allCommunities = (req: Request, resp: Response) => {
    Communities.find({}).toArray((err, docs) => {
        if (err) {
            console.log(err.message);
        } else {
            resp.send(docs);
        }
    })
};
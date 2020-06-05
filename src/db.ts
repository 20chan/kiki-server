import * as mongoose from "mongoose";

import ObjectId = mongoose.Schema.Types.ObjectId;

mongoose.connect("mongodb://127.0.0.1:27017/KiKiDB", (err) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log("mongodb connected");
    }
});

class Comment {
    Deleted: boolean;
    Author: string;
    WrittenDate: Date;
    Content: string;
    SubComments: Comment[];
}

export interface IPost extends mongoose.Document {
    Community: ObjectId;
    ScrappedDate: Date;

    Url: string;
    PostId: string;
    Title: string;
    Author: string;
    WrittenDate: Date;
    Content: string;

    Views: number;
    CommentCount: number;
    Comments: Comment[];
}

export const CommentSchema = new mongoose.Schema({
    Deleted: Boolean,
    author: String,
    WrittenDate: Date,
    Content: String,
})

CommentSchema.add({ SubComments: [CommentSchema] });

export const PostSchema = new mongoose.Schema({
    Community: ObjectId,
    ScrappedDate: Date,

    Url: String,
    PostId: String,
    Title: String,
    Author: String,
    WrittenDate: Date,
    Content: String,

    Views: Number,
    CommentCount: Number,
    Comments: [CommentSchema],
});

const Post = mongoose.model<IPost>("Post", PostSchema, "Posts");
export default Post;
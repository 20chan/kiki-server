import * as mongodb from "mongodb";

type ObjectID = mongodb.ObjectID;

let db: mongodb.Db;
let Posts: mongodb.Collection<Post>;
let Communities: mongodb.Collection<Community>;

mongodb.MongoClient.connect("mongodb://127.0.0.1:27017/", (err, client) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log("db connected");
        db = client.db("KiKiDB");
        Posts = db.collection("Posts");
        Communities = db.collection("Communities");
    }
});

class Comment {
    Deleted: boolean;
    Author: string;
    WrittenDate: Date;
    Content: string;
    SubComments: Comment[];
}

class Post {
    Community: ObjectID;
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

class Community {
    Name: string;
}


export default db;
export { Posts, Communities };
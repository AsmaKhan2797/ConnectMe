import { Comments } from "./Comments";

export interface Post {
    postId: string;
    userName: string;
    postImage: ImageData;
    postDescription: string;
    postLikes: string;
    postDate: string;
    postComments: Comments[];
}
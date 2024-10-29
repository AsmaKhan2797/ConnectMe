import { Comments } from "./Comments";

export interface Story {
    storyId: any;
    userName: string;
    storyImage: string;
    storyDescription: string;
    storyLikes: string;
    storyDate: string;
    storyComments: Comments[];
}
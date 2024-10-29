import { Address } from "./Address";
import { Post } from "./Post";
import { Story } from "./Story";

export interface Profile {
    profileId: string;
    profileImage: any;
    firstName: string;
    lastName: string;
    gender: string;
    dateOfBirth: string;
    age: string;
    contactNo: string;
    emailId: string;
    userName: string;
    password: string;
    isActive: string;
    address: Address;
    postDetails: Post[];
    toryDetails: Story[];
}
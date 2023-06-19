import { User } from "./user";

export class Image {
    id!: number;
    name!: string;
    imagenUrl!: string;
    type!: string;
    imageData!: any;
    user!: User;
    }
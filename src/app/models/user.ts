import { Image } from "./image";
import { Role } from "./role";

  export class User {
    id!: any;
    name!: string;
    firstName!:string;
    lastName!:string;
    username?: string;
    email?: string;
    password?: string;
    enabled?: boolean;
    gender?: string;
    cin?: string;
    adresse?: string;
    cnss?: string;
    rib?: string;
    dateDeNaissance?: Date;
    poste?: string;
    age?: number;
    phoneNumber?: number;
    locked?: boolean;
    soldeConge?: number;
    accessToken?: string;
    refreshToken?: string;
    imageurl?: string;
    typeContrat?: string;
    salaire?: number;
    roles?: Role[];
    createdAt?: Date;
    updatedAt?: Date;
    image?: Image;
  }
  
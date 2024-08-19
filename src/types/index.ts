import { StaticImport } from "next/dist/shared/lib/get-img-props"

export interface FormLogin{
    email: string
    password: string
}

export interface Treatment{
    icon: StaticImport
    treatment: "Bread" | "Shaving" | "Creambath"
}


export interface Kapster{
    photo: StaticImport
    name: "reza" | "wahyu" | "wanda"
}
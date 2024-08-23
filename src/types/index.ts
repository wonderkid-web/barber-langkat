import { StaticImport } from "next/dist/shared/lib/get-img-props"

export interface FormLogin{
    email: string
    password: string
}

export interface Treatment{
    icon: StaticImport
    treatment:TreatmentList
}


export interface Kapster{
    photo: StaticImport
    name: KapsterName
}

export interface Report {
    created_at: string;
    customer: string;
    kapster: KapsterName;
    treatment: TreatmentList;
    price: number;
}

export interface Order{
    created_at: string;
    customer: string;
    kapster: KapsterName;
    treatment: TreatmentList;
}

export type TreatmentList =  "Bread" | "Shaving" | "Creambath"

export type KapsterName = "reza" | "wahyu" | "wanda"
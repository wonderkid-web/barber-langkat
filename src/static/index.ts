
import { Kapster, Treatment } from "@/types";
import { andre, bread, creambath, reza, shaving, wahyu, wanda } from "./images";


export const LOGO_URL = "https://static.vecteezy.com/system/resources/thumbnails/010/071/559/small_2x/barbershop-logo-barber-shop-logo-template-vector.jpg"


export const treatment : Treatment[] = [
    {
        icon: shaving,
        treatment: "Shaving" 
    },
    {
        icon: creambath,
        treatment: "Creambath" 
    },
    {
        icon: bread,
        treatment: "Bread"
    },
]


export const kapster : Kapster[] = [
    {
        photo: reza,
        name: "reza" 
    },
    {
        photo: andre,
        name: "wanda" 
    },
    {
        photo: wahyu,
        name: "wahyu"
    },
]
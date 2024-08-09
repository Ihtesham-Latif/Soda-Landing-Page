import orangeTin from '../assets/orange.png'
import lemonTin from '../assets/lemon.png'
import strawTin from '../assets/straw.png'

export const TinsData =  [
    {   
        id:1,
        image: orangeTin,
        price:"250 Pkr"
    },
    {
        id:2,
        image:lemonTin,
        price:"250 Pkr"
    },
    {
        id:3,
        image:strawTin,
        price:"250 Pkr"
    },
]

export const OrangeTin = {
        title:"Orange Soda",
        image:orangeTin,
        bg:"bg-gradient-to-r from-orange-600 to-orange-900",
        bgText:"Orange"
    }


    export const LemonTin = {
        title:"Lemon Soda",
        image:lemonTin,
        bg:"bg-gradient-to-r from-yellow-400 to-green-800",
        bgText:"Lemon"
    }

    export const StrawTin = {
        title:"StrawBlue Soda",
        image:strawTin,
        bg:"bg-gradient-to-r from-red-700 to-blue-950",
        bgText:"Berry"
    }

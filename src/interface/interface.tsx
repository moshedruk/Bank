import { props_state } from "../componnents/mypage"

export interface Props_card {
    manu: string
    sum: number
    sumcatd: number
    sumcatdlest?: string    
    setSumcard: (x: (itam: number) => number) => void
    setSumcardlest: (x: (itam: string) => string) => void
}

export interface Props_for_transformation  {
    sumcatd: number
    sum: number
    setSumcard: (x: (itam: number) => number) => void
    sumcatdlest: string
    setSumcardlest: (x: (itam: string) => string) => void
    setSum:(x: (itam: number) => number) => void
    setList:(x: (itam: props_state[]) => props_state[]) => void    
    setList_bank: (x: (itam: props_state[]) => props_state[]) => void    
}

export interface Props_for_profile {
    sum: number
    sumcatd: number
    sumcatdlest?: string
}

export interface Props_for_my_card {
    sumcatd: number
    sumcatdlest: string
}

export interface Props_page {
   
    sum: number
    sumcatd: number
    sumcatdlest: string
    setSum:(x: (itam: number) => number) => void
    setSumcard: (x: (itam: number) => number) => void
    setSumcardlest: (x: (itam: string) => string) => void
}
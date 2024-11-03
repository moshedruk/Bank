import React from 'react'
import './mycard.css'
import { Props_for_my_card } from '../interface/interface'



export default function Mycard({sumcatd, sumcatdlest }: Props_for_my_card) {
    const Sumcard = sumcatd
    const Sumcardlest = sumcatdlest
    return (
        <div className='main-crad'>            
                <div className='money'>
                    <h2>This month's payments</h2>
                    <p>{Sumcard}</p>
                </div>
                <div className='money'>
                    <h2>last month</h2>
                    <p>{Sumcardlest}</p>                
            </div>
        </div>
    )
}

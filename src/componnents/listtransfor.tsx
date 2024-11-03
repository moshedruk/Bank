import React from 'react'

import './Listtransfor.css'

export interface props_state {
    for: string
    sum: number
    blans: number
}
export interface PropsForList {
    list: props_state[];
}
export default function Listtransforcard({ list }: PropsForList) {
    return (
        <div className='list-item'>
            { list.length == 0 && <h1>There are no recent listings</h1>}
            {list.map((i: props_state) => {
                return (
                    <div className='main-list-card' key={i.for} >
                        <p>transfer to :</p>
                        <p>"{i.for} " ,</p>
                        <p>amount :   </p>
                        <div className='sum'>
                            <p>  -{i.sum} </p>
                        </div>,
                        <p>balance : {i.blans} </p>
                    </div>
                )
            })}
        </div>
    )
}

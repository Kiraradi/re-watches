import React from 'react'
import { WatchInfo } from '../form/form'
import Watch from '../Watch/Watch'

import './watches.css'

export interface WatchListInterface {
    watches: WatchInfo[],
    removeWatch: any
}

export default function Watches(props: WatchListInterface) {
  return (
    <div className='watches-wrapper'>
        {
            props.watches.map((watch)=> {
                return <Watch watch={watch} removeWatch={props.removeWatch} key={watch.id}></Watch>
            })
        }
    </div>
  )
}

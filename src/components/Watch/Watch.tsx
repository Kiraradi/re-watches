import React, { useEffect, useState } from 'react'
import { WatchInfo } from '../form/form'
import moment from 'moment'

import './Watch.css';

export interface WatchComponentInfo {
    watch: WatchInfo
    removeWatch: any
}

export default function Watch(props: WatchComponentInfo) {
    let date = new Date();
    let utc = date.getTime() + (date.getTimezoneOffset() * 60000);
    let newDate = new Date(utc + (3600000*props.watch.timeZone));

    const [state, setState] = useState(newDate)

    useEffect(() => {
        const id = setInterval(() => {
            setState(new Date(newDate.getTime() + 1000))  
        }, 1000);
        return () => {
            clearInterval(id);  
        }
    })
    
    
    return (
        <div className='watch-wrapper'>
            <div className='watch-content'>
                <h2 className='watch-title'>{props.watch.name}</h2>
                <div className='watch'>{moment(state).format('HH:mm:ss')}</div>
            </div>
            <span className="material-symbols-outlined watch-button" onClick={() => {props.removeWatch(props.watch.id)}}>cancel</span>
        </div>
    )
}

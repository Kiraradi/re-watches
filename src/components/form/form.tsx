import React from 'react';
import { useState } from 'react';
import uuid from 'react-uuid';

import "./form.css";

export interface Props {
    onAddWatchInfo: any
}

export interface WatchInfo {
    name: string,
    timeZone: number
    id: string
}

export default function Form({ onAddWatchInfo }: Props) {
    const initWatchInfo: WatchInfo  = {
        name: "",
        timeZone: 0,
        id: uuid()
    }

    const [watchInfo, setWatchInfo] = useState(initWatchInfo);

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onAddWatchInfo(watchInfo);
        setWatchInfo(initWatchInfo);
    }

    const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const numberNames = [ 'timeZone' ];
        const { name, value } = event.target;
        setWatchInfo({...watchInfo, [name]: numberNames.includes(name) ? Number(value) : value});
    }

    return (
        <div className='form-wrapper'>
            <form className='form' onSubmit={submitForm}>
                <div className='input_wrapper'>
                    <label htmlFor='name'>Название</label>
                    <input 
                        className='input' 
                        name='name' 
                        type='text'
                        placeholder='Например Москва...'
                        value={watchInfo.name}
                        onChange={handlerChange}
                        required
                    ></input>
                </div>
                <div className='input_wrapper'>
                    <label htmlFor='name'>Временная зона</label>
                    <input
                        className='input' 
                        name='timeZone' 
                        type='number'
                        min={-12}
                        max={12}
                        placeholder='От -12 до 12'
                        value={watchInfo.timeZone}
                        onChange={handlerChange}
                        required
                    ></input>
                </div>
                <button className='form-button'>Добавить</button>
            </form>
        </div>
    )
}

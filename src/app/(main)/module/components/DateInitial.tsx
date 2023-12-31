import React, { useState } from 'react';
import { Calendar } from 'primereact/calendar';
import { useAppSelector } from '../../../../redux/hooks/hooks';
//!esto tenemos que hacerlo general <<< sacar de aqui, el calendario se puede usar en otras features
export default function DateInitial() {
    const [date, setDate] = useState(null);
    const dictionary = useAppSelector((state) => state.reducerLanguage).dictionary;

    return (
        <div className="w-full gap-2 flex flex-column justify-content-center align-content-center">
            <label className="text-600 text-sm">{dictionary.InitDate}</label>
            <Calendar value={date} placeholder={dictionary.DateFormat} onChange={(e) => setDate(e.value)} showIcon className="border-round-xl border-none bg-bluegray-900" />
        </div>
    );
}

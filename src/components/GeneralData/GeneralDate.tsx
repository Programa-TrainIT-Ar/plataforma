import React, { useState } from 'react'
import { Calendar } from 'primereact/calendar';

interface Props {
  size?: 'small' | 'medium' | 'large';
  title?: string;
  outline?: boolean;
}

export default function GeneralDate ({ size, title }: Props) {
  const [date, setDate] = useState(null);

    return (
        <div className="w-full flex flex-column">
            <label>{title}</label>
            <Calendar className=' border-round-2xl' value={date} onChange={(e) => setDate(e.value)} showIcon />
        </div>
    );
}

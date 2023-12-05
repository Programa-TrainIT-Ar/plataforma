import React from 'react';
import { Button } from 'primereact/button';
interface Props {
    onclick: (params: any) => void;
    size: 'small' | 'medium' | 'large';
    color: 'red' | 'blue' | 'green' | 'yellow' | 'purple' | 'orange' | 'pink' | 'black' | 'white' | 'grey' | 'brown' | 'aqua' | 'lime' | 'navy' | 'teal' | 'fuch ';
    title: string;
    icon: string;
    outline?: boolean;
}

export const ButtonPrimary = ({ onclick, title, size, color, icon, outline = false }: Props) => {
    return <Button className=' border-round-2xl' label={title} color={color} icon={icon}/>;
};

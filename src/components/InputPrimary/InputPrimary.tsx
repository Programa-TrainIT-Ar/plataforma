import { InputText } from 'primereact/inputtext';

interface Props {
    size: 'small' | 'medium' | 'large';
    title?: string;
    outline?: boolean;
    color?: ColorApp;
}
type ColorApp = 'bg-rose-200' | 'bg-red-600' | 'bg-black';

export const InputPrimary = ({ size, title, color = 'bg-rose-200' }: Props) => {
    return (
        <div className="w-full flex flex-column">
            <label >{title}</label>
            <InputText type="text" color='bg-rose-200' className=' border-round-2xl {`${color}`}' />
        </div>
    );
};

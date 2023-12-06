import React from 'react';
import { ButtonPrimary } from '../../../../components/ButtonPrimary/ButtonPrimary';
import { InputPrimary } from '../../../../components/InputPrimary/InputPrimary';
import { TextArea } from '../../../../components/TextArea/TextArea';
import GeneralDate from '../../../../components/GeneralData/GeneralDate';
import Search from '../../../../components/Search/Search';

const FormCreateModule = () => {
    return (
        <form className="col-10 ">
            <div className="w-full gap-3 flex flex-row gap  justify-start justify-items-center">
                <InputPrimary size="large" title="Nombre del Modulo" color='bg-rose-200' />
                <GeneralDate title='Fecha Inicio'/>
            </div>
            <div className="flex w-full flex-column   ">
                <TextArea title='Descripción' size='medium' placeholder='Objetivo del Módulo'/>
            </div>
            <div className="flex justify-content-around p-2">
                <Search icon='pi pi-search' title='Search'/>
                <ButtonPrimary title="Crear"  color="black" size="medium" icon="pi pi-plus" onclick={() => {}} />
            </div>
        </form>
    );
};

export default FormCreateModule;

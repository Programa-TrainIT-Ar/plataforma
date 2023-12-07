import React, { useEffect } from 'react';
import { ButtonPrimary } from '../../../../components/ButtonPrimary/ButtonPrimary';
import { InputPrimary } from '../../../../components/InputPrimary/InputPrimary';
import { TextArea } from '../../../../components/TextArea/TextArea';
import GeneralDate from '../../../../components/GeneralData/GeneralDate';
import Search from '../../../../components/Search/Search';

const FormCreateModule = () => {
    useEffect(() => {
        const forms = document.getElementById('data_form');

        if (forms) {
            forms.addEventListener('submit', (e) => {
                e.preventDefault();

                let data = new FormData(forms);

                let peticion = {
                    method: 'POST',
                    body: data,
                };

                fetch('http://localhost:5000/modules', peticion)
                    .then(response => response.json())
                    .then(response => {
                        if (response.status === 'success') {
                            alert('Modulo creado');
                        }
                        window.location.reload();

                                        })
                    .catch(error => {
                        console.error(error);
                    });
            });
        }
    }, []);

    return (
        <form id='data_form' className="col-10 ">
            <div className="w-full gap-3 flex flex-row gap  justify-start justify-items-center">
                <InputPrimary id='name' size="large" title="Nombre del Modulo" color='bg-rose-200' />
                <GeneralDate title='Fecha Inicio'/>
            </div>
            <div className="flex w-full flex-column   ">
                <TextArea size='medium' placeholder='Objetivo del Módulo'/>
            </div>
            <div className="flex justify-content-around p-2">
                <Search icon='pi pi-search' title='Search'/>
                <ButtonPrimary title="Crear"  color="black" size="medium" icon="pi pi-plus" onclick={() => {}} />
            </div>
        </form>
    );
}

export default FormCreateModule;

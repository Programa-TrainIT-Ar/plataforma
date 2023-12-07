import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useFetch } from '../../../../hook/UseFetch';
import ActionButton from '../../../../components/ActionButton/ActionButton';

export default function DataTableModule() {
    const { data } = useFetch('http://localhost:5000/modules');

    return (
        <div className="col-10">
            <DataTable
                value={data}
                responsiveLayout="scroll"
                paginator={true}
                rows={10}
                rowsPerPageOptions={[5, 10, 20]}
                style={{ border: 'none', background: 'none' }}
            >
                <Column className='flex justify-content-center border-none' key="acciones" field="Acciones" header="Acciones" body={ActionButton}></Column>
                <Column className=' border-none' key="modulo" field="Módulo" header="Módulo" body={user => user.name}></Column>
                <Column className=' border-none' key="creacion" field="Creación" header="Creación" body={user => user.creacion}></Column>
                <Column className=' border-none' key="inicio" field="Inicio" header="Inicio" body={user => user.inicio}></Column>
                <Column className=' border-none' key="creador" field="Creador" header="Creador" body={user => user.creador}></Column>
                <Column className=' border-none' key="estado" field="Estado" header="Estado" body={user => user.estado}></Column>
            </DataTable>
        </div>
    );
}

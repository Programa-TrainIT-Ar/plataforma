import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useFetch } from '../../../../hook/UseFetch';

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
                header="Modulo"
                style={{ border: 'none', background: 'none' }}
            >
                <Column key="acciones" field="Acciones" header="Acciones"></Column>
                <Column key="modulo" field="Módulo" header="Módulo" body={user => user.name}></Column>
                <Column key="creacion" field="Creación" header="Creación" body={user => user.creacion}></Column>
                <Column key="inicio" field="Inicio" header="Inicio" body={user => user.inicio}></Column>
                <Column key="creador" field="Creador" header="Creador" body={user => user.creador}></Column>
                <Column key="estado" field="Estado" header="Estado" body={user => user.estado}></Column>
            </DataTable>
        </div>
    );
}

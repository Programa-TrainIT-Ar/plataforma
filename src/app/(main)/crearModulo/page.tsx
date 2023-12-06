
'use client'
import React from 'react';
import FormCreateModule from './components/FormCreateModule';
import DataTableModule from './components/DataTableModule';

const CrearModules = () => {
  return (
    <div className='col-11 flex flex-column justify-content-center m-auto'>
        <FormCreateModule/>
        <DataTableModule />
    </div>
  )
}

export default CrearModules
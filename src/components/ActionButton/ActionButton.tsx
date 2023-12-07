import { Button } from 'primereact/button'
import React from 'react'

export default function ActionButton () {
  return (
    <div className="flex flex-wrap">
      <Button type="button" icon="pi pi-eye" className=' bg-transparent border-none text-white'></Button>
      <Button type="button" icon="pi pi-file-edit" className=' bg-transparent border-none text-white'></Button>
      <Button type="button" icon="pi pi-trash" className=' bg-transparent border-none text-white'></Button>
    </div>
  )
}

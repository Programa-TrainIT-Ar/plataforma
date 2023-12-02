import { InputText } from 'primereact/inputtext'
import React from 'react'

interface Props {
  size: "small" | "medium" | "large";
  title?: string;
  outline?: boolean;
}

export const Input = ({size, title}:Props) => {
  return (
    <div className='col-5 flex flex-column m-2'>
          <label>{title}</label>
          <InputText type="text" />
      </div>
  )
}

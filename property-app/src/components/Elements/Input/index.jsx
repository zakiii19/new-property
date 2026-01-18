import React from 'react'
import Input from './Input'
import Label from './Label'

const InputForm = (props) => {
    const { label, name, type, placeholder} = props;
  return (
    <div className="mb-3">
      <Label htmlFor={name}>{label}</Label>
      <Input placeholder={placeholder} name={name} type={type}/>
    </div>
  )
}

export default InputForm
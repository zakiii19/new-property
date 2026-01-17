import React from 'react'
import Input from './Input'
import Label from './Label'

const InputForm = (props) => {
    const { label, name, type, placeholder} = props;
  return (
    <>
    <Label htmlFor={name}>{label}</Label>
    <Input placeholder={placeholder} name={name} type={type}/>
    </>
  )
}

export default InputForm
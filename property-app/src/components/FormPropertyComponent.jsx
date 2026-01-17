import React from 'react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import InputForm from './Elements/Input/Index'

function FormPropertyComponent() {
  return (
    <div className="shadow-md p-2 m-2 rounded-lg bg-gray-100 font-[inter] text-neutral-800">
      <InputForm label="JUDUL LISTING" name="judulListing" type="text" placeholder="Ketik judul cok..."></InputForm>
      <InputForm label="HARGA" name="harga" type="text" placeholder="Ketik harga cok..."></InputForm>
    </div>
  )
}

export default FormPropertyComponent
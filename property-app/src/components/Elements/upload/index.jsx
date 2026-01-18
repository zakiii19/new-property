import React from 'react'
import { FaCamera } from 'react-icons/fa';


const Upload = (props) => {
  return (
        <div className="cursor-pointer rounded-xl border-2 border-gray-300 border-dashed bg-gray-100  mb-4 pt-4 text-center justify-items-center h-40 " id="uploadBox">

              <div className="rounded-4xl m-auto bg-blue-100 h-12 w-12 flex items-center justify-center mb-3">
                <FaCamera className=" inline text-blue-500"/>
              </div>
              <p className="font-bold text-sm text-neutral-800">Klik untuk Upload Foto</p>
              <p className="text-xs text-neutral-400">Format JPG/PNG (Max 5MB)</p>
              <input type="file" id="fileInput" hidden />
          </div>
  )
}

export default Upload;
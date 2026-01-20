import React from 'react'
import FormProperty from '../Fragments/FormProperty'
import PreviewProperty from '../Fragments/PreviewProperty'
import Button from '../Elements/button/Button'
import { FaHome } from "react-icons/fa";

const BrochureLayout = () => {
  return (
   <div className="flex flex-wrap m-3 gap-4">
    
        <FormProperty class="basis-md" />
        <PreviewProperty class="basis-lg" />
        <Button icon={FaHome} type="submit">Submit</Button>
        
      </div>
  )
}

export default BrochureLayout
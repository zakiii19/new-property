import React from 'react'
import NavbarComponent from '../components/NavbarComponent'
import FormPropertyComponent from '../components/FormPropertyComponent'
import PreviewPropertyComponent from '../components/PreviewPropertyComponent'


export const Brochure = () => {
    return (
        <>
            <NavbarComponent />
            
            <div className="flex flex-row">
                <FormPropertyComponent class="basis-md"/>
                <PreviewPropertyComponent class="basis-lg"/>

            </div>
        </>
    )
}

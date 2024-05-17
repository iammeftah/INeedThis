import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import Authentification from "../Components/Authentification/Authentification";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Authentification">
                <Authentification/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews
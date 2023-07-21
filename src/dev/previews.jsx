import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import {ContentNavButton} from "../pages/homePage/ContentNavButton";
import {HomePage} from "../pages/homePage/HomePage";
import {ContactMe} from "../pages/contact_me/ContactMe";
import {NavBar} from "../components/NavBar/NavBar";
import App from "../App";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/ContentNavButton">
                <ContentNavButton/>
            </ComponentPreview>
            <ComponentPreview path="/HomePage">
                <HomePage/>
            </ComponentPreview>
            <ComponentPreview path="/ContactMe">
                <ContactMe/>
            </ComponentPreview>
            <ComponentPreview path="/NavBar">
                <NavBar/>
            </ComponentPreview>
            <ComponentPreview path="/App">
                <App/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews
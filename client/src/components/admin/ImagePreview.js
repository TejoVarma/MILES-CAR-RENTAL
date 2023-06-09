import React, { useContext } from "react";
import { CarList } from "../../context/AdminContext";
import '../../styles/ImagePreview.css'

export default function ImagePreview() {

    const {preview} = useContext(CarList);

    return <>
        <div id="preview-img-container-admin">
            <img src={preview} alt="preview" />
        </div>
    </>
    
}
import React from "react";
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p>{'This magic brain will detect the faces from your image'}</p>
            <div className="center">
                <div className="form center pa4 br3 shadow-5">
                    <input type="Text" className="f4 pa2 w-70 center" onChange={onInputChange}></input>
                    <button className="w-30 grow f4 link ph3 pv2 dib white bg-light"
                    onClick={onButtonSubmit}
                    >Detect</button>
                </div>
            </div>
        </div>
    )
}
export default ImageLinkForm;
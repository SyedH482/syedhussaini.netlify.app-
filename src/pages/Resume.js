import '../App.css'
import React from 'react';
// import { Document, Page } from "react-pdf";
import Pdf from "../images/Resume.pdf";

function Resume(){
    return  (
            <div className="resume">
                <a href={Pdf} target ="../images/Resume.pdf">Here's my pdf</a>
            </div>
    ); 
}

export default Resume;
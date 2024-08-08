import React, { useState } from "react";
import ReactMarkdown from 'react-markdown';


function Markdown(){
    const[text, setText]= useState("");
    return (
        
        <div className="app">
        <textarea
            className="textarea"
            autoFocus
            onChange={(e) => setText(e.target.value)}
        />
        <div className="preview">
            <ReactMarkdown>{text}</ReactMarkdown>
        </div>
    </div>
    )
}

export default Markdown;
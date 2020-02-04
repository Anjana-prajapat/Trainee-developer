import React from 'react';

export const Copybutton = () => {

  	return <div>
        <div>
             <button onClick = {document.execCommand("copy")}>
               Copy to Clipboard
             </button>
        </div>
    </div>
}
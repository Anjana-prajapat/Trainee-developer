import React from 'react';
import { useParams } from 'react-router-dom';
import  filterEmoji from './filterEmoji';
import './index.css';
import { Copybutton } from './Copybutton';

export  const Emojiinfo=()=> {
    let {title}=useParams();
    let  emoji=filterEmoji(title,1)[0];
    const codePointHex = emoji.symbol.codePointAt(0).toString(16);
    const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
    
    return <div>
    	<div className="component-emoji-result-row copy-to-clipboard">
    	    <center>
                <img alt={emoji.title} src={src} />
            </center>
        </div>
    	
    	<div className="component-emoji-result-row copy-to-clipboard">
          	<center>
          		Emoji Name :: { title } :: {emoji.keywords}...
    		</center>
    	</div>

        <div className="component-emoji-result-row copy-to-clipboard">
          	<center>
          		<Copybutton />
        	</center>
        </div>
        
    </div>
  
}

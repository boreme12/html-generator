import React from 'react';

export default function Button({title, id, key, onClick}) {
    return(
        <a
            key={key} 
            href="#0" 
            className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box w-100 mv2"
            onClick={() => onClick(id)}
        >
            <span className="pr1">{title}</span>
            <svg className="w1" data-icon="chevronRight" viewBox="0 0 32 32" style={{"fill":"currentcolor"}} >
                <title>chevronRight icon</title>
                <path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z"></path>
            </svg>
        </a>
    );
}
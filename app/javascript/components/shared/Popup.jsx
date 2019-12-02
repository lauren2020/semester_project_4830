import React from 'react';  
import './styles.scss';  

const Popup = ({
    heading = "",
    body,
    list,
    renderListItem = (item) => {},
    onNegativeAction,
    onPositiveAction,
    negativeButtonText = "Close",
    positiveButtonText
}) => { 
    return (  
        <div className='popup'>  
            <div className='popup\_inner'>  
                <h1>{heading}</h1>  
                {body && <p>{body}</p>}
                {list && list.map(item => renderListItem(item))}
                <div className="horizontalLayout">
                    <button onClick={onNegativeAction}>{negativeButtonText}</button>  
                    {positiveButtonText && <button onClick={onPositiveAction}>{positiveButtonText}</button> }
                </div>
            </div>  
        </div>  
    );  
}  

export default Popup;
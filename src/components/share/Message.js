import React from 'react'
import './message.css'

export const Message = ({message}) => {
    return (
        <div className="message">
            {message}
        </div>
    )
}

export default Message
import React from 'react'

function Phone({ children }) {

    return (
        <div className="phone-template position-absolute center-absolute">
            <img
                src='phone_template.png'
                className=''
            />
            { children }
        </div>
    )
}

export default Phone
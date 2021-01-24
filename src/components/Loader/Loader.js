import React from 'react'
import './Loader.css'

const Loader = () => {
    return (
        //En enkel custom loader komponent byggt med div taggar och css
        <div className="loader-container">
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}
export default Loader
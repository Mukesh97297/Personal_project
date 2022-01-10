import React from 'react'
import syam from '../images/syam.jpg'

function Body() {
    return (
        <div>
            <div className="headerimg">
                    <div className="container-fluid">
                        <img src={syam}  alt='images' width=" 100%;" height="100%"  />
                    </div>
            </div>
        </div>
    )
}

export default Body

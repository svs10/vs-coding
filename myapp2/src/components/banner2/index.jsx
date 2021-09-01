// import React from 'react'

// export default function banner2() {
//     return (
//         <div className="banner-2-custom">

// <h1>45,567</h1><h2>NO OF SUPPORTERS</h2>

// <span></span>

   



//         </div>
//     )
// }

import React from 'react'
import Logo from '../../resources/images/logo.png'

export default function banner2() {
    return (
        <div className="banner-2-custom">
            <center><img src={Logo} width="100"></img></center>

<h1><strong className="gtext">345,456</strong> <strong>number of supporters worldwide</strong></h1>

<span></span>

        </div>
    )
}
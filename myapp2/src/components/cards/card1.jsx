import React from 'react'
import Img from "../../resources/images/card1.jpg"
export default function card1() {
    return (
        <div>
            <div className="row card-1-custom-con" >
<div className="col-6 custom-card-img">
<img src={Img} alt="" className="img-fluid" />

</div>
<div className="col-6" style={{backgroundColor:"#02b24f"}}>
<div className="row">
<div className="col-12">
    <h1 className="text-white text-center">Our Mission</h1>
</div>
<div className="col-12">
    <p className="text-white text-center">
            One day, all children in this nation will have the opportunity to attain an excellent education. We envision a world where all people – even in the most remote areas of the globe – hold the power to create opportunity for themselves and others.
    </p>
</div>
<div className="col-12 text-center">

<button className="btn btn-primary custom-card-btn" >Learn more</button>

</div>


</div>

</div>

            </div>
            <br />
        </div>
    )
}

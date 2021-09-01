import React from 'react'
import Img1 from "../images/box31.jpg";
import Img2 from "../../../sakshi/src/images/box32.png";
import Img3 from "../images/box4.jpg";


export default function main() {
    return (
        <div>
            <img src="https://media.fashionnetwork.com/m/a092/9479/cd89/d483/a3c3/e845/9177/3107/d56f/db6f/db6f.jpg" className="img-fluid" alt=" big image" />
    
            <br />
            <div className="row">
                <div className="column">
                <img src={Img1} alt="" className="box1" />
                <img src={Img2} alt="" className="box2" />
                <img src={Img3} alt="" className="box3" />
                </div>

            </div>



        </div>
      
    
    
   
        
        
    )
}
